import React from 'react';

// Mui components
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import Grid from '@mui/material/Grid';

// Icons
import PlayArrowIcon from '@mui/icons-material/PlayArrow';


function QueueList({ problems, onActivate }) {
// If there are no problems, show a message
  if (!problems || problems.length === 0) {
    return (
      <Box sx={{ textAlign: 'center', mt: 5, color: 'text.secondary' }}>
        <Typography variant="h6">Your queue is empty.</Typography>
        <Typography variant="body2">Add problems with "Add to Backlog" selected.</Typography>
      </Box>
    );
  }

  return (
    <Box>
       <Typography variant="h4" sx={{ mb: 3, fontWeight: 'bold' }}>
        Backlog Queue
      </Typography>

      <Grid container spacing={2}>
        {problems.map((p) => (
          <Grid key={p.id} size={{ xs: 12 }}>
            <Card sx={{ display: 'flex', alignItems: 'center', p: 1 }}>
              
              {/* Info */}
              <CardContent sx={{ flexGrow: 1, py: 1, '&:last-child': { pb: 1 } }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 0.5 }}>
                  <Typography variant="h6" fontWeight="bold">
                    {p.title}
                  </Typography>
                  <Chip 
                    label={p.difficulty} 
                    size="small" 
                    color={p.difficulty === 'Easy' ? 'success' : p.difficulty === 'Medium' ? 'warning' : 'error'} 
                    variant="outlined"
                  />
                </Box>
                {/* Tags */}
                <Box sx={{ display: 'flex', gap: 0.5 }}>
                    {p.tags && p.tags.slice(0, 5).map(t => (
                        <Typography key={t} variant="caption" sx={{ color: 'text.secondary', bgcolor: 'action.hover', px: 0.5, borderRadius: 1 }}>
                            {t}
                        </Typography>
                    ))}
                </Box>
              </CardContent>

              {/* Action */}
              <Button 
                variant="contained" 
                color="primary" 
                startIcon={<PlayArrowIcon />}
                onClick={() => onActivate(p.id, 'active')}
                sx={{ mr: 2 }}
              >
                Activate
              </Button>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default QueueList;