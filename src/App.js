import React, { useState, useEffect } from 'react';
import { supabase } from './supabaseClient';
//Components
import ProblemForm from './components/ProblemForm';
import ProblemList from './components/ProblemList';
import Navbar from './components/Navbar';
import AllProblemsTable from './components/AllProblemsTable';
import Auth from './components/Auth';
import StatsDashboard from './components/StatsDashboard';
//MUI Components
import Container from '@mui/material/Container';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
//Theme
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { getDesignTokens } from './theme';
import { useMemo } from 'react';

// Logic behind all of the srl date decisions
function calculateReview(rating, oldReview) {
  // Tune these to find the sweet spot
  const MIN_EASE = 130;
  const MAX_INTERVAL_BONUS = 1.3;
  
  // CONFIG: How many days to wait based on the first rating (1-5)
  const INITIAL_INTERVALS = [1, 2, 3, 5, 7];

  // Scenario 1: new problem
  if (!oldReview) {
    const interval = INITIAL_INTERVALS[rating - 1];

    return {
      interval_days: interval,
      ease_factor: 250, // Standard starting ease
      consecutive_successes: rating >= 3 ? 1 : 0,
    };
  }

  // Scenario 2: Reviewing an existing problem
  let { ease_factor, interval_days, consecutive_successes } = oldReview;

  // A. Failed (1 or 2)
  if (rating < 3) {
    return {
      interval_days: rating, // Wait 1 or 2 days
      ease_factor: Math.max(MIN_EASE, ease_factor - 20),
      consecutive_successes: 0,
    };
  }

  // B. Pass (3, 4)
  consecutive_successes += 1;

  // Update Ease Factor
  ease_factor = ease_factor + (0.1 - (5 - rating) * (0.08 + (5 - rating) * 0.02));
  if (ease_factor < MIN_EASE) ease_factor = MIN_EASE;

  // Update Interval
  if (consecutive_successes === 1) {
    interval_days = 1;
  } else if (consecutive_successes === 2) {
    interval_days = 6;
  } else {
    // If we've succeeded multiple times, start expanding exponentially
    let growthMultiplier = ease_factor / 100;
    if (rating === 5) growthMultiplier *= MAX_INTERVAL_BONUS;
    interval_days = Math.ceil(interval_days * growthMultiplier);
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


function App() 
{
  const [session, setSession] = useState(null) // Supabase session
  const [allProblems, setAllProblems] = useState([]);  // All problems
  const [loading, setLoading] = useState(true); // Loading state
  const navigate = useNavigate(); // Navigation

  // State for color mode
  const [mode, setMode] = useState('light'); // Default to light

  // Calculate the theme only when 'mode' changes
  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  const toggleColorMode = () => {
    setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  };

  // Check if we have a session
  useEffect(() => { 
    // Get initial session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    // Listen for login/logout changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => subscription.unsubscribe();
  }, []);

  useEffect(() => {
    if (!session) return; // Don't fetch if we're not logged in

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
  }, [session]);

// --- DERIVED STATE ---
  //Compare based at midnight
  const today = new Date();
  today.setHours(0, 0, 0, 0); 

  // Filter for overdue problems
  const overdueProblems = allProblems.filter(p => {
    if (!p.reviewData) return false; // New problems shouldn't be here, they should be in today
    
    const nextReview = new Date(p.reviewData.next_review_at);
    nextReview.setHours(0, 0, 0, 0);
    
    return nextReview < today;
  });

  // 3. Get today's problems
  const todaysProblems = allProblems.filter(p => {
    if (!p.reviewData) return true; 
    
    const nextReview = new Date(p.reviewData.next_review_at);
    nextReview.setHours(0, 0, 0, 0);
    
    return nextReview.getTime() === today.getTime();
  });

async function handleAddProblem(title, external_id, difficulty, fetchedTags = []) {
    if (!session) return; // Don't add if we're not logged in

    const selectedLists = ["Neetcode 250"]; 
    const { data, error } = await supabase
      .from('problems')
      .insert([{ 
            title, 
            external_id, 
            difficulty, 
            lists: selectedLists, 
            tags: fetchedTags,
            user_id: session.user.id
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
      user_id: session.user.id
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

  //Delete a problem
  async function handleDeleteProblem(id) {
    // Delete from the database
    const { error } = await supabase
      .from('problems')
      .delete()
      .eq('id', id);

    if (error) {
      console.error('Error deleting:', error);
      return;
    }

    // Remove the problem from the array
    setAllProblems(prev => prev.filter(p => p.id !== id));
  }

  // Edit a problem
  async function handleEditProblem(updatedProblem) {
    // 1. Prepare payload
    const { id, title, external_id, difficulty, tags } = updatedProblem;

    // Update the database
    const { error } = await supabase
      .from('problems')
      .update({ title, external_id, difficulty, tags })
      .eq('id', id);

    if (error) {
      console.error('Error updating:', error);
      return;
    }

    // 3. Update the local state
    setAllProblems(prev => prev.map(p => {
      if (p.id === id) {
        // IMPORTANT: don't edit the existing reviews, just edit the problem details 
        return { ...p, title, external_id, difficulty, tags };
      }
      return p;
    }));
  }

  // If we're not logged in, show the auth page
  if (!session) {
    return <Auth />; 
  }

  return (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        
        {/* Pass the toggle function and current mode to Navbar */}
        <Navbar onToggleTheme={toggleColorMode} currentMode={mode} />
        
        <Box sx={{ p: 3 }}> 
          <Routes>
            {/* Home: Passes the SPLIT lists */}
            <Route path="/" element={
              <>
                {/* SECTION 0: STATS*/}
                <StatsDashboard problems={allProblems} />
                <hr style={{ margin: '32px 0', borderColor: '#eee' }} />

                {/* SECTION 1: OVERDUE */}
                {overdueProblems.length > 0 && (
                  <>
                    <Typography variant="h5" sx={{ mb: 2, mt: 2, color: 'error.main', fontWeight: 'bold' }}>
                      ⚠️ Overdue Reviews
                    </Typography>
                    <ProblemList 
                      loading={loading} 
                      problems={overdueProblems} 
                      onReview={handleReview} 
                    />
                    <hr style={{ margin: '32px 0', borderColor: '#eee' }} />
                  </>
                )}

                {/* SECTION 2: TODAY */}
                <Typography variant="h5" sx={{ mb: 2, mt: 2 }}>
                  Due Today
                </Typography>
                <ProblemList 
                  loading={loading} 
                  problems={todaysProblems} 
                  onReview={handleReview} 
                />
              </>
            } />

            {/* Passes the complete list and the delete and edit handlers*/}
            <Route path="/all" element={
                <AllProblemsTable 
                  problems={allProblems} 
                  onDelete={handleDeleteProblem} 
                  onEdit={handleEditProblem}     
                />
            } />

            <Route path="/add" element={
                <ProblemForm onSubmit={handleAddProblem} />
            } />

            
          </Routes>
        </Box>

      </ThemeProvider>
    );
  }


export default App;