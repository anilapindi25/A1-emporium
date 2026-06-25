import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiPhone, FiMail, FiClock, FiMapPin, FiCheckCircle } from 'react-icons/fi';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import './index.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'general',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: 'general', message: '' });
      setTimeout(() => setSubmitted(false), 5000);
    }
  };

  return (
    <div className="contact-page-container">
      <Navbar />

      {/* Contact Hero Banner */}
      <div className="contact-hero-banner">
        <div className="banner-overlay-dark"></div>
        <div className="banner-text container text-center">
          <span className="banner-sub">Connect With Us</span>
          <h1 className="banner-title">Contact A1 Boutique</h1>
          <p className="banner-desc">Have questions about custom bridal styling, silk orders, or delivery? Reach out to our design consultants.</p>
        </div>
      </div>

      {/* Contact Main Body */}
      <div className="contact-body container">
        <div className="contact-grid-wrapper">
          
          {/* Support and Location details */}
          <div className="contact-info-column">
            <span className="section-sub">Boutique Locations</span>
            <h2 className="section-title">Store Information</h2>
            <div className="divider-gold mb-6"></div>

            {/* Info Cards */}
            <div className="contact-cards-list">
              {/* Card 1 */}
              <div className="contact-info-item-card glassmorphism">
                <div className="info-card-icon-wrapper">
                  <FiMapPin />
                </div>
                <div className="info-card-details">
                  <h4>Head Boutique Address</h4>
                  <p>A1 Emporium Building, Road No. 1, Banjara Hills, Hyderabad, Telangana - 500034</p>
                </div>
              </div>

              {/* Card 2 */}
              <div className="contact-info-item-card glassmorphism">
                <div className="info-card-icon-wrapper">
                  <FiPhone />
                </div>
                <div className="info-card-details">
                  <h4>Call Customer Care</h4>
                  <p>Phone: +91 40 1234 5678</p>
                  <p>Mobile/WhatsApp Support: +91 98765 43210</p>
                </div>
              </div>

              {/* Card 3 */}
              <div className="contact-info-item-card glassmorphism">
                <div className="info-card-icon-wrapper">
                  <FiMail />
                </div>
                <div className="info-card-details">
                  <h4>Email Queries</h4>
                  <p>Styling Consultations: style@a1emporium.com</p>
                  <p>General Support: contact@a1emporium.com</p>
                </div>
              </div>

              {/* Card 4 */}
              <div className="contact-info-item-card glassmorphism">
                <div className="info-card-icon-wrapper">
                  <FiClock />
                </div>
                <div className="info-card-details">
                  <h4>Working Hours</h4>
                  <p>Monday - Saturday: 10:00 AM - 08:30 PM (IST)</p>
                  <p>Sunday: 11:30 AM - 06:30 PM (IST)</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Inquiry Form */}
          <div className="contact-form-column">
            <div className="contact-form-card glassmorphism">
              <h3 className="contact-form-heading">Send an Inquiry</h3>
              <div className="divider-beige"></div>

              {submitted ? (
                <div className="contact-form-success-card text-center">
                  <FiCheckCircle className="form-success-icon" />
                  <h4>Inquiry Sent Successfully!</h4>
                  <p>Thank you for reaching out. An A1 Emporium designer representative will reply to your email within 24 hours.</p>
                </div>
              ) : (
                <form className="contact-form-element" onSubmit={handleFormSubmit}>
                  {/* Name field */}
                  <div className="input-field-group">
                    <label htmlFor="contact-name">Full Name</label>
                    <input
                      type="text"
                      id="contact-name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  {/* Email field */}
                  <div className="input-field-group mt-4">
                    <label htmlFor="contact-email">Email Address</label>
                    <input
                      type="email"
                      id="contact-email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  {/* Subject select */}
                  <div className="input-field-group mt-4">
                    <label htmlFor="contact-subject">Inquiry Subject</label>
                    <select
                      id="contact-subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="contact-subject-select"
                    >
                      <option value="general">General Support</option>
                      <option value="bridal">Bridal Consultation</option>
                      <option value="custom">Custom fabric Weaving</option>
                      <option value="wholesale">Bulk / Wholesale Orders</option>
                    </select>
                  </div>

                  {/* Message field */}
                  <div className="input-field-group mt-4">
                    <label htmlFor="contact-message">Message / Details</label>
                    <textarea
                      id="contact-message"
                      name="message"
                      rows="5"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <button type="submit" className="btn-gold contact-form-submit-btn">
                    Submit Inquiry
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Map Locator Section */}
        <section className="contact-map-section mt-16">
          <h3 className="card-sub-heading text-center">Locate A1 Emporium Boutique</h3>
          <div className="divider-gold mx-auto mb-8"></div>
          
          <div className="map-card-wrapper glassmorphism">
            {/* Styled Map Placeholder */}
            <div className="styled-map-canvas">
              <div className="canvas-details text-center">
                <FiMapPin className="map-pin-pulse" />
                <h4>A1 Emporium Boutique Hub</h4>
                <p>Road No. 1, Banjara Hills (Opposite GVK One Mall), Hyderabad, India</p>
                <a 
                  href="https://maps.google.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn-gold mt-4"
                >
                  Open in Google Maps
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;
