import React from 'react';
import { Link } from 'react-router-dom';
import FlashBoxLogo from '../images/FlashBoxLogo.png';
import Flashbox from '../images/FlashBox.png'; 
import './NavBar.css';

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={FlashBoxLogo} alt="Logo" className="logo" />
        <img src={Flashbox} alt="FlashBox" className="flashbox-logo" />
      </div>
      <ul className="navbar-list">
        <li className="navbar-item"><Link to="/" className="navbar-link">Home</Link></li>
        <li className="navbar-item"><Link to="/about" className="navbar-link">About</Link></li>
        <li className="navbar-item"><Link to="/services" className="navbar-link">Services</Link></li>
      </ul>
    </nav>
  );
};

export default NavBar;
