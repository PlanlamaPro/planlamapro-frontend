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

export default function SignIn() {
  const [gender, setGender] = React.useState("Male");
  const [name, setName] = React.useState("");
  const [lastname, setLastName] = React.useState("");
  const [username, setUserName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");

  const navigator = useNavigate();

  const handleChangeGender = (event) => {
    setGender(event.target.value);
  };
  const handleChangeFirstName = (event) => {
    setName(event.target.value);
  };
  const handleChangeLastName = (event) => {
    setLastName(event.target.value);
  };
  const handleChangeUsername = (event) => {
    setUserName(event.target.value);
  };
  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
  };
  const handleChangePassword = (event) => {
    setPassword(event.target.value);
  };
  const handleChangeConfirmPassword = (event) => {
    setConfirmPassword(event.target.value);
  };

  function handleSignup() {
    fetch("http://localhost:5000/user/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        surname: lastname,
        age: 25,
        username: username,
        gender: gender,
        password: password,
        confirmPassword: confirmPassword,
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
          : navigator("/mainpage");
      })
      .catch((error) => {
        // İstek sırasında bir hata oluştuğunda yapılabilecek işlemler
      });
  }

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
                value={name}
                onChange={handleChangeFirstName}
                name="firstName"
                fullWidth
                id="firstName"
                label="Ad"
                size="small"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                value={lastname}
                onChange={handleChangeLastName}
                fullWidth
                id="lastName"
                label="Soyad"
                name="surname"
                size="small"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                value={username}
                onChange={handleChangeUsername}
                margin="normal"
                name="username"
                fullWidth
                id="firstName"
                label="Kullanıcı Adı"
                size="small"
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                value={email}
                onChange={handleChangeEmail}
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
                value={password}
                onChange={handleChangePassword}
                fullWidth
                margin="normal"
                name="password"
                label="Şifre"
                type="password"
                id="password"
                size="small"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                value={confirmPassword}
                onChange={handleChangeConfirmPassword}
                fullWidth
                margin="normal"
                name="confirmpassword"
                label="Şifre Onay"
                type="password"
                id="password"
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
                  margin="normal"
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={gender}
                  label="Gender"
                  onChange={handleChangeGender}>
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
