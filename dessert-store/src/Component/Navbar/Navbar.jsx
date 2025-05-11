import React, { useState } from 'react';
import './Navbar.css';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom'; // <-- Import Link

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);

  const toggleMenu = () => {
    setIsMobile(!isMobile);
  };

  return (
    <nav className="navbar">
      <div className="logo">Dessert Delight</div>
      <ul className={isMobile ? 'nav-links-mobile' : 'nav-links'} onClick={() => setIsMobile(false)}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/menu">Menu</Link></li>
        <li><a href="#specials">Specials</a></li> 
        <li><Link to="/about">About</Link></li>
        <li><a href="/contact">Contact</a></li> 
      </ul>
      <button className="mobile-menu-icon" onClick={toggleMenu}>
        {isMobile ? <FaTimes /> : <FaBars />}
      </button>
    </nav>
  );
};

export default Navbar;
