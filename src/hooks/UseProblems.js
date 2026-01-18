import { useState, useEffect } from 'react';
import { supabase } from '../supabaseClient';
import { calculateReview } from '../utilities/repitition';

export function useProblems(session) {
  const [problems, setProblems] = useState([]);
  const [loading, setLoading] = useState(true);

// --- DAILY DRIP ENGINE 💧 ---
  const runDailyDrip = async (currentProblems) => {
    // 1. Check if we already ran today
    const todayKey = new Date().toDateString();
    const lastRun = localStorage.getItem('lastDripDate');
    const target = parseInt(localStorage.getItem('dailyTarget') || '0', 10);
    const useOffset = localStorage.getItem('useSmartOffset') === 'true';

    // 1a. Stop if ran today OR target is 0
    if (lastRun === todayKey || target === 0) return currentProblems;

    console.log("💧 Running Daily Drip...");

    // 2. Calculate "Due Today" (for Smart Offset)
    let dueCount = 0;
    if (useOffset) {
      const now = new Date();
      now.setHours(0, 0, 0, 0); // Start of day
      
      dueCount = currentProblems.filter(p => {
        // 2a. Count active problems that are due today or overdue
        if (p.status !== 'active' || !p.reviewData) return false;
        const nextReview = new Date(p.reviewData.next_review_at);
        nextReview.setHours(0, 0, 0, 0);
        return nextReview <= now;
      }).length;
    }

    // 3. Calculate how many to pull
    const needed = Math.max(0, target - dueCount);

    if (needed === 0) {
      console.log("💧 Smart Offset: Enough work due already. Skipping pull.");
      localStorage.setItem('lastDripDate', todayKey); 
      return currentProblems;
    }

    // 4. Find candidates from Queue (Oldest First)
    const queue = currentProblems
      .filter(p => p.status === 'queued')
      .sort((a, b) => a.id - b.id); // Assumes lower ID = older -- CHANGE THIS WHEN YOU UPDATE THE DATABASE

    const toActivate = queue.slice(0, needed);
    
    if (toActivate.length === 0) {
      console.log("💧 Queue is empty.");
      localStorage.setItem('lastDripDate', todayKey); 
      return currentProblems;
    }

    const idsToUpdate = toActivate.map(p => p.id);

    // 5. Update Supabase
    const { error } = await supabase
      .from('problems')
      .update({ status: 'active', review_data: null })
      .in('id', idsToUpdate);

    if (error) {
      console.error("💧 Drip Failed:", error);
      return currentProblems;
    }

    // 6. Success! Mark today as done and update local list
    console.log(`💧 Activated ${idsToUpdate.length} new problems.`);
    localStorage.setItem('lastDripDate', todayKey);

    // 7. Return the updated list so the UI updates instantly
    return currentProblems.map(p => 
      idsToUpdate.includes(p.id) 
        ? { ...p, status: 'active', reviewData: null } 
        : p
    );
  };

useEffect(() => {
    if (!session) return;

    const fetchProblems = async () => {
      setLoading(true);
      const { data, error } = await supabase
        .from('problems')
        .select('*');

      if (error) {
        console.error('Error fetching problems:', error);
      } 
      else {
        let formattedData = data.map(p => ({
          ...p,
          reviewData: p.review_data
        }
      ));
        formattedData = await runDailyDrip(formattedData);
        setProblems(formattedData);
      }
      setLoading(false);
    };

    fetchProblems();
  }, [session]);

  // Add
 const addProblem = async (title, external_id, difficulty, fetchedTags = [], initialStatus = 'active') => {
    if (!session) return;
    
    // Insert Problem
    const { data, error } = await supabase
      .from('problems')
      .insert([{ 
        title, 
        external_id, 
        difficulty, 
        tags: fetchedTags, 
        user_id: session.user.id,
        status: initialStatus
      }])
      .select();

    if (error) {
      console.error(error);
      return;
    }

    // Update Local State
    const newProblem = { ...data[0], reviewData: null };
    setProblems(prev => [...prev, newProblem]);
  };

// When you press a number in the problem card, it will call this function
  const reviewProblem = async (id, currentReviewData, rating) => {
    // Hide it immediately while we work on the database update
    setProblems(prev => prev.map(p => {
      if (p.id === id) {
        // Temporarily hide it or mark it as reviewed in local state 
        // We're putting the next_review_at placeholder in 2099, so it will never show up in the UI
        return { ...p, reviewData: { ...p.reviewData, next_review_at: '2099-01-01' } };
      }
      return p;
    }));

    // Decide on the next interval if this is a new or existing question
    const now = new Date();
    const existing = currentReviewData || { 
      interval: 0, 
      ease: 2.5, 
      consecutive_successes: 0 
    };

    let newInterval = 1;
    let newEase = existing.ease;
    let newConsecutive = existing.consecutive_successes;

    if (rating < 2) {
      // If you failed, reset progress
      newInterval = 1;
      newConsecutive = 0;
      newEase = Math.max(1.3, newEase - 0.2);
    } else {
      // If you succeeded, calculate next interval based on rating
      newConsecutive++;
      
      // Simple Spaced Repetition Logic:
      if (newConsecutive === 1) {
        newInterval = 1;
      } else if (newConsecutive === 2) {
        newInterval = 6;
      } else {
        // Multiplier based on rating
        const bonus = rating === 5 ? 1.5 : (rating === 2 ? 0.8 : 1.0);
        newInterval = Math.round(existing.interval * existing.ease * bonus);
      }
      
      // Adjust ease factor slightly
      if (rating === 5) newEase += 0.1;
      if (rating === 2) newEase -= 0.15;
    }

    // Calculate the Date
    const nextDate = new Date();
    nextDate.setDate(now.getDate() + newInterval + 1); // Add 1 to the interval to account for the current day
    
    const updatedData = {
      interval: newInterval,
      ease: newEase,
      consecutive_successes: newConsecutive,
      last_reviewed_at: now.toISOString(),
      next_review_at: nextDate.toISOString()
    };

    // 3. Save to Supabase
    try {
      const { error } = await supabase
        .from('problems')
        .update({ 
          review_data: updatedData, // Make sure your column is named 'review_data'
          status: 'active'          // Ensure it stays active
        })
        .eq('id', id);

      if (error) throw error;
      
      // 4. Verification: Update local state with the REAL data from DB
      setProblems(prev => prev.map(p => 
        p.id === id ? { ...p, reviewData: updatedData } : p
      ));

    } catch (err) {
      console.error("Failed to save review:", err);
      alert("Error saving review! Check console.");
      // Optional: Revert the UI if it failed (reload page or undo state change)
    }
  };

  // Delete
  const deleteProblem = async (id) => {
    const { error } = await supabase.from('problems').delete().eq('id', id);
    if (!error) {
      setProblems(prev => prev.filter(p => p.id !== id));
    }
  };

  // Edit
  const editProblem = async (updatedProblem) => {
    const { id, title, external_id, difficulty, tags } = updatedProblem;
    const { error } = await supabase
      .from('problems')
      .update({ title, external_id, difficulty, tags })
      .eq('id', id);

    if (!error) {
      setProblems(prev => prev.map(p => (p.id === id ? { ...p, title, external_id, difficulty, tags } : p)));
    }
  };

  // Update Status
  const updateStatus = async (id, newStatus) => {
    const { error } = await supabase
      .from('problems')
      .update({ status: newStatus })
      .eq('id', id);

    if (!error) {
      setProblems(prev => prev.map(p => 
        p.id === id ? { ...p, status: newStatus } : p
      ));
    }
  };

  // Bulk Add
  const bulkAddProblems = async (newProblems) => {
    if (!session || newProblems.length === 0) return;

    // Prepare data by adding user_id and status
    const payload = newProblems.map(p => ({
      ...p,
      user_id: session.user.id,
      status: 'queued' //Send it to the backlog
    }));

    const { data, error } = await supabase
      .from('problems')
      .insert(payload)
      .select();

    if (error) {
      console.error("Bulk add error:", error);
      return;
    }

    // Update local state
    const formattedData = data.map(p => ({ ...p, reviewData: null }));
    setProblems(prev => [...prev, ...formattedData]);
  };

  // Pull the next problem from the queue
  const pullFromQueue = async () => {
    // Find the oldest queued item locally 
    //       (FIFO based on id #, earlier numbers are created earlier)
    const queuedProblems = problems.filter(p => p.status === 'queued');
    
    if (queuedProblems.length === 0) {
      alert("Your queue is empty!");
      return;
    }

    // Grab the next problem  
    const nextProblem = queuedProblems.sort((a, b) => a.id - b.id)[0];

    // Update the database
    const { error } = await supabase
      .from('problems')
      .update({ 
        status: 'active',
        review_data: null // Reset this so it shows up as "Due Today
      })
      .eq('id', nextProblem.id);

    if (error) {
      console.error("Error pulling from queue:", error);
      return;
    }

    //Update the lcoal state so that it shows up immediately
    setProblems(prev => prev.map(p => 
      p.id === nextProblem.id 
        ? { ...p, status: 'active', reviewData: null } 
        : p
    ));
  };

  return { 
    problems, 
    loading, 
    addProblem, 
    reviewProblem, 
    deleteProblem, 
    editProblem,
    updateStatus,
    pullFromQueue
  };
}