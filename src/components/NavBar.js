// src/components/NavBar.js
import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Box,
  TextField,
  Switch,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import { AccountCircle, Search } from '@mui/icons-material';
import { Link, useNavigate } from 'react-router-dom';

const NavBar = ({ onThemeToggle }) => {
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === 'dark';
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const navigate = useNavigate();

  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchSubmit = () => {
    // Implement search functionality here
    console.log(searchQuery);
  };

  const handleAccountClick = () => {
    navigate('/account');
  };

  return (
    <AppBar position="static" color="default">
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          CineMate
        </Typography>
        <Box display={isMobile ? 'none' : 'flex'} flexGrow={1}>
          <Button component={Link} to="/" color="inherit">Home</Button>
          <Button component={Link} to="/movies" color="inherit">Movies</Button>
          <Button component={Link} to="/watchlist" color="inherit">Watchlist</Button>
          
          <Button component={Link} to="/signup" color="inherit">Sign Up</Button>
          <Button component={Link} to="/login" color="inherit">Login</Button>
        </Box>
        <TextField
          variant="outlined"
          size="small"
          placeholder="Search..."
          value={searchQuery}
          onChange={handleSearchChange}
          style={{ marginRight: '10px' }}
        />
        <IconButton color="inherit" onClick={handleSearchSubmit}>
          <Search />
        </IconButton>
        <IconButton color="inherit" onClick={handleAccountClick}>
          <AccountCircle />
        </IconButton>
        <Switch checked={isDarkMode} onChange={onThemeToggle} />
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
