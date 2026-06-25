import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './index.css';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  return (
    <section className="newsletter-section">
      <div className="newsletter-bg-tint"></div>
      <div className="newsletter-inner container">
        <motion.div
          className="newsletter-card glassmorphism"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true, margin: '-100px' }}
        >
          <span className="newsletter-subtitle">Join the A1 Club</span>
          <h2 className="newsletter-title">Stay Updated with the Latest Collections</h2>
          <p className="newsletter-text">
            Subscribe to our exclusive newsletter to receive early updates on new product launches, special festival offers, and luxury styling tips.
          </p>

          {subscribed ? (
            <motion.div 
              className="subscribe-success-msg"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
            >
              ❀ Thank you! You have been successfully subscribed to our newsletter.
            </motion.div>
          ) : (
            <form className="newsletter-form" onSubmit={handleSubmit}>
              <input
                type="email"
                placeholder="Enter your email address"
                className="newsletter-input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                aria-label="Email address for newsletter"
              />
              <button type="submit" className="btn-gold newsletter-submit-btn">
                Subscribe
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Newsletter;
