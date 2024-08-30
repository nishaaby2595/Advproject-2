import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section company-info">
          <h5>Corporate Solutions</h5>
          <p>Leading provider of business and technology solutions for enterprises worldwide.</p>
        </div>

        <div className="footer-section social-media">
          <h5>Follow Us</h5>
          <a href="https://facebook.com" >
            <img src="./images/icons/facebook.png" alt="Facebook" />
          </a>
          <a href="https://twitter.com">
            <img src="./images/icons/twitter.png" alt="Twitter" />
          </a>
          <a href="https://linkedin.com">
            <img src="./images/icons/linkedin.png" alt="LinkedIn" />
          </a>
          <a href="https://instagram.com">
            <img src="./images/icons/instagram.png" alt="instagram" />
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Corporate Solutions. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
