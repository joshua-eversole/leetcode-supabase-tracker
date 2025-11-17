// src/components/ProblemList.js
import React from 'react';
import ProblemItem from './ProblemItem';

// --- Import the MUI components ---
import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

function ProblemList({ loading, problems, onReview }) {
  if (loading) {
    // Center the loading spinner
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', p: 4 }}>
        <CircularProgress />
      </Box>
    );
  }

  return (
    // Stack is a flexbox container for 1D layouts.
    // 'spacing={2}' adds 16px of space between each item.
    <Stack spacing={2} sx={{ m: 2 }}>
      {problems.map((problem) => (
        <ProblemItem
          key={problem.id}
          problem={problem}
          onReview={onReview}
        />
      ))}
    </Stack>
  );
}

export default ProblemList;