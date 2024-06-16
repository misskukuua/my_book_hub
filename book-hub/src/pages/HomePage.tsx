import React, { useState } from 'react';
import { Container, Typography, Button, Modal, Box, TextField, Link } from '@mui/material';

const HomePage: React.FC = () => {
  const [openLogin, setOpenLogin] = useState(false); // State for login modal
  const [openSignup, setOpenSignup] = useState(false); // State for signup modal

  const handleOpenLogin = () => {
    setOpenLogin(true);
  };

  const handleCloseLogin = () => {
    setOpenLogin(false);
  };

  const handleOpenSignup = () => {
    setOpenSignup(true);
  };

  const handleCloseSignup = () => {
    setOpenSignup(false);
  };

  const handleLogin = () => {
    // Implement login logic here
    console.log('Logging in...');
    handleCloseLogin(); // Close login modal after login attempt
  };

  const handleSignup = () => {
    // Implement signup logic here
    console.log('Signing up...');
    handleCloseSignup(); // Close signup modal after signup attempt
  };

  return (
    <Box sx={{ display: 'flex', minHeight: '100vh', position: 'relative', backgroundColor: '#186A3B' }}>
      {/* Background Image */}
      <Box
        sx={{
          flex: 1,
          backgroundImage: 'url(/background.jpg)',
          backgroundSize: '',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          minHeight: '100vh',
          width: '50vw',
        }}
      />

      <Container
        sx={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          color: 'white',
          padding: '0 16px',
          position: 'relative', // Ensure content overlays background image
          backgroundColor: 'transparent', // Set background color to green here
        }}
      >
        <Typography variant="h2" component="h1" gutterBottom sx={{ mb: 4 }}>
          Hi, welcome to <span style={{ color: '#97D658' }}>MyBookHub</span>
        </Typography>
        <Box sx={{ display: 'flex', gap: '20px', width: '100%', maxWidth: '400px', justifyContent: 'center' }}>
          <Button
            variant="contained"
            color="primary"
            onClick={handleOpenLogin}
            sx={{
              borderRadius: '999px',
              bgcolor: '#808000',
              color: 'white',
              width: '50%',
              '&:hover': {
                bgcolor: '#97D658',
              },
            }}
          >
            Login
          </Button>
          <Button
            variant="contained"
            color="secondary"
            onClick={handleOpenSignup}
            sx={{
              borderRadius: '999px',
              bgcolor: '#808000',
              color: 'white',
              width: '50%',
              '&:hover': {
                bgcolor: '#97D658',
              },
            }}
          >
            Sign Up
          </Button>
        </Box>

        {/* Login Modal */}
        <Modal
          open={openLogin}
          onClose={handleCloseLogin}
          aria-labelledby="login-modal-title"
          aria-describedby="login-modal-description"
        >
          <Box
            sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: 300,
              bgcolor: 'background.paper',
              boxShadow: 24,
              p: 4,
            }}
          >
            <Typography variant="h6" component="h2" gutterBottom>
              Login to <span style={{ color: '#186A3B' }}>MyBookHub</span>
            </Typography>
            <TextField id="username" label="Username" variant="outlined" fullWidth margin="normal" />
            <TextField
              id="password"
              label="Password"
              type="password"
              variant="outlined"
              fullWidth
              margin="normal"
            />
            <Button
              variant="contained"
              color="primary"
              fullWidth
              sx={{
                backgroundColor: '#004d40',
                '&:hover': {
                  backgroundColor: '#00332b',
                },
              }}
              onClick={handleLogin}
            >
              Login
            </Button>
            <Typography variant="body2" sx={{ mt: 2, cursor: 'pointer', textAlign: 'center' }}>
              Forgot password?
            </Typography>
            <Typography variant="body2" sx={{ mt: 2, cursor: 'pointer', textAlign: 'center' }}>
              Don't have an account?{' '}
              <Link onClick={handleOpenSignup} sx={{ color: '#004d40', cursor: 'pointer' }}>
                Sign up
              </Link>
            </Typography>
          </Box>
        </Modal>

        {/* Signup Modal */}
        <Modal
          open={openSignup}
          onClose={handleCloseSignup}
          aria-labelledby="signup-modal-title"
          aria-describedby="signup-modal-description"
        >
          <Box
            sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: 300,
              bgcolor: 'background.paper',
              boxShadow: 24,
              p: 4,
            }}
          >
            <Typography variant="h6" component="h2" gutterBottom sx={{ textAlign: 'center' }}>
              Join <span style={{ color: '#186A3B' }}>MyBookHub</span>
            </Typography>
            <Typography variant="body2" gutterBottom>
              Be part of a global community of readers and writers, all connected through the power of story.
            </Typography>
            <TextField id="name" label="Name" variant="outlined" fullWidth margin="normal" />
            <TextField id="email" label="Email" variant="outlined" fullWidth margin="normal" />
            <TextField
              id="password"
              label="Password"
              type="password"
              variant="outlined"
              fullWidth
              margin="normal"
            />
            <Button
              variant="contained"
              color="primary"
              fullWidth
              sx={{
                backgroundColor: '#004d40',
                '&:hover': {
                  backgroundColor: '#00332b',
                },
              }}
              onClick={handleSignup}
            >
              Sign Up
            </Button>
            <Typography variant="body2" sx={{ mt: 2, cursor: 'pointer', textAlign: 'center' }}>
              If you already have an account,{' '}
              <Link onClick={handleOpenLogin} sx={{ color: '#004d40', cursor: 'pointer' }}>
                Log in
              </Link>
              .
            </Typography>
          </Box>
        </Modal>
      </Container>
    </Box>
  );
};

export default HomePage;
