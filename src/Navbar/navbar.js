import { Link, BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainScreen from '../Mainscreen/MainScreen';
import './navbar.css';
import logo from '../Logo/planlamaproLogo.png';
import logo2 from '../Logo/planlamaproLogoMini.png';
import React, { useState, useEffect } from "react";
//Son Eklenen
import icon from '../Logo/button_icon.png';
import { FaFacebook, FaTwitter, FaInstagram, FaTiktok, FaTelegram } from 'react-icons/fa';


function App() {

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [showText, setShowText] = useState(true);
  //yeni eklenti
  const [changeNav, setChangeNav] = useState(true);
  //Bitiş

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

  //Son Eklemeler
  useEffect(() => {
    if (windowWidth < 655) {
      setChangeNav(false);
    }
    else {
      setChangeNav(true);
    }
  }, [windowWidth]);

  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };
  //Son Eklemeler


  return (  
    <Router> 


      
      {changeNav == true ? (
        <div className='router'>
          <div className='logodiv'>
            <img className='logo' src={logoSrc} alt="Logo" />
            {showText && <h4 className='logoName'>PlanlamaPro</h4>}
          </div>
      
        
          <div className='navbar'>
            <nav>
              <ul className='navbar-list'>
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
      ): (
        <div className='navbarMobileEngine'>
          <div className='navbarMobile'>
            <div className='logodiv'>
              <img className='logo' src={logo2} alt="Logo" />
            </div>
            <div>
              <h4 className='logoName'>PlanlamaPro</h4>
            </div>
            <div className='buttonDiv'>
              <button className='windowButton' onClick={toggleModal}><img className='buttonIcon' src={icon} /></button>
            </div>
          </div>
          {isOpen && (
          <div className="modal">
            
                  <div className='modalNavbar'>
                    <nav>
                      <ul className='modal-list'>
                        <li>
                          <Link to="/" className='modal-link'>Anasayfa</Link>
                        </li>
                        <li>
                          <Link to="/hakkimizda" className='modal-link'>Hakkımızda</Link>
                        </li>
                        <li>
                          <Link to="/roomCreate" className='modal-link'>Oda Oluştur</Link>
                        </li>
                        <li>
                          <Link to="/myRooms" className='modal-link'>Odalarım</Link>
                        </li>
                        <li>
                          <Link to="/profile" className='modal-link'>Profil</Link>
                        </li>
                        <div className='modal-user'>
                          <h4>Kullanıcı Adı</h4>
                        </div>
                      </ul>
                    </nav>
                  </div>
                  
              
          </div>
          )}
        </div>
      )}  
      
      

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

      <footer className='footer'>
        <div className='container'>
          <div className='row'>
            
            <div className='col'>
            <h4>Sayfalara Git</h4>
              <ul>
                <li><Link to="/">Anasayfa</Link></li>
                <li><Link to="/">Hakkımızda</Link></li>
                <li><Link to="/">Oda Oluştur</Link></li>
                <li><Link to="/">Odalarım</Link></li>
                <li><Link to="/">Profil</Link></li>
              </ul>
            </div>
            <div className='col'>
              <h4>Bizimle İletişime Geçin</h4>
              <ul>
                
                <li><a href='https://www.linkedin.com/in/mert-büyükaksoy-8654aa201/'>Mert Büyükaksoy</a></li>
                <li><a href='https://www.linkedin.com/in/erdal-nayir-9754281b1/'>Erdal Nayır</a></li>
                <li><a href='https://www.linkedin.com/in/mustafa-erhan-portakal-2142101ba/'>Mustafa Erhan Portakal</a></li>
                <li><a href='https://www.linkedin.com/in/ahmet-yıldırım-6bb7271ba/'>Ahmet Yıldırım</a></li>
                <li><a href='https://www.linkedin.com/in/eda-dural-b980151b7/'>Eda Dural</a></li>
              </ul>
            </div>
            
            <div className='col'>
              <h4>Sosyal Medya</h4>
              <ul>
                <li><a href='#'><FaFacebook /> Facebook</a></li>
                <li><a href='#'><FaTwitter /> Twitter</a></li>
                <li><a href='#'><FaInstagram /> Instagram</a></li>
                <li><a href='#'><FaTiktok /> TikTok</a></li>
                <li><a href='#'><FaTelegram /> Telegram</a></li>
              </ul>
            </div>
            
            
            
          </div>
        </div>
        
            <div className='lib'>
              © 2023 PlanlamaPro Tüm hakları saklıdır.
            </div>
      </footer>
      
      
    </Router>

    
  );
}

export default App;
