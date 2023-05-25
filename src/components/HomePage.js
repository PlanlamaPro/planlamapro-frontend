import React from "react";
import { Link } from "react-router-dom";
import { FaCheckCircle } from "react-icons/fa";
import resim1 from "../images/img1.jpg";
import Grid from "@mui/material/Grid";
import "../styles/HomePage.css";

const HomePage = () => {
  return (
    <div class="bg">
      <div class="header1">
        <h1 class="ortak h2 companyName">PlanlamaPro</h1>
        <Link to="/login" className="login-btn ortak color">
          Giriş Yap
        </Link>
        <Link to="/signup" className="register-btn ortak">
          Kayıt Ol
        </Link>
        <br></br>
      </div>

      <div class="div_bg bground1">
        <h1 className="h1">
          PlanlamaPro ile etkinliklerinizi kolayca planlayın!
        </h1>
        <p>
          PlanlamaPro, etkinliklerinizin planlamasını ve organizasyonunu
          kolaylaştırmak için tasarlanmıştır. Hemen ücretsiz kaydolun ve
          kullanmaya başlayın!
        </p>
      </div>

      <div class="div_bg bground2">
        <Grid container spacing={1}>
          <Grid item xs={12} sm={6}>
            <br />
            <img src={resim1} alt="Resim Açıklaması" />
          </Grid>

          <Grid item xs={12} sm={6}>
            <h2>PlanlamaPro ile neler yapabilirsiniz?</h2>

            <ul>
              <ListItem text="Etkinliklerinizi kolayca planlayın ve detaylarıyla birlikte paylaşın." />
              <ListItem text="Saat aralıklarını ve etkinlik konumlarını ayarlayın." />
              <ListItem text="Anılarınızı fotoğraf ve videolar paylaşarak etkinliğinizi daha özel hale getirin." />
              <ListItem text="Etkinliğinize başka kullanıcıları da dahil ederek daha fazla katılımcıya ulaşın." />
              <ListItem text="Kullanımı kolay arayüzü ve tasarım bileşenleri ile herkesin rahatlıkla kullanabileceği bir platform." />
            </ul>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

function ListItem(props) {
  return (
    <li className="list-item">
      <FaCheckCircle className="icon" />
      <span className="text">{props.text}</span>
    </li>
  );
}

export default HomePage;
