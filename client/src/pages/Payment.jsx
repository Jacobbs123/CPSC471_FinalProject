import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import axios from 'axios';

const theme = createTheme();

const Payment = () => {
    const [book, setBook] = useState({
        title: "",
        desc: "",
        price: null,
        cover: "",
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        setBook(prev=>({...prev, [e.target.name]: e.target.value}));
    };

    // Post details of book to db then navigate to home
    const handleClick = async (e) => {
        e.preventDefault();
        window.confirm("Your payment was successful! You will be redirected to the online store.");
        navigate("/supply");
    }
    console.log(book);
    return (
        <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 2,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography component="h1" variant="h5">
            Payment Details
          </Typography>
          <Box component="form" onSubmit={handleClick} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              variant="filled"
              required
              fullWidth
              id="fname"
              label="First Name"
              name="fname"
              className='bg-white rounded-lg'
            />
            <TextField
              margin="normal"
              variant="filled"
              required
              fullWidth
              name="lname"
              label="Last Name"
              id="lname"
              className='bg-white rounded-lg'
            />
            <TextField
              margin="normal"
              variant="filled"
              required
              fullWidth
              name="cardNumber"
              label="Card Number"
              id="cardNumber"
              className='bg-white rounded-lg'
            />
            <TextField
              margin="normal"
              variant="filled"
              required
              fullWidth
              name="expiration"
              label="Expiration"
              id="expiration"
              className='bg-white rounded-lg'
            />
            <TextField
              margin="normal"
              variant="filled"
              required
              fullWidth
              name="cvv"
              label="CVV"
              id="cvv"
              className='bg-white rounded-lg'
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 1 }}
            >
                Pay
            </Button>
            <Button
                fullWidth
                variant="contained"
                sx={{ mt: 1, mb: 2 }}
                onClick={() => navigate("/cart")}
            >
                Cancel
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
    )
}
export default Payment;