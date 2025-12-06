import React, { useState, useEffect } from 'react';
import { supabase } from './supabaseClient';

import ProblemForm from './components/ProblemForm';
import ProblemList from './components/ProblemList';
import Navbar from './components/Navbar';
import AllProblemsTable from './components/AllProblemsTable';

import Container from '@mui/material/Container';
import { Routes, Route, useNavigate } from 'react-router-dom';

// Logic behind all of the srl date decisions
function calculateReview(rating, oldReview) {
  if (!oldReview) {
    let interval;
    if (rating < 3) interval = 0; 
    else if (rating === 3) interval = 1;
    else interval = 4;

    return {
      interval_days: interval,
      ease_factor: 250,
      consecutive_successes: 0,
    };
  }
  let { ease_factor, interval_days, consecutive_successes } = oldReview;
  if (rating < 3) {
    return {
      interval_days: 0, 
      ease_factor: Math.max(130, ease_factor - 20),
      consecutive_successes: 0,
    };
  }
  consecutive_successes += 1;
  ease_factor = ease_factor + (0.1 - (5 - rating) * (0.08 + (5 - rating) * 0.02));
  if (ease_factor < 130) ease_factor = 130;
  if (consecutive_successes === 1) {
    interval_days = 1;
  } else if (consecutive_successes === 2) {
    interval_days = 6;
  } else {
    interval_days = Math.ceil(interval_days * ease_factor / 100);
  }
  return {
    interval_days: interval_days,
    ease_factor: Math.round(ease_factor),
    consecutive_successes: consecutive_successes,
  };
}

function getIntervals(reviewData) {
    const intervals = {};
    // Calculate the resulting interval for each possible rating (1 through 5)
    for (let rating = 1; rating <= 5; rating++) {
        const result = calculateReview(rating, reviewData);
        intervals[rating] = result.interval_days;
    }
    return intervals;
}


function App() {
const [allProblems, setAllProblems] = useState([]); 
  const [loading, setLoading] = useState(true);

  //Navigation
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      setLoading(true);

      const { data: problems } = await supabase.from('problems').select('*');
      const { data: reviews } = await supabase.from('reviews').select('*');

      // Create lookup map
      const reviewsMap = new Map(reviews.map(r => [r.problem_id, r]));

      // Merge data for ALL problems
      const merged = problems.map(problem => {
        const review = reviewsMap.get(problem.id) || null;
        return {
            ...problem,
            reviewData: review,
            reviewIntervals: getIntervals(review)
        };
      });

      setAllProblems(merged);
      setLoading(false);
    }
    fetchData();
  }, []);

  const dailyProblems = allProblems.filter(p => {
    if (!p.reviewData) return true; // New problem
    const today = new Date().setHours(0,0,0,0);
    const nextReview = new Date(p.reviewData.next_review_at).setHours(0,0,0,0);
    return nextReview <= today;
  });

async function handleAddProblem(title, external_id, difficulty, fetchedTags = []) {
    const selectedLists = ["Neetcode 250"]; 
    const { data, error } = await supabase
      .from('problems')
      .insert([{ 
            title, external_id, difficulty, 
            lists: selectedLists, tags: fetchedTags 
      }])
      .select();

    if (data) {
      const newProblem = data[0];
      const initialIntervals = getIntervals(null);
      // Update ALL problems state
      setAllProblems([
        ...allProblems, 
        { ...newProblem, reviewData: null, reviewIntervals: initialIntervals }
      ]);
      navigate('/'); 
    }
  }


  // Handles the logic behind reviewing an existing problem and how to put it back in the deck
async function handleReview(problem_id, existingReviewData, rating, currentNotes) {
    // 1. Save notes (Same as before)
    if (problem_id && currentNotes !== (existingReviewData?.description || '')) {
         await supabase.from('problems').update({ description: currentNotes }).eq('id', problem_id);
    }

    // 2. Calculate Math (Same as before)
    const { interval_days, ease_factor, consecutive_successes } = calculateReview(rating, existingReviewData);
    const today = new Date();
    const next_review_at = new Date(today.setDate(today.getDate() + interval_days));

    const reviewPayload = {
      problem_id, interval_days, ease_factor, consecutive_successes,
      last_reviewed_at: new Date().toISOString(),
      next_review_at: next_review_at.toISOString(),
    };

    // 3. Database Update (Same as before)
    let newReviewData = null;
    if (!existingReviewData) {
      const { data } = await supabase.from('reviews').insert(reviewPayload).select();
      if(data) newReviewData = data[0];
    } else {
      const { data } = await supabase.from('reviews').update(reviewPayload).eq('id', existingReviewData.id).select();
      if(data) newReviewData = data[0];
    }

    // 4. UPDATE STATE
    // Instead of filtering the list, we update the specific item in "allProblems"
    setAllProblems(prevProblems => prevProblems.map(p => {
        if (p.id === problem_id) {
            return {
                ...p,
                reviewData: newReviewData, // Update with new dates
                reviewIntervals: getIntervals(newReviewData) // Recalculate tooltips
            };
        }
        return p;
    }));
  }

  return (
    <>
      <Navbar />
      <Container maxWidth="lg">
        <Routes>
          {/* Home: Passes the FILTERED daily list */}
          <Route path="/" element={
              <ProblemList 
                loading={loading} 
                problems={dailyProblems} 
                onReview={handleReview} 
              />
          } />

          {/* New Page: Passes the COMPLETE list */}
          <Route path="/all" element={
              <AllProblemsTable problems={allProblems} />
          } />

          <Route path="/add" element={
              <ProblemForm onSubmit={handleAddProblem} />
          } />
        </Routes>
      </Container>
    </>
  );
}

export default App;