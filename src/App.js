import React, { useState, useEffect } from 'react';
import { supabase } from './supabaseClient';

import ProblemForm from './components/ProblemForm';
import ProblemList from './components/ProblemList';
import Container from '@mui/material/Container';

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
  const [dailyProblems, setDailyProblems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getDailyProblems() {
      setLoading(true);
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
      const mergedProblems = problemsToShow.map(problem => {
          const review = reviewsMap.get(problem.id) || null;
          return {
              ...problem, 
              reviewData: review, 
              reviewIntervals: getIntervals(review), 
          };
      });

      setDailyProblems(mergedProblems);
      setLoading(false);
    }
    getDailyProblems();
  }, []);

  // Handles adding a new problem to the database
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


  // Handles the logic behind reviewing an existing problem and how to put it back in the deck
async function handleReview(problem_id, existingReviewData, rating, currentNotes) { // <-- ADDED currentNotes
    
    // Save the notes
    if (problem_id && currentNotes !== (existingReviewData?.description || '')) {
        const { error: descError } = await supabase
            .from('problems')
            .update({ description: currentNotes }) // Update the description column
            .eq('id', problem_id); // Where the ID matches

        if (descError) {
            console.error('Error updating problem description during review:', descError);
        }
    }

    // 1. Calculate new review state
    const { interval_days, ease_factor, consecutive_successes } = calculateReview(rating, existingReviewData);

    // 2. Calculate next review date
    const today = new Date();
    const next_review_at = new Date(today.setDate(today.getDate() + interval_days));

    // 3. Create the data object for the database
    const reviewPayload = {
      problem_id: problem_id,
      interval_days: interval_days,
      ease_factor: ease_factor,
      last_reviewed_at: new Date().toISOString(),
      next_review_at: next_review_at.toISOString(),
      consecutive_successes: consecutive_successes,
    };

    // 4. Check if this is the first review or an update
    if (!existingReviewData) {
      // If this is a fisrt review, insert a new problem
      const { error } = await supabase
        .from('reviews')
        .insert(reviewPayload);
      if (error) console.warn('Error inserting review:', error);

    } else {
      // If this is an update, update the existing problem
      const { error } = await supabase
        .from('reviews')
        .update(reviewPayload)
        .eq('id', existingReviewData.id);
      if (error) console.warn('Error updating review:', error);
    }

    // 5. Remove the problem from the daily review list
    setDailyProblems(dailyProblems.filter(p => p.id !== problem_id));
  }

return (
  <Container maxWidth="lg"> 
        
        <h2>Add a New Problem</h2>
        <ProblemForm onSubmit={handleAddProblem} />
        
        <hr />

        <h2>Daily Review List</h2>
        <ProblemList
          loading={loading}
          problems={dailyProblems}
          onReview={handleReview}
        />
      
      </Container>
  );
}

export default App;