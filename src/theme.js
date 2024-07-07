// src/theme.js
import { createTheme } from '@mui/material/styles';

const getDesignTokens = (mode) => ({
  palette: {
    mode,
    ...(mode === 'light'
      ? {
          // light mode palette
        }
      : {
          // dark mode palette
          background: {
            default: '#121212',
            paper: '#1d1d1d',
          },
          text: {
            primary: '#fff',
            secondary: '#aaa',
          },
        }),
  },
});

const theme = (mode) => createTheme(getDesignTokens(mode));

export default theme;
