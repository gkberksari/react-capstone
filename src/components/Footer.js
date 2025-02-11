import '../styles/Footer.css';
import logo from '../icons_assets/Logo .svg';
import React from 'react';
function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="footer-logo">
          <img src={logo} alt="Little Lemon" className="logo" />
          <p>© 2024 Little Lemon. All rights reserved.</p>
        </div>
        <nav className="footer-nav">
          <ul>
            <li><a href="/privacy">Privacy Policy</a></li>
            <li><a href="/terms">Terms & Conditions</a></li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;