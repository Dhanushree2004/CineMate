// src/pages/Account.js
import React from 'react';
import { Container, Typography, Box, Avatar, Grid, Divider, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import SettingsIcon from '@mui/icons-material/Settings';
import NavBar from '../components/NavBar'; // Import NavBar component
import PersonIcon from '@mui/icons-material/Person';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

const Account = () => {
  // Sample user data
  const user = {
    name: 'XXX XXXX',
    email: 'xxxxxx@example.com',
    profileImage: 'https://img.favpng.com/3/7/23/login-google-account-computer-icons-user-png-favpng-ZwgqcU6LVRjJucQ9udYpX00qa.jpg', // Replace with actual image URL
    bio: 'Passionate about movies since childhood, always looking for hidden gems and timeless classics. Enjoys a variety of genres including drama, comedy, and thrillers. Loves discussing movies with friends and discovering new recommendations.',
    preferences: {
      favoriteGenres: ['Action', 'Comedy', 'Drama'],
      language: 'English',
    },
  };

  return (
    <>
      <NavBar /> {/* Render NavBar component outside the Container */}
      <Container maxWidth="md">
        <Box mt={8}>
          <Grid container spacing={3}>
            {/* User profile section */}
            <Grid item xs={12} md={4} lg={3}>
              <Box display="flex" flexDirection="column" alignItems="center">
                <Avatar alt={user.name} src={user.profileImage} sx={{ width: 120, height: 120, mb: 2 }} />
                <Typography variant="h5">{user.name}</Typography>
                <Typography variant="subtitle1" color="textSecondary">{user.email}</Typography>
              </Box>
            </Grid>
            {/* User details section */}
            <Grid item xs={12} md={8} lg={9}>
              <Box>
                <Typography variant="h4">Account Details</Typography>
                <Typography variant="body1" mt={2}>{user.bio}</Typography>
                <Divider sx={{ my: 3 }} />
                {/* Preferences */}
                <Typography variant="h5">Preferences</Typography>
                <List>
                  <ListItem>
                    <ListItemIcon>
                      <SettingsIcon />
                    </ListItemIcon>
                    <ListItemText primary="Favorite Genres" secondary={user.preferences.favoriteGenres.join(', ')} />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <SettingsIcon />
                    </ListItemIcon>
                    <ListItemText primary="Language" secondary={user.preferences.language} />
                  </ListItem>
                </List>
              </Box>
            </Grid>
          </Grid>
          <Typography variant="body1" mt={4}>
            Welcome to your account page. Here you can manage your profile, settings, and more.
          </Typography>
        </Box>
      </Container>
    </>
  );
};

export default Account;
