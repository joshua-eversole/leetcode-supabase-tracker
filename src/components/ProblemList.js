// src/components/ProblemList.js
import React from 'react';
import ProblemItem from './ProblemItem';

// --- Import the MUI components ---
import Grid from '@mui/material/Grid'; // We use Grid instead of Stack now
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

function ProblemList({ loading, problems, onReview, onSaveDescription }) {
  // Loading State
  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', p: 4 }}>
        <CircularProgress />
      </Box>
    );
  }

  // Empty State 
  if (problems.length === 0) {
    return (
      <Box sx={{ p: 4, textAlign: 'center' }}>
        <Typography color="text.secondary">
          No problems due for review! Great job.
        </Typography>
      </Box>
    );
  }

  // Problems State
return (
    <Grid container spacing={2}> 
      {problems.map((problem) => (
          <Grid key={problem.id} size={{ xs: 12, sm: 6, md: 4 }}>
            <ProblemItem
            problem={problem}
            onReview={onReview}
          />
        </Grid>
      ))}
    </Grid>
  );
}

export default ProblemList;