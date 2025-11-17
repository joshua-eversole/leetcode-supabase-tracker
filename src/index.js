import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // Your main App component

// --- Import the MUI components ---
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

// --- Create a basic theme ---
const theme = createTheme();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* ThemeProvider makes the theme available to all 
      components. CssBaseline resets the browser's 
      default styles.
    */}
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);