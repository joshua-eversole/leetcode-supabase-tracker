// src/components/ProblemItem.js
import React from 'react';

// --- Import the MUI components ---
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';

// --- Import the `alpha` utility for creating soft background colors ---
import { alpha } from '@mui/material/styles';

function ProblemItem({ problem, onReview }) {
  const handleReviewClick = (rating) => {
    onReview(problem.id, problem.reviewData, rating);
  };

  // --- Request 3: Color-coded difficulty ---
  // We define a map for our styles based on difficulty
  const difficultyStyles = {
    Easy: {
      // Use 'success.dark' for better contrast on the light bg
      color: 'success.dark',
      // Use `alpha` to get a 10% opaque version of the main color
      bgcolor: (theme) => alpha(theme.palette.success.main, 0.1)
    },
    Medium: {
      color: 'warning.dark',
      bgcolor: (theme) => alpha(theme.palette.warning.main, 0.1)
    },
    Hard: {
      color: 'error.dark',
      bgcolor: (theme) => alpha(theme.palette.error.main, 0.1)
    }
  };
  // Get the styles for the current problem, or default to an empty object
  const currentStyle = difficultyStyles[problem.difficulty] || {};


  // --- Request 4: Smarter "Solve" link ---
  const getSolveUrl = () => {
    const id = problem.external_id;
    // Check if the ID is already a full URL
    if (id.startsWith('http://') || id.startsWith('https://')) {
      return id;
    }
    // If not, build the LeetCode URL
    return `https://leetcode.com/problems/${id}/`;
  };

  return (
    // Apply the conditional background color to the Card
    <Card variant="outlined" sx={{ bgcolor: currentStyle.bgcolor }}>
      <CardContent>
        <Typography variant="h5" component="div">
          {problem.title}
        </Typography>

        {/* Apply the conditional text color to the difficulty */}
        <Typography 
          sx={{ mb: 1.5, color: currentStyle.color, fontWeight: 'bold' }} 
        >
          {problem.difficulty}
        </Typography>

        <Typography variant="body2">
          Review this problem to keep it fresh in your mind.
        </Typography>
      </CardContent>

      <CardActions sx={{ justifyContent: 'space-between' }}>
        {/* Use the new getSolveUrl function for the href */}
        <Button
          component="a"
          href={getSolveUrl()}
          target="_blank"
          rel="noopener noreferrer"
          size="small"
        >
          Solve Problem
        </Button>

        {/* --- Request 1 & 2: 1-5 Buttons with colors --- */}
        <ButtonGroup variant="outlined" size="small">
          {/* 1 = Red */}
          <Button color="error" onClick={() => handleReviewClick(1)}>1</Button>
          {/* 2 = "In-between" (default blue) */}
          <Button color="primary" onClick={() => handleReviewClick(2)}>2</Button>
          {/* 3 = Yellow */}
          <Button color="warning" onClick={() => handleReviewClick(3)}>3</Button>
          {/* 4 = "In-between" (default blue) */}
          <Button color="primary" onClick={() => handleReviewClick(4)}>4</Button>
          {/* 5 = Green */}
          <Button color="success" onClick={() => handleReviewClick(5)}>5</Button>
        </ButtonGroup>
      </CardActions>
    </Card>
  );
}

export default ProblemItem;