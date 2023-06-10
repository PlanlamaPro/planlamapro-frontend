import { Link } from "react-router-dom";
import "../styles/footer.css";

import React from "react";

import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaTiktok,
  FaTelegram,
} from "react-icons/fa";

function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="col">
              <h4>Sayfalara Git</h4>
              <ul>
                <li>
                  <Link to="/">Anasayfa</Link>
                </li>
                <li>
                  <Link to="/">Hakkımızda</Link>
                </li>
                <li>
                  <Link to="/">Oda Oluştur</Link>
                </li>
                <li>
                  <Link to="/">Odalarım</Link>
                </li>
                <li>
                  <Link to="/">Profil</Link>
                </li>
              </ul>
            </div>
            <div className="col">
              <h4>Bizimle İletişime Geçin</h4>
              <ul>
                <li>
                  <a href="https://www.linkedin.com/in/mert-büyükaksoy-8654aa201/">
                    Mert Büyükaksoy
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/erdal-nayir-9754281b1/">
                    Erdal Nayır
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/mustafa-erhan-portakal-2142101ba/">
                    Mustafa Erhan Portakal
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/ahmet-yıldırım-6bb7271ba/">
                    Ahmet Yıldırım
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/eda-dural-b980151b7/">
                    Eda Dural
                  </a>
                </li>
              </ul>
            </div>

            <div className="col">
              <h4>Sosyal Medya</h4>
              <ul>
                <li>
                  <a href="#">
                    <FaFacebook /> Facebook
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FaTwitter /> Twitter
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FaInstagram /> Instagram
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FaTiktok /> TikTok
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FaTelegram /> Telegram
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="lib">© 2023 PlanlamaPro Tüm hakları saklıdır.</div>
      </footer>
    </>
  );
}

export default Footer;
