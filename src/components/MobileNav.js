import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

// MUI Components
import Paper from '@mui/material/Paper';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';

// Icons
import DashboardIcon from '@mui/icons-material/Dashboard';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import ListIcon from '@mui/icons-material/List';
import LowPriorityIcon from '@mui/icons-material/LowPriority';


function MobileNav() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <Paper 
      sx={{ 
        position: 'fixed', 
        bottom: 0, 
        left: 0, 
        right: 0, 
        zIndex: 1000,
        display: { xs: 'block', md: 'none' } 
      }} 
      elevation={3}
    >
      <BottomNavigation
        showLabels
        value={location.pathname}
        onChange={(event, newValue) => {
          navigate(newValue);
        }}
      >
        <BottomNavigationAction 
          label="Dashboard" 
          value="/" 
          icon={<DashboardIcon />} 
        />
        <BottomNavigationAction 
          label="Add" 
          value="/add" 
          icon={<AddCircleIcon />} 
        />
        <BottomNavigationAction 
          label="Queue" 
          value="/queue" 
          icon={<LowPriorityIcon />} 
        />
        <BottomNavigationAction 
          label="All" 
          value="/all" 
          icon={<ListIcon />} 
        />
      </BottomNavigation>
    </Paper>
  );
}

export default MobileNav;