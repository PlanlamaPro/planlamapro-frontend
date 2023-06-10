import React from 'react';
import './Mainscreen.css';
import mainImg from '../Logo/AnaSayfaResim.png';
import timeImg from '../Photo/timeImg.png';
import secondImg from '../Photo/pngwing.com.png';
import planningImg from '../Photo/planning.png';
import aboutImg from '../Photo/hakkimizda.png'
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

function MainScreen(props) {

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [imageWidth, setImageWidth] = useState('100%');

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    if (windowWidth >= 1200) {
      setImageWidth('30%');
    } else if (windowWidth >= 768) {
      setImageWidth('50%');
    } else {
      setImageWidth('100%');
    }
  }, [windowWidth]);

    
    return (
        

        
        <div className='mainscreen'>
            <div className='imgDiv'>
                <img className='mainimg' src={mainImg} alt="Resim açıklaması"  style={{ width: imageWidth}} />
            </div>

            <div>
                <div className='info'>
                    <div className='infoTextLeft'>
                        <h4>Hakkımızda</h4>
                        <p>
                            Biz 5 Kişilik bir grup olarak Bursa Teknik Üniversitesinde okuyan öğrencileriz
                            Bizim hakkımızda detaylı bilgi almak için aşağıdaki hakkımızda butonuna tıklayabilirsiniz
                        </p>
                        <div className='linkdiv'>
                            <Link to="/" className='link'>Hakkımızda</Link>
                        </div>
                    </div>
                    <div className='infoImg'>
                        <img className='aboutImg' src={aboutImg} alt="" />
                    </div>
                </div>
                <div className='info'>
                    <div className='infoTextLeft'>
                        <h4>Oda Oluştur</h4>
                        <p>
                            Arkadaşlarınla bir etkinlik yapmak için hemen oda oluştur
                        </p>
                        <div className='linkdiv'>
                            <Link to="/" className='link'>Oda Oluştur</Link>
                        </div>
                    </div>
                    <div className='infoImg'>
                        <img className='timeImg' src={timeImg} alt="" />
                    </div>
                </div>
                <div className='info'>
                     <div className='infoImg'>
                        <img className='secondImg' src={secondImg} alt="" />
                    </div>
                    <div className='infoTextRight'>
                        <h4>Odalarım</h4>
                        <p>
                            Katıldığın Odalara Git
                        </p>
                        <div className='linkdiv'>
                            <Link to="/" className='link'>Odalarım</Link>
                        </div>
                    </div>
                    
                </div>
                <div className='info'>
                    <div className='infoTextLeft'>
                        <h4>Profil</h4>
                        <p>
                            Profilinde arkadaşlarınla neler yaptığını gör
                        </p>
                        <div className='linkdiv'>
                            <Link to="/" className='link'>Profil</Link>
                        </div>
                    </div>
                    <div className='infoImg'>
                        <img className='timeImg' src={planningImg} alt="" />
                    </div>
                </div>

                
               
            </div>


            </div>
        
            
           
    );
}

export default MainScreen;