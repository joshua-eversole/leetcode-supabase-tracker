import React, { useState, useEffect } from 'react';

// --- Import the MUI components ---
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider'; // for separating content from actions
import TextField from '@mui/material/TextField'; 
import SaveIcon from '@mui/icons-material/Save'; // save button
import Tooltip from '@mui/material/Tooltip'; // mouse-over tooltips
import { alpha } from '@mui/material/styles'; // For soft background colors


function ProblemItem({ problem, onReview }) { 
  
  const [notes, setNotes] = useState('');

  // Use useEffect to initialize notes with the existing description
  useEffect(() => {
    setNotes(problem.description || '');
  }, [problem.description]);

  const handleReviewClick = (rating) => {
    // We pass the current notes state to the parent function
    onReview(problem.id, problem.reviewData, rating, notes); 
  };
  
  
  const difficultyStyles = { 
    Easy: {
      color: 'success.dark',
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
  const currentStyle = difficultyStyles[problem.difficulty] || {};

  const getSolveUrl = () => {
    const id = problem.external_id;
    if (id.startsWith('http://') || id.startsWith('https://')) {
      return id;
    }
    return `https://leetcode.com/problems/${id}/`;
  };

  return (
    <Card 
      elevation={4} 
      sx={{ 
        bgcolor: currentStyle.bgcolor,
        borderRadius: 2, 
        transition: 'transform 0.2s, box-shadow 0.2s', 
        '&:hover': {
          transform: 'translateY(-4px)', 
          boxShadow: 8, 
        },
      }}
    >
      <CardContent>
        {/* Title Link */}
        <Typography 
          variant="h5" 
          component="a" 
          href={getSolveUrl()} 
          target="_blank" 
          rel="noopener noreferrer"
          sx={{
              textDecoration: 'none',
              color: 'primary.main', 
              '&:hover': {
                  textDecoration: 'underline'
              }
          }}
        >
          {problem.title}
        </Typography>

        <Typography 
          sx={{ mb: 1.5, color: currentStyle.color, fontWeight: 'bold' }} 
        >
          {problem.difficulty}
        </Typography>

        {/* Notes Text Field */}
        <Box sx={{ mt: 2 }}>
            <TextField
                label="Attempt Notes"
                placeholder="Key concepts, errors, or complexity analysis."
                multiline
                fullWidth
                rows={3}
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                variant="outlined"
                size="small"
            />
        </Box>
        
      </CardContent>

      <Divider /> 

      <CardActions sx={{ justifyContent: 'flex-end', p: 2 }}>
        <Typography variant="caption" sx={{ mr: 2, color: 'text.secondary' }}>
            Rank to Save Notes & Review:
        </Typography>
        {/* Buttons for each possible rating (1 through 5), as well as the calculated times for each*/}
        <ButtonGroup variant="contained" size="small">
          {Object.entries(problem.reviewIntervals).map(([rating, interval]) => {
            const tooltipText = interval === 0 
              ? "Review Tomorrow (Failed)" 
              : `Due in ${interval} days`;

            let colorProp;
            if (rating === '1') colorProp = 'error';
            else if (rating === '2') colorProp = 'warning';
            else if (rating === '3') colorProp = 'secondary';
            else if (rating === '4') colorProp = 'info';
            else if (rating === '5') colorProp = 'success';

            return (
              <Tooltip key={rating} title={tooltipText}>
                <Button color={colorProp} onClick={() => handleReviewClick(Number(rating))}>
                  {rating}
                </Button>
              </Tooltip>
            );
          })}
        </ButtonGroup>
      </CardActions>
    </Card>
  );
}

export default ProblemItem;