// src/pages/Home.js
import React, { useState } from 'react';
import { createTheme, ThemeProvider, CssBaseline, Container, Typography } from '@mui/material';
import NavBar from '../components/NavBar';
import SimpleCarousel from '../components/SimpleCarousel';
import UpcomingMovies from '../components/UpcomingMovies';
import LatestMovies from '../components/LatestMovies';

const Home = () => {
  const [darkMode, setDarkMode] = useState(false);

  const theme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
    },
  });

  const handleThemeToggle = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <NavBar onThemeToggle={handleThemeToggle} />
      <br></br>
      <SimpleCarousel />
      <br></br>
      <UpcomingMovies />
      <br></br>
      <LatestMovies />
    </ThemeProvider>
  );
};

export default Home;
