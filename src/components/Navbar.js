import React from 'react';
import { Link, useLocation } from 'react-router-dom';

// --- MUI Imports ---
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

function Navbar() {
  const location = useLocation();

  return (
    <Box sx={{ flexGrow: 1, mb: 4 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            LeetCode Tracker
          </Typography>

          {/* 1. Home / Review */}
          <Button 
            color="inherit" 
            component={Link} 
            to="/"
            sx={{ fontWeight: location.pathname === '/' ? 'bold' : 'normal' }}
          >
            Review List
          </Button>

          {/* 2. NEW: All Problems */}
          <Button 
            color="inherit" 
            component={Link} 
            to="/all"
            sx={{ fontWeight: location.pathname === '/all' ? 'bold' : 'normal' }}
          >
            All Problems
          </Button>

          {/* 3. Add Problem */}
          <Button 
            color="inherit" 
            component={Link} 
            to="/add"
            sx={{ fontWeight: location.pathname === '/add' ? 'bold' : 'normal' }}
          >
            Add Problem
          </Button>

        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Navbar;