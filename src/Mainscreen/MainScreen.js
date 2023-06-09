import React, { useEffect } from "react";
import "./Mainscreen.css";
import mainImg from "../Logo/AnaSayfaResim.png";
import timeImg from "../Photo/timeImg.png";
import secondImg from "../Photo/pngwing.com.png";
import planningImg from "../Photo/planning.png";
import aboutImg from "../Photo/hakkimizda.png";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { saveJwt } from "../Redux/Slices/signupSlice";
import { saveJwtLgn } from "../Redux/Slices/loginSlice";
import { useDispatch } from "react-redux";
import Footer from "../components/footer";

function MainScreen(props) {
  const navigator = useNavigate();

  const dispatcher = useDispatch();

  function handleLogout() {
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    localStorage.removeItem("username");
    dispatcher(saveJwt({ token: "" }));
    dispatcher(saveJwtLgn({ token: "" }));
    navigator("/");
  }

  useEffect(() => {
    console.log(localStorage.getItem("token"));
    if (
      localStorage.getItem("token") === null ||
      localStorage.getItem("token") === ""
    ) {
      navigator("/");
    }
  });
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
                <Link to="/hakkimizda" className="link">
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
                <Link to="/roomCreate" className="link">
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
              <p>Katıldığın yada Yönetici Olduğun Odalara Git</p>
              <div className="linkdiv">
                <Link to="/myrooms" className="link">
                  Odalarım
                </Link>
              </div>
            </div>
          </div>
          <div className="info">
            <div className="infoTextLeft">
              <h4 className="infoHeader">Güle Güle</h4>
              <p>Görüşmek Üzere</p>
              <div className="linkdiv">
                <button onClick={handleLogout} className="link">
                  Çıkış Yap
                </button>
              </div>
            </div>
            <div className="infoImg">
              <img className="timeImg" src={planningImg} alt="" />
            </div>
          </div>

          <div>
            <br></br>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}

export default MainScreen;
