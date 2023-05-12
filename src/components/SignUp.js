import * as React from "react";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import "../styles/SignUp.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const [username, setUserName] = React.useState("");
  const [password, setPassword] = React.useState("");

  const navigator = useNavigate();

  const handleChangeUsername = (event) => {
    setUserName(event.target.value);
  };

  const handleChangePassword = (event) => {
    setPassword(event.target.value);
  };

  function handleLogin() {
    fetch("http://localhost:5000/user/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        password: password,
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
        console.error(error);
      });
  }

  return (
    <Box>
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
          Giriş Yap
        </Typography>
        <TextField
          onChange={handleChangeUsername}
          fullWidth
          value={username}
          margin="normal"
          id="username"
          label="Kullanıcı Adı"
          name="username"
          size="small"
        />{" "}
        <br />
        <TextField
          onChange={handleChangePassword}
          value={password}
          fullWidth
          margin="normal"
          name="password"
          label="Şifre"
          type="password"
          id="password"
          size="small"
        />
        {/* <FormControlLabel
          control={<Checkbox defaultChecked />}
          label="Beni Hatırla"
          style={{ fontSize: "2px" }}
        /> */}
        <Button variant="contained" onClick={handleLogin} fullWidth>
          Giriş Yap
        </Button>
        {/* <div className='align'>
                  <Link href="#" variant="body2">
                    {"Şifremi unuttum"}
                  </Link>
              </div> */}
      </div>
    </Box>
  );
}
