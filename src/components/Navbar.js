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

function Navbar({ onToggleTheme, currentMode }) {
  return (
    <AppBar position="static" color="transparent" elevation={0} sx={{ backdropFilter: 'blur(10px)', borderBottom: 1, borderColor: 'divider' }}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontWeight: 'bold', color: 'text.primary' }}>
          LeetTracker
        </Typography>

        <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
          <Button component={RouterLink} to="/" color="inherit">
            Dashboard
          </Button>
          <Button component={RouterLink} to="/add" color="inherit">
            Add
          </Button>
          <Button component={RouterLink} to="/all" color="inherit">
            All Problems
          </Button>
          
          {/* THEME TOGGLE BUTTON */}
          <IconButton sx={{ ml: 1 }} onClick={onToggleTheme} color="inherit">
            {currentMode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;