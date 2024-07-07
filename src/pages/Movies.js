// src/components/Movies.js
import React from 'react';
import { Card, CardMedia, CardContent, Typography, Grid } from '@mui/material';
import NavBar from '../components/NavBar';

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

const latestMovies = [
  {
    title: 'Premalu',
    image: 'https://img10.hotstar.com/image/upload/f_auto/sources/r1/cms/prod/1032/1712839861032-i',
    details: "Sachin's quest for love takes unexpected turns, creating a laughter-filled love triangle.",
    director: 'Girish A.D.',
    writers: 'Girish A.D., Kiran Josey',
    stars: 'Naslen, Mamitha Baiju, Shyam Mohan',
    imdbLink: 'https://www.imdb.com/title/tt0111161/', // Example link
  },
  {
    title: 'Varshangalkku Shesham',
    image: 'https://preview.redd.it/2-days-for-varshangalkku-shesham-v0-rbuyqya23htc1.jpeg?auto=webp&s=4978c536b8c8bcb645bb9241eae725130b3443de',
    details: 'The story of two friends set in two different time periods. Two boys, Murali and Venu, hailing from northern Kerala meet coincidentally and become friends.',
    director: 'Vineeth Sreenivasan',
    writers: 'Jane Doe, John Smith',
    stars: 'Pranav Mohanlal Dhyan Sreenivasan Nivin Pauly',
    imdbLink: 'https://www.imdb.com/title/tt0111162/', // Example link
  },
  {
    title: 'Aavesham',
    image: 'https://i.pinimg.com/originals/3f/ff/d7/3fffd702d48852ede79ed71d04f36a2b.jpg',
    details: 'Three teenagers reach Bangalore for their engineering degree and gets involved in a fight with seniors. They find a local gangster named Ranga to help them take revenge.',
    director: 'Jithu Madhavan',
    writers: 'Jithu Madhavan',
    stars: 'Fahadh FaasilHipzsterMithun Jai Shankar',
    imdbLink: 'https://www.imdb.com/title/tt0111162/', // Example link
  },
  {
    title: 'The Greatest of All Time',
    image: 'https://pbs.twimg.com/media/GEHP3xRbIAEbxW1.jpg:large',
    details: "The Greatest of All Time (also marketed as GOAT)[a] is an upcoming Indian Tamil-language science fiction action film ",
    director: 'Venkat Prabhu',
    writers: 'Girish A.D., Kiran Josey',
    stars: ' Vijay , Prashanth, Prabhu Deva, Mohan, Jayaram, Sneha, Laila, Ajmal Ameer, Meenakshi Chaudhary, Vaibhav, Yogi Babu, Premgi Amaren and Yugendran.',
    imdbLink: 'https://www.imdb.com/title/tt0111161/', // Example link
  },
  {
    title: 'Rasavathi',
    image: 'https://assets-in.bmscdn.com/iedb/movies/images/extra/vertical_logo/mobile/thumbnail/xxlarge/rasavathi-et00397142-1718784969.jpg',
    details: 'Three teenagers reach Bangalore for their engineering degree and gets involved in a fight with seniors. They find a local gangster named Ranga to help them take revenge.',
    director: 'Jithu Madhavan',
    writers: 'Jithu Madhavan',
    stars: 'Fahadh FaasilHipzsterMithun Jai Shankar',
    imdbLink: 'https://www.imdb.com/title/tt0111162/', // Example link
  },
  {
    title: 'Leo',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWTqzvxjg0lmserJQx-pxSF2zg-CwLZnDD2Ge79-MM4Mhd5cZkDFjH-vTuhJP_8XgH4HA&usqp=CAU',
    details: "Parthiban is a mild-mannered cafe owner in Kashmir, who fends off a gang of murderous thugs and gains attention from a drug cartel claiming he was once a part of them. ",
    director: 'Lokesh Kanagaraj',
    writers: 'Lokesh Kanagaraj, Rathna Kumar,Deeraj Vaidy',
    stars: 'Joseph Vijay,Sanjay Dutt,Trisha Krishnan',
    imdbLink: 'https://www.imdb.com/title/tt0111161/', // Example link
  },
  {
    title: 'DeAr',
    image: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSGfvTwOFDwkoDcC2Hv0s-5xSAyR4ns0EfYJyg2FYr4h7hHJPJI',
    details: "When an exceptionally light sleeper discovers his new wife snores loudly, navigating their dilemma may be the wake-up call he needs about marriage.",
    director: 'Lokesh Kanagaraj',
    writers: 'Lokesh Kanagaraj, Rathna Kumar,Deeraj Vaidy',
    stars: 'G.V. Prakash Kumar, Aishwarya Rajesh, Thalaivasal Vijay',
    imdbLink: 'https://www.imdb.com/title/tt0111161/', // Example link
  },
  {
    title: 'Garudan',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSi6MCNa3giTvF1-6F3gC-YOyQg7MyxPAcUwWHNmYATdci4dCrF',
    details: "Sokkan, the trusted confidant of childhood friends Aadhi and Karuna.But when his loyalty and self respect is put into test, which would he choose?",
    director: 'R.S. Durai Senthilkumar',
    writers: 'R.S. Durai ,SenthilkumarVetrimaaran',
    stars: 'SooriShivada NairSamuthirakani',
    imdbLink: 'https://www.imdb.com/title/tt0111161/', // Example link
  },
];

const Movies = () => {
  return (
   
    <div style={{ padding: '20px' }}>
       <NavBar/>
      <Grid container spacing={2}>
        <br>
        </br>
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
      <Grid container spacing={2}>
        {latestMovies.map((movie, index) => (
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

export default Movies;
