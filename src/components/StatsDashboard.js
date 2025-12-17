import React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Tooltip from '@mui/material/Tooltip';

import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';

function StatsDashboard({ problems }) {
  
  if (!problems || problems.length === 0) return null;

  const activeDates = new Set();
  problems.forEach(p => {
    if (p.created_at) activeDates.add(new Date(p.created_at).toDateString());
    if (p.reviewData?.last_reviewed_at) activeDates.add(new Date(p.reviewData.last_reviewed_at).toDateString());
  });

  let currentStreak = 0;
  let checkDate = new Date();
  if (activeDates.has(checkDate.toDateString())) currentStreak++;
  
  for (let i = 1; i < 365; i++) {
      checkDate.setDate(checkDate.getDate() - 1);
      if (activeDates.has(checkDate.toDateString())) currentStreak++;
      else break; 
  }

  const last7Days = [];
  for (let i = 6; i >= 0; i--) {
      const d = new Date();
      d.setDate(d.getDate() - i);
      const isDayActive = activeDates.has(d.toDateString());
      last7Days.push({
          dateLabel: d.toLocaleDateString('en-US', { weekday: 'short' }),
          isActive: isDayActive
      });
  }

  // --- 2. STATS LOGIC ---
  const total = problems.length;
  const easyCount = problems.filter(p => p.difficulty === 'Easy').length;
  const mediumCount = problems.filter(p => p.difficulty === 'Medium').length;
  const hardCount = problems.filter(p => p.difficulty === 'Hard').length;
  const masteredCount = problems.filter(p => p.reviewData && p.reviewData.consecutive_successes > 3).length;
  const learningCount = problems.filter(p => p.reviewData && p.reviewData.consecutive_successes <= 3).length;
  
  const today = new Date();
  today.setHours(23, 59, 59, 999);
  const dueCount = problems.filter(p => {
    if (!p.reviewData) return false;
    return new Date(p.reviewData.next_review_at) <= today;
  }).length;

  const StatCard = ({ title, value, color, subtext }) => (
    <Paper elevation={2} sx={{ p: 2, textAlign: 'center', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
      <Typography variant="h3" component="div" sx={{ color: color, fontWeight: 'bold', lineHeight: 1 }}>
        {value}
      </Typography>
      <Typography variant="body2" color="text.secondary" sx={{ fontWeight: 'medium', mt: 1 }}>
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
        
        {/* --- ROW 1: Streak and Total --- */}
        <Grid item xs={12} sm={6}>
            <Paper elevation={2} sx={{ p: 2, height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <LocalFireDepartmentIcon color="error" fontSize="large" />
                        <Typography variant="h3" fontWeight="bold" color="text.primary">{currentStreak}</Typography>
                    </Box>
                    <Typography variant="body2" color="text.secondary" sx={{ ml: 1 }}>Day Streak</Typography>
                </Box>
                <Box sx={{ display: 'flex', gap: 0.5 }}>
                    {last7Days.map((day, i) => (
                        <Tooltip key={i} title={day.dateLabel}>
                            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 0.5 }}>
                                <Box sx={{ 
                                    width: 12, height: 12, borderRadius: '50%', 
                                    bgcolor: day.isActive ? 'success.main' : 'action.disabledBackground',
                                    border: day.isActive ? 0 : '1px solid', borderColor: 'divider'
                                }} />
                                <Typography variant="caption" color="text.disabled" sx={{ fontSize: '0.6rem' }}>
                                    {day.dateLabel.charAt(0)}
                                </Typography>
                            </Box>
                        </Tooltip>
                    ))}
                </Box>
            </Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
           <StatCard title="Total Solved" value={total} color="primary.main" />
        </Grid>
        <Grid item xs={6} sm={3}>
           <StatCard title="Due Reviews" value={dueCount} color={dueCount > 0 ? "error.main" : "success.main"} />
        </Grid>

        {/* --- ROW 2: Mastery --- */}
        <Grid item xs={6} sm={6}>
           <StatCard title="Mastered" value={masteredCount} color="success.dark" subtext="Streak > 3" />
        </Grid>
        <Grid item xs={6} sm={6}>
           <StatCard title="Learning" value={learningCount} color="warning.main" subtext="Streak ≤ 3" />
        </Grid>

        {/* --- ROW 3: Difficulty Breakdown --- */}
        <Grid item xs={12}>
            <Paper elevation={2} sx={{ p: 3 }}>
                <Typography variant="subtitle2" color="text.secondary" gutterBottom>Difficulty Distribution</Typography>
                
                <Box sx={{ display: 'flex', height: 16, borderRadius: 2, overflow: 'hidden', mb: 2, bgcolor: 'action.hover' }}>
                    <Box sx={{ width: total ? `${(easyCount/total)*100}%` : 0, bgcolor: 'success.main' }} />
                    <Box sx={{ width: total ? `${(mediumCount/total)*100}%` : 0, bgcolor: 'warning.main' }} />
                    <Box sx={{ width: total ? `${(hardCount/total)*100}%` : 0, bgcolor: 'error.main' }} />
                </Box>

                <Box sx={{ display: 'flex', width: '100%', borderTop: 1, borderColor: 'divider', paddingTop: 2 }}>
            
                    <Box sx={{ width: '33.33%', textAlign: 'center', borderRight: 1, borderColor: 'divider' }}>
                        <Typography variant="h6" color="success.main" fontWeight="bold">{easyCount}</Typography>
                        <Typography variant="caption" color="text.secondary">Easy</Typography>
                    </Box>

                    <Box sx={{ width: '33.33%', textAlign: 'center', borderRight: 1, borderColor: 'divider' }}>
                        <Typography variant="h6" color="warning.main" fontWeight="bold">{mediumCount}</Typography>
                        <Typography variant="caption" color="text.secondary">Medium</Typography>
                    </Box>
                    
                    <Box sx={{ width: '33.33%', textAlign: 'center' }}>
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