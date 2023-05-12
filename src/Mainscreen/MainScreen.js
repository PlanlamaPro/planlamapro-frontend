import React from "react";
import "./Mainscreen.css";
import mainImg from "../Logo/AnaSayfaResim.png";
import timeImg from "../Photo/timeImg.png";
import secondImg from "../Photo/pngwing.com.png";
import planningImg from "../Photo/planning.png";
import aboutImg from "../Photo/hakkimizda.png";
import { Link } from "react-router-dom";

function MainScreen(props) {
  return (
    <>
      <div className="mainscreen">
        <div className="imgDiv">
          <img className="mainimg" src={mainImg} alt="Resim açıklaması" />
        </div>

        <div>
          <div className="info">
            <div className="infoTextLeft">
              <h4 className="infoHeader">Hakkımızda</h4>
              <p>
                Biz 5 Kişilik bir grup olarak Bursa Teknik Üniversitesinde
                okuyan öğrencileriz Bizim hakkımızda detaylı bilgi almak için
                aşağıdaki hakkımızda butonuna tıklayabilirsiniz
              </p>
              <div className="linkdiv">
                <Link to="/" className="link">
                  Hakkımızda
                </Link>
              </div>
            </div>
            <div className="infoImg">
              <img className="aboutImg" src={aboutImg} alt="" />
            </div>
          </div>
          <div className="info">
            <div className="infoTextLeft">
              <h4 className="infoHeader">Oda Oluştur</h4>
              <p>Arkadaşlarınla bir etkinlik yapmak için hemen oda oluştur</p>
              <div className="linkdiv">
                <Link to="/" className="link">
                  Oda Oluştur
                </Link>
              </div>
            </div>
            <div className="infoImg">
              <img className="timeImg" src={timeImg} alt="" />
            </div>
          </div>
          <div className="info">
            <div className="infoImg">
              <img className="secondImg" src={secondImg} alt="" />
            </div>
            <div className="infoTextRight">
              <h4 className="infoHeader">Odalarım</h4>
              <p>Katıldığın Odalara Git</p>
              <div className="linkdiv">
                <Link to="/eventroom" className="link">
                  Odalarım
                </Link>
              </div>
            </div>
          </div>
          <div className="info">
            <div className="infoTextLeft">
              <h4 className="infoHeader">Profil</h4>
              <p>Profilinde arkadaşlarınla neler yaptığını gör</p>
              <div className="linkdiv">
                <Link to="/" className="link">
                  Profil
                </Link>
              </div>
            </div>
            <div className="infoImg">
              <img className="timeImg" src={planningImg} alt="" />
            </div>
          </div>

          <div>
            <br></br>© 2023 PlanlamaPro Tüm hakları saklıdır.
            <br></br>
          </div>
        </div>
      </div>
    </>
  );
}

export default MainScreen;
