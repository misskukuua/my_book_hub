import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';

interface HeaderProps {
  onLoginClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onLoginClick }) => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          MyBookHub
        </Typography>
        <Button color="inherit" onClick={onLoginClick}>
          Login
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
