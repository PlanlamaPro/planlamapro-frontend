import * as React from "react";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import "../styles/SignUp.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updateLgnInfos, saveJwtLgn } from "../Redux/Slices/loginSlice";
import { useEffect } from "react";

export default function Login() {
  const loginData = useSelector((state) => state.lgnSlc.loginInfo);
  const loginJwt = useSelector((state) => state.lgnSlc.jwtToken);

  const dispatcher = useDispatch();

  const navigator = useNavigate();

  const handleChange = (event) => {
    const key = event.target.name;
    const value = event.target.value;

    dispatcher(updateLgnInfos({ [key]: value }));
  };

  function handleLogin() {
    fetch("http://localhost:5000/user/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: loginData.username,
        password: loginData.password,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        // İstek başarılı olduğunda yapılabilecek işlemler
        if (data.token === undefined) {
          toast.error(data.message, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        } else {
          dispatcher(saveJwtLgn({ token: data.token }));
          localStorage.setItem("userId", data.user._id);
        }
      })
      .catch((error) => {
        // İstek sırasında bir hata oluştuğunda yapılabilecek işlemler
        console.error(error);
      });
  }

  useEffect(() => {
    if (localStorage.getItem("token") !== null) {
      navigator("/mainpage");
    }

    if (loginJwt !== undefined && loginJwt !== "") {
      localStorage.setItem("token", loginJwt);
      navigator("/mainpage");
    }
  }, [loginJwt, navigator]);

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
          onChange={handleChange}
          fullWidth
          value={loginData.username}
          margin="normal"
          id="username"
          label="Kullanıcı Adı"
          name="username"
          size="small"
        />{" "}
        <br />
        <TextField
          onChange={handleChange}
          value={loginData.password}
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
