import React from 'react';
import { useParams } from 'react-router-dom';
import { Container, Typography, Divider, Paper } from '@mui/material';
import { Book } from '../types';

const mockBooks: Book[] = [
  { id: 1, title: '1984', author: 'George Orwell', genre: 'Dystopian', publicationDate: '1949-06-08', description: 'A dystopian novel set in a totalitarian regime where independent thought is suppressed.' },
  { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee', genre: 'Fiction', publicationDate: '1960-07-11', description: 'A story of racial injustice and moral growth in a small Southern town.' },
  // Add more mock books here
];

const BookDetailsPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const book = mockBooks.find(b => b.id.toString() === id);

  if (!book) {
    return <div>Book not found</div>;
  }

  return (
    <Container maxWidth="md" style={{ marginTop: '20px' }}>
      <Paper elevation={3} style={{ padding: '20px' }}>
        <Typography variant="h4" gutterBottom>
          {book.title}
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          by {book.author}
        </Typography>
        <Divider style={{ marginBottom: '20px' }} />
        <Typography variant="body1" gutterBottom>
          <strong>Genre:</strong> {book.genre}
        </Typography>
        <Typography variant="body1" gutterBottom>
          <strong>Publication Date:</strong> {book.publicationDate}
        </Typography>
        <Typography variant="body2" gutterBottom>
          {book.description || 'No description available.'}
        </Typography>
      </Paper>
    </Container>
  );
};

export default BookDetailsPage;
