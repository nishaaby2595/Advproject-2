import React, { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };


  const toggleDropdown = (dropdown) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };
  return (
    <header className="header">
      <div className="header-container">
        
        <div className="logo-container">
          <img src="./images/icons/logo.png" alt="Company Logo" className="logo" />
          <h1 className="heading">Corporate Solutions</h1>
        </div>
        <div className="auth-buttons">
            <button className="signuplogin-button">Sign Up/login</button>
            <button className="cart-button">
              <img src="./images/icons/cart.png" alt="cart" />
            </button>
          </div>
        
        <nav className={`nav ${isMenuOpen ? "open" : ""}`}>
         <ul className="nav-links">
         <li className="dropdown">
            <a href="#" onClick={() => toggleDropdown('about')}>About Us</a>
            <div className={`submenu ${activeDropdown === 'about' ? 'show' : ''}`}>
                <a href="/our-mission"> Mission & Vision</a>
                <a href="/leadership">Leadership Team</a>
                <a href="/careers">Careers</a>
            </div>
         </li>
         <li className="dropdown">
         <a href="#" onClick={() => toggleDropdown('industries')}>Industries Served</a>
              <div className={`submenu ${activeDropdown === 'industries' ? 'show' : ''}`}>
                <a href="/healthcare">Healthcare</a>
                <a href="/finance">Finance</a>
                <a href="/manufacturing">Manufacturing</a>
              </div>
         </li>
         <li className="dropdown">
              <a href="#" onClick={() => toggleDropdown('consulting')}>Consulting</a>
              <div className={`submenu ${activeDropdown === 'consulting' ? 'show' : ''}`}>
                <a href="/strategy">Strategy and Planning</a>
                <a href="/it-consulting">IT Consulting</a>
                <a href="/operational-efficiency">Operational Efficiency</a>
              </div>
         </li>
         <li className="dropdown">
              <a href="#" onClick={() => toggleDropdown('Technology')}>Technology</a>
              <div className={`submenu ${activeDropdown === 'Technology' ? 'show' : ''}`}>
                <a href="/strategy">Cloud Services</a>
                <a href="/it-consulting">Data Analytics</a>
                <a href="/operational-efficiency">AI & Machine learning</a>
              </div>
         </li>
          </ul>
        </nav>
        <button className="burger-menu" onClick={toggleMenu}>
            &#9776;
        </button>
      </div>
    </header>
  );
};

export default Header;
