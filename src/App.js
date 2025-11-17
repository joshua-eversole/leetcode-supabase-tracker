// src/App.js
import React, { useState, useEffect } from 'react';
import { supabase } from './supabaseClient';

// --- Import our new components ---
import ProblemForm from './components/ProblemForm';
import ProblemList from './components/ProblemList';

// --- The Spaced Repetition "Brain" ---
// This function doesn't change
function calculateReview(rating, oldReview) {
  // ... (all your existing calculateReview logic is here)
  // [No changes]
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


function App() {
  // --- All state lives in App.js ---
  const [dailyProblems, setDailyProblems] = useState([]);
  const [loading, setLoading] = useState(true);

  // --- All data logic lives in App.js ---
  useEffect(() => {
    async function getDailyProblems() {
      setLoading(true);
      // ... (all your existing getDailyProblems logic)
      // [No changes]
      const { data: problems, error: problemsError } = await supabase
        .from('problems')
        .select('*');
      if (problemsError) console.warn(problemsError);
      const { data: reviews, error: reviewsError } = await supabase
        .from('reviews')
        .select('*');
      if (reviewsError) console.warn(reviewsError);
      const today = new Date().setHours(0, 0, 0, 0); 
      const reviewsMap = new Map(reviews.map(review => [review.problem_id, review]));
      const problemsToShow = problems.filter(problem => {
        const review = reviewsMap.get(problem.id);
        if (!review) return true;
        const nextReviewDate = new Date(review.next_review_at).setHours(0, 0, 0, 0);
        if (nextReviewDate <= today) return true;
        return false;
      });
      const mergedProblems = problemsToShow.map(problem => ({
        ...problem,
        reviewData: reviewsMap.get(problem.id) || null
      }));
      setDailyProblems(mergedProblems);
      setLoading(false);
    }
    getDailyProblems();
  }, []);

  // --- All event handlers live in App.js ---
  async function handleAddProblem(title, external_id, difficulty) {
    const { data, error } = await supabase
      .from('problems')
      .insert([
        { title: title, external_id: external_id, difficulty: difficulty, lists: ["Neetcode 250"] }
      ])
      .select();

    if (error) {
      console.warn(error);
    } else if (data) {
      setDailyProblems([...dailyProblems, { ...data[0], reviewData: null }]);
    }
  }

  async function handleReview(problem_id, existingReviewData, rating) {
    // ... (all your existing handleReview logic)
    // [No changes]
    const { interval_days, ease_factor, consecutive_successes } = calculateReview(rating, existingReviewData);
    const today = new Date();
    const next_review_at = new Date(today.setDate(today.getDate() + interval_days));
    const reviewPayload = {
      problem_id: problem_id,
      interval_days: interval_days,
      ease_factor: ease_factor,
      last_reviewed_at: new Date().toISOString(),
      next_review_at: next_review_at.toISOString(),
      consecutive_successes: consecutive_successes,
    };
    if (!existingReviewData) {
      const { error } = await supabase.from('reviews').insert(reviewPayload);
      if (error) console.warn('Error inserting review:', error);
    } else {
      const { error } = await supabase.from('reviews').update(reviewPayload).eq('id', existingReviewData.id);
      if (error) console.warn('Error updating review:', error);
    }
    setDailyProblems(dailyProblems.filter(p => p.id !== problem_id));
  }

  // --- The NEW simple render method ---
  return (
    <div className="App">
      <h2>Add a New Problem</h2>
      {/* We pass the 'handleAddProblem' function down as a prop
        named 'onSubmit'.
      */}
      <ProblemForm onSubmit={handleAddProblem} />
      
      <hr />

      <h2>Daily Review List</h2>
      {/* We pass the data and functions down as props.
      */}
      <ProblemList
        loading={loading}
        problems={dailyProblems}
        onReview={handleReview}
      />
    </div>
  );
}

export default App;