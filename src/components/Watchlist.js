// src/components/Watchlist.js
import React, { useState, useEffect } from 'react';
import {
  TextField, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton,
  Typography, Button, Rating
} from '@mui/material';
import { Delete, Edit } from '@mui/icons-material';
import SimpleCarousel from './SimpleCarousel';
import NavBar from './NavBar';

// Sample data
const initialMovies = [
  { id: 1, name: 'Premalu', language: 'Malayalam', duration: '2h 36m', rating: 4, poster: 'https://img10.hotstar.com/image/upload/f_auto/sources/r1/cms/prod/1032/1712839861032-i' },
  { id: 2, name: 'Varshangalkku Shesham', language: 'Malayalam', duration: '2h 7m', rating: 3, poster: 'https://preview.redd.it/2-days-for-varshangalkku-shesham-v0-rbuyqya23htc1.jpeg?auto=webp&s=4978c536b8c8bcb645bb9241eae725130b3443de' },
  { id: 3, name: 'Leo', language: 'Tamil', duration: '2h 44m', rating: 4.7, poster: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWTqzvxjg0lmserJQx-pxSF2zg-CwLZnDD2Ge79-MM4Mhd5cZkDFjH-vTuhJP_8XgH4HA&usqp=CAU' },
  { id: 4, name: 'Garudan', language: 'Tamil', duration: '2h 13m', rating: 3.3, poster: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSi6MCNa3giTvF1-6F3gC-YOyQg7MyxPAcUwWHNmYATdci4dCrF' },
  { id: 5, name: 'Abhiyum Nannum', language: 'Tamil', duration: '2h 27m', rating: 4.6, poster: 'data:image/jpeg;base64,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' }
  ,{ id: 6, name: 'Conjuring', language: 'English', duration: '1h 52m', rating: 4.3, poster: 'data:image/jpeg;base64,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' }, 
];

const Watchlist = () => {
  const [movies, setMovies] = useState(initialMovies);
  const [searchQuery, setSearchQuery] = useState('');
  const [editingMovie, setEditingMovie] = useState(null);

  useEffect(() => {
    // Load movies from database or API
    // For now, we use the sample data
  }, []);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleAddMovie = () => {
    // Implement add movie functionality
    const newMovie = {
      id: Date.now(),
      name: 'New Movie',
      language: 'English',
      duration: '90 min',
      rating: 3,
      poster: 'https://via.placeholder.com/100x150?text=New+Movie'
    };
    setMovies([...movies, newMovie]);
  };

  const handleEditMovie = (movie) => {
    setEditingMovie(movie);
  };

  const handleDeleteMovie = (id) => {
    setMovies(movies.filter(movie => movie.id !== id));
  };

  const handleSaveMovie = () => {
    setMovies(movies.map(movie => (movie.id === editingMovie.id ? editingMovie : movie)));
    setEditingMovie(null);
  };

  const filteredMovies = movies.filter(movie =>
    movie.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    movie.language.toLowerCase().includes(searchQuery.toLowerCase()) ||
    movie.duration.toLowerCase().includes(searchQuery.toLowerCase()) ||
    movie.rating.toString().includes(searchQuery.toLowerCase())
  );

  return (
    
    <div style={{ padding: '20px' }}>
      <NavBar/>
      <Typography variant="h5" gutterBottom>
        Watchlist
      </Typography>
      <TextField
        variant="outlined"
        size="small"
        placeholder="Search movies..."
        value={searchQuery}
        onChange={handleSearchChange}
        style={{ marginBottom: '20px' }}
      />
      <Button variant="contained" color="primary" onClick={handleAddMovie} style={{ marginBottom: '20px' }}>
        Add Movie
      </Button>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Poster</TableCell>
              <TableCell>Movie Name</TableCell>
              <TableCell>Language</TableCell>
              <TableCell>Duration</TableCell>
              <TableCell>Rating</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredMovies.map((movie) => (
              <TableRow key={movie.id}>
                <TableCell><img src={movie.poster} alt={movie.name} style={{ width: '50px' }} /></TableCell>
                <TableCell>{movie.name}</TableCell>
                <TableCell>{movie.language}</TableCell>
                <TableCell>{movie.duration}</TableCell>
                <TableCell><Rating value={movie.rating} precision={0.5} readOnly /></TableCell>
                <TableCell>
                  <IconButton color="primary" onClick={() => handleEditMovie(movie)}>
                    <Edit />
                  </IconButton>
                  <IconButton color="secondary" onClick={() => handleDeleteMovie(movie.id)}>
                    <Delete />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {editingMovie && (
        <div style={{ marginTop: '20px' }}>
          <Typography variant="h6" gutterBottom>
            Edit Movie
          </Typography>
          <TextField
            label="Movie Name"
            variant="outlined"
            value={editingMovie.name}
            onChange={(e) => setEditingMovie({ ...editingMovie, name: e.target.value })}
            style={{ marginBottom: '10px', marginRight: '10px' }}
          />
          <TextField
            label="Language"
            variant="outlined"
            value={editingMovie.language}
            onChange={(e) => setEditingMovie({ ...editingMovie, language: e.target.value })}
            style={{ marginBottom: '10px', marginRight: '10px' }}
          />
          <TextField
            label="Duration"
            variant="outlined"
            value={editingMovie.duration}
            onChange={(e) => setEditingMovie({ ...editingMovie, duration: e.target.value })}
            style={{ marginBottom: '10px', marginRight: '10px' }}
          />
          <TextField
            label="Rating"
            variant="outlined"
            type="number"
            value={editingMovie.rating}
            onChange={(e) => setEditingMovie({ ...editingMovie, rating: e.target.value })}
            style={{ marginBottom: '10px', marginRight: '10px' }}
          />
          <TextField
            label="Poster URL"
            variant="outlined"
            value={editingMovie.poster}
            onChange={(e) => setEditingMovie({ ...editingMovie, poster: e.target.value })}
            style={{ marginBottom: '10px', marginRight: '10px' }}
          />
          <Button variant="contained" color="primary" onClick={handleSaveMovie}>
            Save
          </Button>
        </div>
      )}
      <br></br>
      <br></br>
      <br></br>
      <SimpleCarousel />
    </div>
  );
};

export default Watchlist;
