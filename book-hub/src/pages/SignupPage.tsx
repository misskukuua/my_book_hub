import React, { useState } from 'react';
import { Container, Typography, TextField, Button, Modal, Link } from '@mui/material';
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

const SignupButton = styled(Button)({
  backgroundColor: '#004d40', // Navy green color
  color: '#ffffff', // White text color
  '&:hover': {
    backgroundColor: '#00332b', // Darker shade of navy green on hover
  },
});

const SignupPage: React.FC = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSignup = () => {
    // Implement signup logic here (e.g., send data to backend)
    console.log('Signing up...');
    // Simulate successful signup
    navigate('/login'); // Redirect to login page after signup
  };

  return (
    <Container>
      <Typography variant="h4" component="h1" gutterBottom>
        Signup Page
      </Typography>
      <Typography variant="body1" gutterBottom>
        Be part of a global community of readers and writers, all connected through the power of story.
      </Typography>
      <Button variant="contained" color="primary" onClick={handleOpen}>
        Sign Up to MyBookHub
      </Button>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="signup-modal-title"
        aria-describedby="signup-modal-description"
      >
        <ModalContainer>
          <ModalTitle>
            Join <span style={{ color: '#556b2f' }}>MyBookHub</span>
          </ModalTitle>
          <TextField
            id="name"
            label="Name"
            variant="outlined"
            fullWidth
            margin="normal"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            id="email"
            label="Email"
            type="email"
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
          <SignupButton variant="contained" fullWidth onClick={handleSignup}>
            Sign Up
          </SignupButton>
          <Typography variant="body2" style={{ marginTop: '10px' }}>
            Already have an account?{' '}
            <Link component="button" variant="body2" onClick={() => navigate('/login')}>
              Log in
            </Link>
          </Typography>
        </ModalContainer>
      </Modal>
    </Container>
  );
};

export default SignupPage;
