export const getDesignTokens = (mode) => ({
  palette: {
    mode,
    ...(mode === 'light'
      ? {
          // Light mode
          primary: { main: '#6366f1' }, // Kind of an indigo
          secondary: { main: '#ec4899' }, // pink
          background: {
            default: '#f1f5f9', // a very light grey/blue
            paper: '#ffffff',
          },
          text: {
            primary: '#1e293b',
            secondary: '#64748b',
          },
        }
      : {
          // DArk mode
          primary: { main: '#818cf8' }, // A lighter indigo
          secondary: { main: '#f472b6' }, // A lighter pink
          background: {
            default: '#0f172a', // Typical dark mode background
            paper: '#1e293b',   // Lighter version of the background
          },
          text: {
            primary: '#f8fafc',
            secondary: '#94a3b8',
          },
        }),
  },
  shape: {
    borderRadius: 16,
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    button: {
      textTransform: 'none',
      fontWeight: 600,
    },
    h4: { fontWeight: 700 },
    h5: { fontWeight: 700 },
    h6: { fontWeight: 600 },
  },
  components: {
    // Remove shadows in Dark Mode
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none', 
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 12, 
          paddingTop: 8,
          paddingBottom: 8,
        },
      },
    },
  },
});