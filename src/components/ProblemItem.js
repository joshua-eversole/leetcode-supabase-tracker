import React, { useState, useEffect } from 'react';

// --- Import Utilities ---
import { formatRelativeDate } from '../utilities/dateHelper';

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
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';


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
        height: '100%',
        bgcolor: currentStyle.bgcolor,
        borderRadius: 2, 
        transition: 'transform 0.3s, box-shadow 0.3s', 
        display: 'flex',     
        flexDirection: 'column', 
        justifyContent: 'space-between',
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

        {problem.tags && problem.tags.length > 0 && (
        <Stack direction="row" spacing={1} sx={{ mb: 2, flexWrap: 'wrap', gap: 1 }}>
            {problem.tags.map((tag, index) => (
                <Chip 
                    key={index} 
                    label={tag} 
                    size="small" 
                    variant="outlined" 
                    sx={{ fontSize: '0.7rem' }}
                />
            ))}
        </Stack>
    )}

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
            Rank:
        </Typography>
        
        <ButtonGroup variant="contained" size="small">
            {/* 1: FAIL */}
            <Tooltip title="No clue">
                <Button 
                    color="error" 
                    onClick={() => onReview(problem.id, problem.reviewData, 1)}
                >
                    1
                </Button>
            </Tooltip>

            {/* 2: HARD */}
            <Tooltip title="Attempted, but unfinished">
                <Button 
                    color="warning" 
                    onClick={() => onReview(problem.id, problem.reviewData, 2)}
                >
                    2
                </Button>
            </Tooltip>

            {/* 3: OK */}
            <Tooltip title="Finished, but with some help">
                <Button 
                    color="info" 
                    onClick={() => onReview(problem.id, problem.reviewData, 3)}
                >
                    3
                </Button>
            </Tooltip>

            {/* 4: GOOD (New) */}
            <Tooltip title="Finished, and no help needed">
                <Button 
                    color="primary" 
                    onClick={() => onReview(problem.id, problem.reviewData, 4)}
                >
                    4
                </Button>
            </Tooltip>

            {/* 5: EASY */}
            <Tooltip title="Easy to finish">
                <Button 
                    color="success" 
                    onClick={() => onReview(problem.id, problem.reviewData, 5)}
                >
                    5
                </Button>
            </Tooltip>
        </ButtonGroup>
      </CardActions>
    </Card>
  );
}

export default ProblemItem;