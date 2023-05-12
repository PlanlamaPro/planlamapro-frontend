import * as React from 'react';
import FormControlLabel from '@mui/material/FormControlLabel';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import '../styles/SignUp.css';

export default function InputAdornments() {

  return (
    <Box>
        <div className='border'>
              <Typography variant="h4" align='center' gutterBottom>
                  Giriş Yap
              </Typography>
              <TextField
                  fullWidth
                  margin="normal"
                  id="email"
                  label="Email"
                  name="email"
                  size="small"
              /> <br/>
              <TextField
                  fullWidth
                  margin="normal"
                  name="password"
                  label="Şifre"
                  type="password"
                  id="password"
                  size="small"
              /> 
              
              <FormControlLabel 
                control={<Checkbox defaultChecked />} 
                label="Beni Hatırla" 
                style={{fontSize: "2px"}} 
              />
              
              <Button variant="contained" fullWidth>Giriş Yap</Button>

              {/* <div className='align'>
                  <Link href="#" variant="body2">
                    {"Şifremi unuttum"}
                  </Link>
              </div> */}

        </div>
    </Box>
  );
}