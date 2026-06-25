import React from 'react';
import { Link } from 'react-router-dom';
import { FaInstagram, FaFacebookF, FaWhatsapp } from 'react-icons/fa';
import './index.css';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-top container">
        {/* Brand Details */}
        <div className="footer-brand-section">
          <Link to="/" className="footer-logo">
            <span className="logo-icon">A1</span>
            <span className="logo-main">A1 Emporium</span>
          </Link>
          <p className="brand-tagline">"Where Tradition Meets Elegance."</p>
          <p className="brand-desc">
            Discover premium curated sarees, designer kurtis, bridal lehengas, and handloom fabrics sourced directly from India's traditional weaving clusters.
          </p>
          <div className="footer-socials">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Follow us on Instagram">
              <FaInstagram />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Follow us on Facebook">
              <FaFacebookF />
            </a>
            <a href="https://wa.me" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Contact us on WhatsApp">
              <FaWhatsapp />
            </a>
          </div>
        </div>

        {/* Company Links */}
        <div className="footer-links-section">
          <h4 className="footer-heading">Company</h4>
          <ul className="footer-links-list">
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/products">Collections</Link></li>
          </ul>
        </div>

        {/* Legal & Policy Links */}
        <div className="footer-links-section">
          <h4 className="footer-heading">Customer Policies</h4>
          <ul className="footer-links-list">
            <li><Link to="/about#privacy">Privacy Policy</Link></li>
            <li><Link to="/about#terms">Terms of Service</Link></li>
            <li><Link to="/contact#locations">Store Locator</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="footer-links-section">
          <h4 className="footer-heading">Boutique Office</h4>
          <p className="contact-info-text">
            A1 Emporium Building, Road No. 1,<br />
            Banjara Hills, Hyderabad,<br />
            Telangana - 500034
          </p>
          <p className="contact-info-text mt-4">
            Email: contact@a1emporium.com<br />
            Phone: +91 40 1234 5678
          </p>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container bottom-inner">
          <p>&copy; {new Date().getFullYear()} A1 Emporium. All Rights Reserved. Crafted with Timeless Elegance.</p>
          <p className="designer-tag">Boutique Indian Fashion Store</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
