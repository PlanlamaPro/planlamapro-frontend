import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import './SignUp.css';


export default function InputAdornments() {

  return (
    <Box>
        <div className='border'>
          <Typography variant="h4" align='center' gutterBottom>
            Kayıt ol
          </Typography>
          <Box component="form" noValidate  sx={{ mt: 3 }}>
              <Grid container spacing={1}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    name="firstName"
                    fullWidth
                    id="firstName"
                    label="Ad"
                    size="small"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    id="lastName"
                    label="Soyad"
                    name="lastName"
                    size="small"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    margin="normal"
                    id="email"
                    label="Email"
                    name="email"
                    size="small"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    margin="normal"
                    name="password"
                    label="Şifre"
                    type="password"
                    id="password"
                    size="small"
                  />
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Kayıt ol
              </Button>
              {/* <Grid container justifyContent="center">
                <Grid>
                  <Link href="#" variant="body2">
                    Zaten hesabınız var mı? Giriş Yap
                  </Link>
                </Grid>
              </Grid> */}
          </Box>

        </div>
    </Box>
  );
}
