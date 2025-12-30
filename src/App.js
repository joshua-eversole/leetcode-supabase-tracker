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

// Mui Components
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

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

  // --- 2. DATA STATE (Using our Hook) ---
  const { 
    problems: allProblems, 
    loading, 
    addProblem, 
    reviewProblem, 
    deleteProblem, 
    editProblem,
    updateStatus 
  } = useProblems(session);

  // --- 3. THEME LOGIC ---
  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);
  const toggleColorMode = () => setMode((prev) => (prev === 'light' ? 'dark' : 'light'));

  // --- 4. DERIVED LISTS (Overdue vs Today) ---
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

  // --- RENDER ---
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
        </Routes>
      </Box>

      <MobileNav />
    </ThemeProvider>
  );
}

export default App;