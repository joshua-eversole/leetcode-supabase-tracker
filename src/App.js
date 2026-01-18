import React, { useState, useEffect, useMemo } from 'react';
import { Routes, Route } from 'react-router-dom';
import { supabase } from './supabaseClient';

// Components
import Navbar from './components/Navbar';
import MobileNav from './components/MobileNav';
import Auth from './components/Auth';
import ProblemList from './components/ProblemList';
import AddProblemForm from './components/ProblemForm';
import AllProblemsTable from './components/AllProblemsTable';
import StatsDashboard from './components/StatsDashboard';
import QueueList from './components/QueueList';
import Curriculum from './components/Curriculum';

// Mui Components
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import AddTaskIcon from '@mui/icons-material/AddTask';
import Button from '@mui/material/Button';

// Hooks & Utilities
import { useProblems } from './hooks/UseProblems';
import { getDesignTokens } from './theme';

function App() {
  // Login
  const [session, setSession] = useState(null);
  // If we have a saved themem ode, use that
  const [mode, setMode] = useState(() => {
    const savedMode = localStorage.getItem('leetcode-tracker-theme');
    if (savedMode) return savedMode;
    return 'light';
  });
  // Remember the theme mode
  useEffect(() => {
    localStorage.setItem('leetcode-tracker-theme', mode);
  }, [mode]);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => setSession(session));
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => setSession(session));
    return () => subscription.unsubscribe();
  }, []);

  // Data State
  const { 
    problems: allProblems, 
    loading, 
    addProblem, 
    reviewProblem, 
    deleteProblem, 
    editProblem,
    updateStatus,
    bulkAddProblems,
    pullFromQueue
  } = useProblems(session);

  // Theme
  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);
  const toggleColorMode = () => setMode((prev) => (prev === 'light' ? 'dark' : 'light'));

  // Overdue vs Today
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  // filter out the inactive problems
  const activeProblems = allProblems.filter(p => p.status === 'active');
  const queuedProblems = allProblems.filter(p => p.status === 'queued');

  const overdueProblems = activeProblems.filter(p => {
    if (!p.reviewData) return false;
    const nextReview = new Date(p.reviewData.next_review_at);
    nextReview.setHours(0, 0, 0, 0);
    return nextReview < today;
  });

  const todaysProblems = activeProblems.filter(p => {
    if (!p.reviewData) return true; // New problems
    const nextReview = new Date(p.reviewData.next_review_at);
    nextReview.setHours(0, 0, 0, 0);
    return nextReview.getTime() === today.getTime();
  });

  // Render
  if (!session) return <Auth />;

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar onToggleTheme={toggleColorMode} currentMode={mode} />
      
      <Box sx={{ p: 3, pb: 10 }}>
        <Routes>
          {/* Home */}
          <Route path="/" element={
            <>
              <StatsDashboard problems={allProblems} />
              
              {/* If empty, allow the user to pull a problem from the queue */}
              {activeProblems.length > 0 && overdueProblems.length === 0 && todaysProblems.length === 0 && (
                <Box sx={{ 
                  textAlign: 'center', 
                  py: 6, 
                  px: 2, 
                  mt: 2, 
                  mb: 4, 
                  bgcolor: 'action.hover', 
                  borderRadius: 2, 
                  border: '1px dashed',
                  borderColor: 'text.disabled'
                }}>
                  <Typography variant="h5" gutterBottom>
                    🎉 You're all caught up!
                  </Typography>
                  <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
                    Great job. You have no reviews due right now.
                  </Typography>
                  
                  {/* IMPORTANT: This button only shows if there are problems in the queue */}
                  {queuedProblems.length > 0 ? (
                    <>
                      <Button 
                        variant="contained" 
                        size="large" 
                        startIcon={<AddTaskIcon />}
                        onClick={pullFromQueue}
                      >
                        Pull Next from Queue
                      </Button>
                      <Typography variant="caption" display="block" sx={{ mt: 1, color: 'text.disabled' }}>
                        {queuedProblems.length} problems waiting in backlog
                      </Typography>
                    </>
                  ) : (
                    <Typography variant="body2" color="text.disabled" sx={{ fontStyle: 'italic' }}>
                      (Your backlog is empty. Add more problems to keep learning!)
                    </Typography>
                  )}
                </Box>
              )}

              {/* Overdue Section */}
              {overdueProblems.length > 0 && (
                <>
                  <Typography variant="h5" sx={{ mb: 2, mt: 2, color: 'error.main', fontWeight: 'bold' }}>
                    ⚠️ Overdue Reviews
                  </Typography>
                  <ProblemList loading={loading} problems={overdueProblems} onReview={reviewProblem} />
                  <hr style={{ margin: '32px 0', borderColor: '#eee', opacity: 0.1 }} />
                </>
              )}

              {/* Today Section */}
              <Typography variant="h5" sx={{ mb: 2, mt: 2 }}>Due Today</Typography>
              <ProblemList loading={loading} problems={todaysProblems} onReview={reviewProblem} />
            </>
          } />

          {/* Add Problem */}
          <Route path="/add" element={<AddProblemForm onSubmit={addProblem} />} />
          
          {/* All Problems */}
          <Route path="/all" element={
            <AllProblemsTable 
              problems={allProblems} 
              onDelete={deleteProblem} 
              onEdit={editProblem} 
            />
          } />

          {/* Queued Problems */}
          <Route 
            path="/queue" 
            element={<QueueList problems={queuedProblems} onActivate={updateStatus} />} 
          />

          {/* Curriculum */}
          <Route 
            path="/curriculum" 
            element={
              <Curriculum 
                existingProblems={allProblems} 
                onBulkAdd={bulkAddProblems} 
              />
            } 
          /> 
        </Routes>
      </Box>

      <MobileNav />
    </ThemeProvider>
  );
}

export default App;