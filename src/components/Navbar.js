import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton'; 
import { Link as RouterLink } from 'react-router-dom';

// Mui Icons
import AddIcon from '@mui/icons-material/Add';
import DashboardIcon from '@mui/icons-material/Dashboard';
import SchoolIcon from '@mui/icons-material/School';
import LowPriorityIcon from '@mui/icons-material/LowPriority';
import SettingsIcon from '@mui/icons-material/Settings';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

function Navbar({ darkMode, onToggleTheme, onOpenSettings }) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          
          {/* 1. Name */}
          <Typography variant="h6" component="div" sx={{ mr: 1 }}>
            LeetCode Tracker
          </Typography>

          {/* 2. Light/Dark mode toggle */}
          <IconButton 
            onClick={onToggleTheme} 
            color="inherit" 
            sx={{ mr: 2 }}
          >
            {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
          </IconButton>

          {/* 3. Empty Space */}
          <Box sx={{ flexGrow: 1 }} />

          {/* 4. Nav buttons */}
          <Box sx={{ display: 'flex', gap: 1 }}>
            <Button 
              component={RouterLink} 
              to="/" 
              color="inherit" 
              startIcon={<DashboardIcon />}
            >
              Dashboard
            </Button>

            <Button 
              component={RouterLink} 
              to="/add" 
              color="inherit" 
              startIcon={<AddIcon />}
            >
              Add
            </Button>

            <Button 
              component={RouterLink} 
              to="/curriculum" 
              color="inherit" 
              startIcon={<SchoolIcon />}
            >
              Lists
            </Button>

            <Button 
              component={RouterLink} 
              to="/queue" 
              color="inherit" 
              startIcon={<LowPriorityIcon />}
            >
              Queue
            </Button>

            {/* SETTINGS BUTTON */}
            <Button 
              color="inherit" 
              onClick={onOpenSettings} 
              sx={{ minWidth: 0, ml: 1 }}
            >
              <SettingsIcon />
            </Button>
          </Box>

        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Navbar;