import './Footer.css';
import logo1 from '../../assets/photos/logoal.png'; // Reemplaza con tu ruta real
import logo2 from '../../assets/photos/Logo.png';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Logos */}
        <div className="footer-logos">
          <a href="https://www.alphallama.media/" target="_blank" rel="noopener noreferrer">
            <img src={logo1} alt="Organizer 1" />
          </a>
          <a href="https://www.andesamazon.travel/" target="_blank" rel="noopener noreferrer">
            <img src={logo2} alt="Organizer 2" />
          </a>
        </div>


        {/* Links */}
        <ul className="footer-links">
          <li><a href="/">Home</a></li>
          <li><a href="/services">Services</a></li>
          <li><a href="/portfolio">Gallery</a></li>
          <li><a href="/faq">FAQ</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>

        {/* Redes */}
        <div className="footer-social">
          <a href="https://www.instagram.com/andean_love_shots/" target="_blank" rel="noopener noreferrer">Instagram</a>
          <a href="https://www.facebook.com/profile.php?id=61570954643502" target="_blank" rel="noopener noreferrer">Facebook</a>
          <a href="https://wa.me/71948121" target="_blank" rel="noopener noreferrer">WhatsApp</a>
        </div>
      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} Wedding Salar. All rights reserved.
      </div>
    </footer>
  );
}
