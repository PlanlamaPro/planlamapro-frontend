import { Link, BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainScreen from '../Mainscreen/MainScreen';
import './navbar.css';
import logo from '../Logo/planlamaproLogo.png';
import logo2 from '../Logo/planlamaproLogoMini.png';
import React, { useState, useEffect } from "react";

function App() {

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [showText, setShowText] = useState(true);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (windowWidth < 785) {
      setShowText(false);
    }
    else {
      setShowText(true);
    }
  }, [windowWidth]);

  let logoSrc = windowWidth < 785 ? logo : logo2;


  return (  
    <Router>   
      <div className='router'>
        <div className='logodiv'>
          <img className='logo' src={logoSrc} alt="Logo" />
          {showText && <h4 className='logoName'>PlanlamaPro</h4>}
        </div>

        <div className='navbar'>
          <nav>
            <ul className='navbar-list' style={{ listStyleType: "none" }}>
              <li>
                <Link to="/" className='link'>Anasayfa</Link>
              </li>
              <li>
                <Link to="/hakkimizda" className='link'>Hakkımızda</Link>
              </li>
              <li>
                <Link to="/roomCreate" className='link'>Oda Oluştur</Link>
              </li>
              <li>
                <Link to="/myRooms" className='link'>Odalarım</Link>
              </li>
              <li>
                <Link to="/profile" className='link'>Profil</Link>
              </li>
            </ul>
          </nav>
        </div>

        <div className='user'>
          <h4>Kullanıcı Adı</h4>
        </div>
      </div>

      <div className='routes'> 
        <div className='route'>
            <Routes>
              <Route path="/" element={<MainScreen />} />
              <Route path="/hakkimizda" element={<h1>Hakkımızda</h1>} />
              <Route path="/roomCreate" element={<h1>Oda Oluştur</h1>} />
              <Route path="/myRooms" element={<h1>Odalarım</h1>} />
              <Route path="/profile" element={<h1>Profil</h1>} />
            </Routes>
        </div>
      </div>

      
      
    </Router>

    
  );
}

export default Navbar;
