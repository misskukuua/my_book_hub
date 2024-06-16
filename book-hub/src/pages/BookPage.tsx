import React, { useState } from 'react';
import { Container, Typography, TextField, Button, Grid, Box } from '@mui/material';

const BookPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [books, setBooks] = useState<any[]>([]); // Replace any[] with your book data structure

  const handleSearch = () => {
    // Implement search functionality here
    // Example: fetch books based on searchQuery
    console.log('Searching for:', searchQuery);
    // Replace with actual search logic, e.g., fetch data from backend
    setBooks([
      { id: 1, title: 'Book 1', author: 'Author A', genre: 'Fiction', publicationDate: '2022-01-01' },
      { id: 2, title: 'Book 2', author: 'Author B', genre: 'Non-fiction', publicationDate: '2021-12-01' },
      // Add more books as needed
    ]);
  };

  return (
    <Container sx={{ paddingTop: 4 }}>
      <Typography variant="h2" component="h1" gutterBottom>
        Book Page
      </Typography>
      
      {/* Search Input */}
      <Box sx={{ mb: 4 }}>
        <TextField
          id="search"
          label="Search Books"
          variant="outlined"
          fullWidth
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <Button variant="contained" color="primary" onClick={handleSearch} sx={{ mt: 2 }}>
          Search
        </Button>
      </Box>
      
      {/* Book List */}
      <Grid container spacing={3}>
        {books.map((book) => (
          <Grid item key={book.id} xs={12} sm={6} md={4}>
            <Box sx={{ p: 2, border: '1px solid #ccc', borderRadius: 4 }}>
              <Typography variant="h6" component="h2" gutterBottom>
                {book.title}
              </Typography>
              <Typography variant="subtitle1" gutterBottom>
                {book.author}
              </Typography>
              <Typography variant="body2" color="textSecondary">
                Genre: {book.genre}
              </Typography>
              <Typography variant="body2" color="textSecondary">
                Published: {book.publicationDate}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default BookPage;
