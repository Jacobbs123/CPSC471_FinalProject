// import * as React from 'react';
// import Avatar from '@mui/material/Avatar';
// import Button from '@mui/material/Button';
// import CssBaseline from '@mui/material/CssBaseline';
// import TextField from '@mui/material/TextField';
// import Link from '@mui/material/Link';
// import Grid from '@mui/material/Grid';
// import Box from '@mui/material/Box';
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
// import Typography from '@mui/material/Typography';
// import Container from '@mui/material/Container';
// import { createTheme, ThemeProvider } from '@mui/material/styles';
// import { useUserAuth } from '../Authentication/UserAuthentication';
// import { useNavigate } from 'react-router-dom';
// import { useEffect, useState } from 'react';

// const theme = createTheme();

// export default function Login() {
//   const { user, login } = useUserAuth();
//   const [loginValid, setLoginValid] = useState(false);
//   const navigate = useNavigate();

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     const data = new FormData(event.currentTarget);
//     login(data.get('email'), data.get('password'));
//   };
  
//   useEffect(() => {
//     if (user) {
//       navigate('/');
//     }
//   }, [user, navigate]);

//   return (
//     <ThemeProvider theme={theme}>
//         <div >
//         <Container component="main" maxWidth="xs">
//           <CssBaseline />
//           <Box
//             sx={{
//               marginTop: 4,
//               display: 'flex',
//               flexDirection: 'column',
//               alignItems: 'center',
//             }}
            
//           >
//             <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
//               <LockOutlinedIcon />
//             </Avatar>
            
//             <Typography component="h1" variant="h5" >
//               Pet Store Sign In
//             </Typography>
//             <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
//               <TextField
//                 margin="normal"
//                 variant="filled"
//                 required
//                 fullWidth
//                 id="email"
//                 label="Email Address"
//                 name="email"
//                 className='bg-white rounded-lg'
//               />
//               <TextField
//                 margin="normal"
//                 variant="filled"
//                 required
//                 fullWidth
//                 name="password"
//                 label="Password"
//                 type="password"
//                 id="password"
//                 color='secondary'
//                 className='bg-white rounded-lg'
//               />
//               <Button
//                 type="submit"
//                 fullWidth
//                 variant="contained"
//                 sx={{ mt: 3, mb: 2 }}
//               >
//                 Sign In
//               </Button>
//               <Grid container>
//                 <Grid >
//                   <Link href="/register" variant="body2" >
//                     {"Don't have an account? Sign Up"}
//                   </Link>
//                 </Grid>
//               </Grid>
//             </Box>
//           </Box>
//         </Container>
//         </div>
//     </ThemeProvider>
//   );
// }