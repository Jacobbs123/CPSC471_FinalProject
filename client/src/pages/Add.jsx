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

const Add = () => {
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
        const data = new FormData(e.currentTarget);
        console.log(data.get('product_name'));
        try {
            await axios.post("http://localhost:8800/supply", 
            { 
                product_name: data.get('product_name'),
                description: data.get('description'), 
                picture: data.get('picture'), 
                price: data.get('price'), 
                quantity: data.get('quantity'), 
                supplyType: data.get('supplyType'), 
                intended_animal: data.get('intended_animal'),});
            navigate("/")
        } catch (err) {
            console.log(err);
        }
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
            Add supply
          </Typography>
          <Box component="form" onSubmit={handleClick} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              variant="filled"
              required
              fullWidth
              id="product_name"
              label="Product Name"
              name="product_name"
              className='bg-white rounded-lg'
            />
            <TextField
              margin="normal"
              variant="filled"
              required
              fullWidth
              name="description"
              label="Description"
              id="description"
              className='bg-white rounded-lg'
            />
            <TextField
              margin="normal"
              variant="filled"
              required
              fullWidth
              name="picture"
              label="Picture"
              id="picture"
              className='bg-white rounded-lg'
            />
            <TextField
              margin="normal"
              variant="filled"
              required
              fullWidth
              name="price"
              label="Price"
              id="price"
              className='bg-white rounded-lg'
            />
            <TextField
              margin="normal"
              variant="filled"
              required
              fullWidth
              name="quantity"
              label="Quantity"
              id="quantity"
              className='bg-white rounded-lg'
            />
            <TextField
              margin="normal"
              variant="filled"
              required
              fullWidth
              name="supply_type"
              label="Supply Type"
              id="supply_type"
              className='bg-white rounded-lg'
            />
             <TextField
              margin="normal"
              variant="filled"
              required
              fullWidth
              name="intended_animal"
              label="Intended Animal"
              id="intended_animal"
              className='bg-white rounded-lg'
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 1 }}
            >
              Add Supply
            </Button>
            <Button
                fullWidth
                variant="contained"
                sx={{ mt: 1, mb: 2 }}
                onClick={() => navigate("/supply")}
            >
                Cancel
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
    )
}
export default Add;