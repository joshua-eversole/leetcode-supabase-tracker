import React, { useState } from 'react';

// MUI Components
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import LinearProgress from '@mui/material/LinearProgress';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';

// Data
import { PROBLEM_SETS } from '../data/problemSets';

function Curriculum({ existingProblems = [], onBulkAdd }) {
    const [importing, setImporting] = useState(null); // Track which ID is importing

    const handleImport = async (set) => {
        setImporting(set.id);

    // 1. Filter out problems that are already added
        const existingSlugs = new Set(existingProblems.map(p => p.external_id));
    
        const newProblems = set.problems.filter(p => !existingSlugs.has(p.external_id));

        if (newProblems.length === 0) {
        alert("You already have all problems in this list!");
        setImporting(null);
        return;
        }

        // 2. Send to Parent to add to the database
        await onBulkAdd(newProblems);
        setImporting(null);
        // debugging
        console.log("Problem Sets:", PROBLEM_SETS); 

        if (!PROBLEM_SETS) {
            return <div>Error: Problem sets data not found.</div>;
        }
    };

  return (
    <Box>
      <Typography variant="h4" sx={{ mb: 1, fontWeight: 'bold' }}>
        Curriculum
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
        Subscribe to standard problem lists to populate your backlog automatically.
      </Typography>

      <Grid container spacing={3}>
        {PROBLEM_SETS.map((set) => {
          // Calculate how many problems are already added
          const existingSlugs = new Set(existingProblems.map(p => p.external_id));
          const ownedCount = set.problems.filter(p => existingSlugs.has(p.external_id)).length;
          const totalCount = set.problems.length;
          const progress = (ownedCount / totalCount) * 100;
          const isComplete = ownedCount === totalCount;

          return (
            <Grid key={set.id} size={{ xs: 12, md: 6 }}>
              <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography variant="h5" fontWeight="bold" gutterBottom>
                    {set.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                    {set.description}
                  </Typography>
                  
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                    <Typography variant="caption" fontWeight="bold">
                        {ownedCount} / {totalCount} Added
                    </Typography>
                  </Box>
                  <LinearProgress variant="determinate" value={progress} sx={{ height: 8, borderRadius: 1 }} />
                </CardContent>
                
                <CardActions sx={{ p: 2, pt: 0 }}>
                  {isComplete ? (
                    <Button 
                        fullWidth 
                        variant="outlined" 
                        color="success" 
                        startIcon={<CheckCircleIcon />}
                        disabled
                    >
                        Added to Library
                    </Button>
                  ) : (
                    <Button 
                        fullWidth 
                        variant="contained" 
                        startIcon={<CloudDownloadIcon />}
                        onClick={() => handleImport(set)}
                        disabled={importing === set.id}
                    >
                        {importing === set.id ? 'Importing...' : `Import ${totalCount - ownedCount} Problems`}
                    </Button>
                  )}
                </CardActions>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
}

export default Curriculum;