// src/components/UpcomingMovies.js
import React from 'react';
import { Card, CardMedia, CardContent, Typography, Grid } from '@mui/material';

const upcomingMovies = [
    {
      title: 'The Greatest of All Time',
      image: 'https://i.pinimg.com/originals/6b/fa/48/6bfa4839e68aae5ebdabfd01422e8302.jpg',
      details: "The Greatest of All Time (also marketed as GOAT)[a] is an upcoming Indian Tamil-language science fiction action film ",
      director: 'Venkat Prabhu',
      writers: 'Girish A.D., Kiran Josey',
      stars: ' Vijay , Prashanth, Prabhu Deva, Mohan, Jayaram, Sneha, Laila, Ajmal Ameer, Meenakshi Chaudhary, Vaibhav, Yogi Babu, Premgi Amaren and Yugendran.',
      imdbLink: 'https://www.imdb.com/title/tt0111161/', // Example link
    },
    {
      title: 'Varshangalkku Shesham',
      image: 'https://m.media-amazon.com/images/M/MV5BMzY4Y2ZiM2EtNmI0YS00ZmUxLTg5ZjUtM2YxYzUxZGUwYTY3XkEyXkFqcGdeQXVyNTA2MzMwMjA@._V1_.jpg',
      details: 'The story of two friends set in two different time periods. Two boys, Murali and Venu, hailing from northern Kerala meet coincidentally and become friends.',
      director: 'Vineeth Sreenivasan',
      writers: 'Jane Doe, John Smith',
      stars: 'Pranav Mohanlal Dhyan Sreenivasan Nivin Pauly',
      imdbLink: 'https://www.imdb.com/title/tt0111162/', // Example link
    },
    {
      title: 'Kanguva',
      image: 'https://assets.gadgets360cdn.com/pricee/assets/product/202307/Kanguva_1690298478.jpg',
      details: 'A warrior dies due to a disease in 1678. In the present, while a researcher in the present day attempts to learn more about the disease that killed the warrior centuries ago.',
      director: 'Siva',
      writers: 'Siva, Adi Narayana, Madhan Karky',
      stars: 'Arathar, Venkaater, Mandaankar, Mukaatar, Perumanathar, Disha Patani, Bobby Deol, Yogi Babu, Redin Kingsley, Kovai Sarala',
      imdbLink: 'https://www.imdb.com/title/tt0111162/', // Example link
    },
    {
      title: 'Fighter',
      image: 'https://qph.cf2.quoracdn.net/main-qimg-a0e7eabe2c5971030256d9cd7828810b-lq',
      details: 'A warrior dies due to a disease in 1678. In the present, while a researcher in the present day attempts to learn more about the disease that killed the warrior centuries ago.',
      director: 'Siddharth Anand',
      writers: 'Siddharth ,AnandRamon ,ChibbAbbas Dalal',
      stars: 'Hrithik, RoshanDeepika, PadukoneAnil Kapoor',
      imdbLink: 'https://www.imdb.com/title/tt0111162/', // Example link
    },
    
  ];

const UpcomingMovies = () => {
  return (
    <div style={{ padding: '20px' }}>
      <Typography variant="h5" gutterBottom>
        Upcoming Movies
      </Typography>
      <Grid container spacing={2}>
        {upcomingMovies.map((movie, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
            <Card>
              <CardMedia component="img" alt={movie.title} height="400" image={movie.image} />
              <CardContent>
                <Typography variant="h6">{movie.title}</Typography>
                <Typography variant="body2" color="textSecondary">
                  {movie.details}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  <strong>Director:</strong> {movie.director}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  <strong>Writers:</strong> {movie.writers}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  <strong>Stars:</strong> {movie.stars}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  <a href={movie.imdbLink} target="_blank" rel="noopener noreferrer">See production info at IMDbPro</a>
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default UpcomingMovies;
