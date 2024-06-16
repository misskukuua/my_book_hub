import React, { useState } from 'react';
import { Container, Typography, Button, TextField, Modal, Link } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';

const ModalContainer = styled('div')({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 300,
  backgroundColor: '#ffffff',
  boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',
  padding: '20px',
  outline: 'none',
  textAlign: 'center',
});

const ModalTitle = styled('div')(({ theme }) => ({
  marginBottom: theme.spacing(2),
  fontWeight: theme.typography.fontWeightBold,
  fontSize: theme.typography.pxToRem(20),
  color: '#556b2f', // Olive green color
}));

const LoginButton = styled(Button)({
  backgroundColor: '#004d40', // Navy green color
  color: '#ffffff', // White text color
  '&:hover': {
    backgroundColor: '#00332b', // Darker shade of navy green on hover
  },
});

const LoginPage: React.FC = () => {
  const navigate = useNavigate(); // Hook to navigate programmatically
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleLogin = () => {
    // Implement login logic here (e.g., check credentials)
    console.log('Logging in...', email, password);

    // Example validation (replace with actual authentication logic)
    if (email === 'user@example.com' && password === 'password') {
      // Simulate successful login
      navigate('/books'); // Redirect to books page after login
    } else {
      setError('Invalid email or password');
    }
  };

  return (
    <Container>
      <Typography variant="h4" component="h1" gutterBottom>
        Login Page
      </Typography>
      <Button variant="contained" color="primary" onClick={handleOpen}>
        Login to MyBookHub
      </Button>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="login-modal-title"
        aria-describedby="login-modal-description"
      >
        <ModalContainer>
          <ModalTitle>
            Login to <span style={{ color: '#556b2f' }}>MyBookHub</span>
          </ModalTitle>
          <TextField
            id="email"
            label="Email"
            variant="outlined"
            fullWidth
            margin="normal"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            id="password"
            label="Password"
            type="password"
            variant="outlined"
            fullWidth
            margin="normal"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <LoginButton variant="contained" fullWidth onClick={handleLogin}>
            Login
          </LoginButton>
          {error && (
            <Typography variant="body2" style={{ marginTop: '10px', color: 'red' }}>
              {error}
            </Typography>
          )}
          <Typography variant="body2" style={{ marginTop: '10px' }}>
            <Link component="button" variant="body2" onClick={() => console.log('Forgot password clicked')}>
              Forgot password?
            </Link>
          </Typography>
        </ModalContainer>
      </Modal>
    </Container>
  );
};

export default LoginPage;
