import { Link } from "react-router-dom";
import "./navbar.css";
import logo from "../Logo/planlamaproLogo.png";
import logo2 from "../Logo/planlamaproLogoMini.png";
import React, { useState, useEffect } from "react";
import icon from "../Logo/button_icon.png";

function Navbar() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [showText, setShowText] = useState(true);
  const [changeNav, setChangeNav] = useState(true);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (windowWidth < 785) {
      setShowText(false);
    } else {
      setShowText(true);
    }
  }, [windowWidth]);

  let logoSrc = windowWidth < 785 ? logo : logo2;

  useEffect(() => {
    if (windowWidth < 655) {
      setChangeNav(false);
    } else {
      setChangeNav(true);
    }
  }, [windowWidth]);

  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {changeNav === true ? (
        <div className="router">
          <div className="logodiv">
            <img className="logo" src={logoSrc} alt="site images" />
            {showText && <h4 className="logoName">PlanlamaPro</h4>}
          </div>
          <div className="navbar">
            <nav>
              <ul className="navbar-list">
                <li>
                  <Link to="/" className="link">
                    Anasayfa
                  </Link>
                </li>
                <li>
                  <Link to="/hakkimizda" className="link">
                    Hakkımızda
                  </Link>
                </li>
                <li>
                  <Link to="/roomCreate" className="link">
                    Oda Oluştur
                  </Link>
                </li>
                <li>
                  <Link to="/myRooms" className="link">
                    Odalarım
                  </Link>
                </li>
                <li>
                  <Link to="/profile" className="link">
                    Profil
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          <div className="user">
            <h4>Kullanıcı Adı</h4>
          </div>
        </div>
      ) : (
        <div className="navbarMobileEngine">
          <div className="navbarMobile">
            <div className="logodiv">
              <img className="logo" src={logo2} alt="Logo" />
            </div>
            <div>
              <h4 className="logoName">PlanlamaPro</h4>
            </div>
            <div className="buttonDiv">
              <button className="windowButton" onClick={toggleModal}>
                <img className="buttonIcon" src={icon} alt="site " />
              </button>
            </div>
          </div>
          {isOpen && (
            <div className="modal">
              <div className="modalNavbar">
                <nav>
                  <ul className="modal-list">
                    <li>
                      <Link to="/" className="modal-link">
                        Anasayfa
                      </Link>
                    </li>
                    <li>
                      <Link to="/hakkimizda" className="modal-link">
                        Hakkımızda
                      </Link>
                    </li>
                    <li>
                      <Link to="/roomCreate" className="modal-link">
                        Oda Oluştur
                      </Link>
                    </li>
                    <li>
                      <Link to="/myRooms" className="modal-link">
                        Odalarım
                      </Link>
                    </li>
                    <li>
                      <Link to="/profile" className="modal-link">
                        Profil
                      </Link>
                    </li>
                    <div className="modal-user">
                      <h4>Kullanıcı Adı</h4>
                    </div>
                  </ul>
                </nav>
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
}

export default Navbar;
