// src/components/Navbar.js
import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import { Link as RouterLink } from 'react-router-dom';

// Light/Dark mode options
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7'; 

// Icons
import DashboardIcon from '@mui/icons-material/Dashboard'; 
import AddCircleIcon from '@mui/icons-material/AddCircle';
import ListIcon from '@mui/icons-material/List';
import LowPriorityIcon from '@mui/icons-material/LowPriority';


function Navbar({ onToggleTheme, currentMode }) {
  return (
    <AppBar position="static" color="transparent" elevation={0} sx={{ backdropFilter: 'blur(10px)', borderBottom: 1, borderColor: 'divider' }}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontWeight: 'bold', color: 'text.primary' }}>
          LeetTracker
        </Typography>

        {/* Top navbar is hidden on mobile */}
        <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 1, alignItems: 'center' }}>
          <Button component={RouterLink} to="/" color="inherit" startIcon={<DashboardIcon />}>
            Dashboard
          </Button>
          <Button component={RouterLink} to="/add" color="inherit" startIcon={<AddCircleIcon />}>
            Add
          </Button>
          <Button 
            component={RouterLink} 
            to="/queue" 
            color="inherit" 
            startIcon={<LowPriorityIcon />}
          >
            Queue
          </Button>
          <Button component={RouterLink} to="/all" color="inherit" startIcon={<ListIcon />}>
            All Problems
          </Button>
        </Box>

        {/* Light/Dark mode toggle is always visible */}
        <IconButton sx={{ ml: 1 }} onClick={onToggleTheme} color="inherit">
          {currentMode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
        </IconButton>

      </Toolbar>
    </AppBar>
  );
}

export default Navbar;