// src/pages/Signup.js
import React, { useState } from 'react';
import { TextField, Button, Container, Typography, Box } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [mobile, setMobile] = useState('');
  const navigate = useNavigate();

  const handleSignup = () => {
    // Implement signup functionality here
    console.log({ username, email, password, mobile });
    navigate('/login');
  };

  return (
    <Container maxWidth="xs">
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        mt={8}
      >
        <Typography variant="h4">Sign Up</Typography>
        
        <TextField
          label="Username"
          margin="normal"
          fullWidth
          variant="outlined"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <TextField
          label="Email"
          type="email"
          margin="normal"
          fullWidth
          variant="outlined"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          label="Password"
          type="password"
          margin="normal"
          fullWidth
          variant="outlined"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <TextField
          label="Mobile Number"
          type="tel"
          margin="normal"
          fullWidth
          variant="outlined"
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
        />
        
        <Button
          variant="contained"
          color="primary"
          fullWidth
          onClick={handleSignup}
          sx={{ mt: 2 }}
        >
          Sign Up
        </Button>
        <Button
          component={Link}
          to="/login"
          color="secondary"
          sx={{ mt: 2 }}
        >
          Already have an account? Login
        </Button>
      </Box>
    </Container>
  );
};

export default Signup;
