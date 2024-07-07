// src/components/Footer.js
import React from 'react';
import { AppBar, Toolbar, Typography, Link, Box, Grid, IconButton } from '@mui/material';
import { Facebook, Twitter, Instagram, YouTube } from '@mui/icons-material';

const Footer = () => {
  return (
    <AppBar position="static" color="default" style={{ top: 'auto', bottom: 0 }}>
      <Toolbar style={{ paddingTop: '20px', paddingBottom: '20px' }}>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6">Follow CineMate on social</Typography>
            <Box>
              <IconButton href="https://www.facebook.com/imdb" target="_blank" color="inherit">
                <Facebook />
              </IconButton>
              <IconButton href="https://twitter.com/imdb" target="_blank" color="inherit">
                <Twitter />
              </IconButton>
              <IconButton href="https://www.instagram.com/imdb/" target="_blank" color="inherit">
                <Instagram />
              </IconButton>
              <IconButton href="https://www.youtube.com/imdb" target="_blank" color="inherit">
                <YouTube />
              </IconButton>
            </Box>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6">Get the CineMate app</Typography>
            <Typography variant="body2">For Android and iOS</Typography>
            <Link href="https://apps.apple.com/us/app/imdb-movies-tv-shows/id342792525" target="_blank">
              Get the CineMate app
            </Link>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6">Quick Links</Typography>
            <Box display="flex" flexDirection="column">
              <Link href="/help" color="inherit">Help</Link>
              <Link href="/siteindex" color="inherit">Site Index</Link>
              <Link href="https://pro.imdb.com" color="inherit">CineMatePro</Link>
              <Link href="https://www.boxofficemojo.com" color="inherit">Box Office Mojo</Link>
              <Link href="/license" color="inherit">License CineMate Data</Link>
              <Link href="/press" color="inherit">Press Room</Link>
              <Link href="/advertising" color="inherit">Advertising</Link>
              <Link href="/jobs" color="inherit">Jobs</Link>
              <Link href="/conditions" color="inherit">Conditions of Use</Link>
              <Link href="/privacy" color="inherit">Privacy Policy</Link>
              <Link href="/ads" color="inherit">Your Ads Privacy Choices</Link>
            </Box>
          </Grid>
        </Grid>
      </Toolbar>
      <Box textAlign="center" py={2}>
        <Typography variant="body2" color="textSecondary">
          © 1990-2024 by CineMate.com, Inc.
        </Typography>
      </Box>
    </AppBar>
  );
};

export default Footer;
