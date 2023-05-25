import * as React from "react";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { Select, MenuItem } from "@mui/material";
import "../styles/SignUp.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSelector, useDispatch } from "react-redux";
import { updateInfos, saveJwt } from "../Redux/Slices/signupSlice";
import { useEffect } from "react";

export default function SignUp() {
  const dispatcher = useDispatch();
  const signupData = useSelector((state) => state.sgnSlc.sgnInfo);

  const signupJwt = useSelector((state) => state.sgnSlc.jwtToken);

  const navigator = useNavigate();

  const handleSignupChange = (event) => {
    const key = event.target.name;
    const value = event.target.value;
    console.log(key, value);

    dispatcher(updateInfos({ [key]: value }));

    console.log(signupData);
  };

  function handleSignup() {
    fetch("http://localhost:5000/user/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: signupData.firstName,
        surname: signupData.lastname,
        age: 25,
        username: signupData.username,
        gender: signupData.gender,
        password: signupData.password,
        confirmPassword: signupData.confirmPassword,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        // İstek başarılı olduğunda yapılabilecek işlemler
        data.token === undefined
          ? toast.error(data.message, {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
            })
          : dispatcher(saveJwt({ token: data.token }));
      })
      .catch((error) => {
        // İstek sırasında bir hata oluştuğunda yapılabilecek işlemler
      });
  }

  useEffect(() => {
    if (signupJwt !== undefined && signupJwt !== "") {
      navigator("/mainpage");
    }
  }, [signupJwt, navigator]);

  return (
    <Box alignItems={"center"} alignContent={"center"}>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <div className="border">
        <Typography variant="h4" align="center" gutterBottom>
          Kayıt ol
        </Typography>
        <Box component="form" noValidate sx={{ mt: 3 }}>
          <Grid container spacing={1}>
            <Grid item xs={12} sm={6}>
              <TextField
                value={signupData.firstName}
                onChange={handleSignupChange}
                name="firstName"
                fullWidth
                id="firstName"
                label="Ad"
                size="small"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                value={signupData.lastname}
                onChange={handleSignupChange}
                fullWidth
                id="lastName"
                label="Soyad"
                name="lastname"
                size="small"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                value={signupData.username}
                onChange={handleSignupChange}
                margin="dense"
                name="username"
                fullWidth
                id="username"
                label="Kullanıcı Adı"
                size="small"
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                value={signupData.email}
                onChange={handleSignupChange}
                fullWidth
                margin="dense"
                id="email"
                label="Email"
                name="email"
                size="small"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                value={signupData.password}
                onChange={handleSignupChange}
                fullWidth
                margin="dense"
                name="password"
                label="Şifre"
                type="password"
                id="password"
                size="small"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                value={signupData.confirmPassword}
                onChange={handleSignupChange}
                fullWidth
                margin="dense"
                name="confirmPassword"
                label="Şifre Onay"
                type="password"
                id="confirmPassword"
                size="small"
              />
            </Grid>
            <Grid>
              <Grid item xs={12}>
                <Select
                  sx={{ ml: 1, mt: 2 }}
                  fullWidth
                  name="gender"
                  placeholder="Gender"
                  margin="dense"
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={signupData.gender}
                  label="Gender"
                  onChange={handleSignupChange}>
                  <MenuItem value={"Male"}>Male</MenuItem>
                  <MenuItem value={"Female"}>Female</MenuItem>
                </Select>
              </Grid>
            </Grid>
          </Grid>
          <Button
            onClick={handleSignup}
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}>
            Kayıt ol
          </Button>
          <Grid container justifyContent="center">
            <Grid>
              Zaten hesabınız var mı?{" "}
              <Link to="/signup" className="linkColor">
                Giriş Yap
              </Link>
            </Grid>
          </Grid>
        </Box>
      </div>
    </Box>
  );
}
