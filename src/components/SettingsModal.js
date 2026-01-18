// src/components/SettingsModal.js
import React, { useState, useEffect } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';

function SettingsModal({ open, onClose, onSave }) {
  // Default Settings
  const [dailyTarget, setDailyTarget] = useState(0);
  const [useSmartOffset, setUseSmartOffset] = useState(true);

  // Load from LocalStorage when modal opens
  useEffect(() => {
    if (open) {
      const savedTarget = localStorage.getItem('dailyTarget') || 0;
      const savedOffset = localStorage.getItem('useSmartOffset') === 'true';
      setDailyTarget(parseInt(savedTarget, 10));
      setUseSmartOffset(savedOffset);
    }
  }, [open]);

  const handleSave = () => {
    // Save to LocalStorage
    localStorage.setItem('dailyTarget', dailyTarget);
    localStorage.setItem('useSmartOffset', useSmartOffset);
    
    // Pass back to App
    onSave(dailyTarget, useSmartOffset);
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
      <DialogTitle sx={{ fontWeight: 'bold' }}>⚙️ Automation Settings</DialogTitle>
      
      <DialogContent>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
          Configure how the app automates your learning schedule.
        </Typography>

        {/* 1. DAILY TARGET */}
        <Box sx={{ mb: 3 }}>
          <Typography variant="subtitle1" fontWeight="bold">
            Daily "New Problem" Target
          </Typography>
          <Typography variant="caption" color="text.secondary" display="block" sx={{ mb: 1 }}>
            How many new problems do you want to start each day?
          </Typography>
          
          <TextField
            type="number"
            value={dailyTarget}
            onChange={(e) => setDailyTarget(parseInt(e.target.value) || 0)}
            size="small"
            inputProps={{ min: 0, max: 10 }}
            helperText="Set to 0 to disable auto-pulling."
          />
        </Box>

        <Divider sx={{ my: 2 }} />

        {/* 2. SMART OFFSET */}
        <Box sx={{ mb: 1 }}>
          <Typography variant="subtitle1" fontWeight="bold">
            Smart Workload Balance
          </Typography>
          <FormControlLabel
            control={
              <Switch 
                checked={useSmartOffset} 
                onChange={(e) => setUseSmartOffset(e.target.checked)} 
              />
            }
            label="Reduce new problems if I have reviews due"
          />
          <Typography variant="caption" color="text.secondary" display="block" sx={{ mt: 0.5 }}>
            Example: If your target is <strong>3</strong>, but you have <strong>2 reviews</strong> due, the app will only pull <strong>1 new problem</strong> so you don't burn out.
          </Typography>
        </Box>

      </DialogContent>
      
      <DialogActions sx={{ p: 2 }}>
        <Button onClick={onClose} color="inherit">Cancel</Button>
        <Button onClick={handleSave} variant="contained" color="primary">
          Save Settings
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default SettingsModal;