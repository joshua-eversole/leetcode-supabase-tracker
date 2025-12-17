import React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import LinearProgress from '@mui/material/LinearProgress';

function StatsDashboard({ problems }) {
  
  if (!problems || problems.length === 0) return null;

  // --- 1. Calculate Stats ---
  const total = problems.length;
  
  // Difficulty Counts
  const easyCount = problems.filter(p => p.difficulty === 'Easy').length;
  const mediumCount = problems.filter(p => p.difficulty === 'Medium').length;
  const hardCount = problems.filter(p => p.difficulty === 'Hard').length;

  // "Mastered" = Consecutive Successes > 3
  const masteredCount = problems.filter(p => 
    p.reviewData && p.reviewData.consecutive_successes > 3
  ).length;

  // "Learning" = Has data, but streak is low (<= 3)
  const learningCount = problems.filter(p => 
    p.reviewData && p.reviewData.consecutive_successes <= 3
  ).length;

  // "Due Today" (Includes Overdue)
  const today = new Date();
  today.setHours(23, 59, 59, 999); // End of today
  const dueCount = problems.filter(p => {
    if (!p.reviewData) return false; // New problems (never reviewed) don't count as "due" logic here usually, or you can count them.
    return new Date(p.reviewData.next_review_at) <= today;
  }).length;


  // --- 2. Helper Components ---
  const StatCard = ({ title, value, color, subtext }) => (
    <Paper elevation={2} sx={{ p: 2, textAlign: 'center', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
      <Typography variant="h3" component="div" sx={{ color: color, fontWeight: 'bold' }}>
        {value}
      </Typography>
      <Typography variant="body2" color="text.secondary" sx={{ fontWeight: 'medium' }}>
        {title}
      </Typography>
      {subtext && <Typography variant="caption" color="text.disabled">{subtext}</Typography>}
    </Paper>
  );

  return (
    <Box sx={{ mb: 4 }}>
      <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold', color: 'text.secondary' }}>
        Dashboard
      </Typography>
      
      <Grid container spacing={2}>
        
        {/* --- ROW 1: KEY METRICS --- */}
        
        {/* 1. Total Problems */}
        <Grid item xs={6} sm={3}>
           <StatCard 
           title="Questions" 
           value={total} color="primary.main"  
           subtext="___"
           />
        </Grid>

        {/* 2. Due Now (Urgency!) */}
        <Grid item xs={6} sm={3}>
           <StatCard 
             title="Due Today" 
             value={dueCount} 
             color={dueCount > 0 ? "error.main" : "success.main"}   
           subtext="You got this!"
           />
        </Grid>

        {/* 3. Mastered (Motivation) */}
        <Grid item xs={6} sm={3}>
           <StatCard 
             title="Mastered" 
             value={masteredCount} 
             color="success.dark" 
             subtext="Streak > 3"
           />
        </Grid>

        {/* 4. Learning (Active Workload) */}
        <Grid item xs={6} sm={3}>
           <StatCard 
             title="Learning" 
             value={learningCount} 
             color="warning.main" 
             subtext="Streak ≤ 3"
           />
        </Grid>

        {/* --- ROW 2: DIFFICULTY BREAKDOWN */}
        <Grid item xs={12}>
            <Paper elevation={2} sx={{ p: 3 }}>
                <Typography variant="subtitle2" color="text.secondary" gutterBottom>
                    Difficulty Distribution
                </Typography>

                {/* The Visual Bar */}
                <Box sx={{ display: 'flex', height: 10, borderRadius: 1, overflow: 'hidden', mb: 2, bgcolor: '#eee' }}>
                    <Box sx={{ width: `${(easyCount/total)*100}%`, bgcolor: 'success.main' }} />
                    <Box sx={{ width: `${(mediumCount/total)*100}%`, bgcolor: 'warning.main' }} />
                    <Box sx={{ width: `${(hardCount/total)*100}%`, bgcolor: 'error.main' }} />
                </Box>

                {/* The Numbers */}
                <Box sx={{ display: 'flex', justifyContent: 'space-between', px: 2 }}>
                    <Box sx={{ textAlign: 'center' }}>
                        <Typography variant="h6" color="success.main" fontWeight="bold">{easyCount}</Typography>
                        <Typography variant="caption" color="text.secondary">Easy</Typography>
                    </Box>
                    <Box sx={{ textAlign: 'center' }}>
                        <Typography variant="h6" color="warning.main" fontWeight="bold">{mediumCount}</Typography>
                        <Typography variant="caption" color="text.secondary">Medium</Typography>
                    </Box>
                    <Box sx={{ textAlign: 'center' }}>
                        <Typography variant="h6" color="error.main" fontWeight="bold">{hardCount}</Typography>
                        <Typography variant="caption" color="text.secondary">Hard</Typography>
                    </Box>
                </Box>
            </Paper>
        </Grid>

      </Grid>
    </Box>
  );
}

export default StatsDashboard;