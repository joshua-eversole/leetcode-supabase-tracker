import { useState, useEffect } from 'react';
import { supabase } from '../supabaseClient';
import { calculateReview } from '../utilities/repitition';

export function useProblems(session) {
  const [problems, setProblems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!session) return;

    async function fetchData() {
      setLoading(true);
      const { data: problemsData } = await supabase.from('problems').select('*');
      const { data: reviewsData } = await supabase.from('reviews').select('*');

      const reviewsMap = new Map(reviewsData.map(r => [r.problem_id, r]));
      const merged = problemsData.map(p => ({
        ...p,
        reviewData: reviewsMap.get(p.id) || null
      }));

      setProblems(merged);
      setLoading(false);
    }
    fetchData();
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

  // Review
  const reviewProblem = async (problem_id, oldReview, rating) => {
    if (!session) return;

    const newReviewData = calculateReview(rating, oldReview);
    const next_review_date = new Date();
    next_review_date.setDate(next_review_date.getDate() + newReviewData.interval_days);

    const payload = {
      user_id: session.user.id,
      problem_id,
      ...newReviewData,
      next_review_at: next_review_date.toISOString(),
      last_reviewed_at: new Date().toISOString(),
    };

    const { error } = await supabase.from('reviews').upsert(payload);
    if (error) {
      console.error(error);
      return;
    }

    setProblems(prev => prev.map(p => {
      if (p.id === problem_id) {
        return { ...p, reviewData: { ...p.reviewData, ...payload } };
      }
      return p;
    }));
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

  return { 
    problems, 
    loading, 
    addProblem, 
    reviewProblem, 
    deleteProblem, 
    editProblem,
    updateStatus
  };
}