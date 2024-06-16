import React from 'react';
import { Card, CardContent, Typography, CardActionArea } from '@mui/material';
import { Book } from '../types';
import { Link } from 'react-router-dom';

interface BookCardProps {
  book: Book;
}

const BookCard: React.FC<BookCardProps> = ({ book }) => {
  return (
    <Card>
      <CardActionArea component={Link} to={`/book/${book.id}`}>
        <CardContent>
          <Typography variant="h5" component="div">
            {book.title}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            {book.author}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            {book.genre}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            {book.publicationDate}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default BookCard;
