import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-inner container">
        <div className="footer-top-row">
          <div className="footer-brand">
            <span className="logo-main">A1 Emporium</span>
            <p className="footer-address">
              A1 Emporium Building, Road No. 1, Banjara Hills, Hyderabad, Telangana - 500034
            </p>
          </div>
          <div className="footer-links">
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/about#terms">Terms</Link>
            <Link to="/about#privacy">Privacy Policy</Link>
          </div>
        </div>
        <div className="footer-bottom-row">
          <p>&copy; {new Date().getFullYear()} A1 Emporium. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
