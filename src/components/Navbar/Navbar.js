import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <>
      <nav className="navbar">
        <button className="hamburger-btn" onClick={toggleMenu}>
          &#9776;
        </button>

      </nav>

      <div className={`side-menu ${isMenuOpen ? 'open' : ''}`}>
        <div className="menu-content">
          <ul>
            <li><a href="/">Home</a></li>

            <li><a href="/services">Our Services</a></li>
            <li><a href="/LaPazPackages">La Paz Packages</a></li>
            <li><a href="/portfolio">Portfolio</a></li>
            <li><a href="/aboutus">About Us</a></li>
            <li><a href="/blog">Blog</a></li>
            <li><a href="/contact">Contact</a></li>


          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;