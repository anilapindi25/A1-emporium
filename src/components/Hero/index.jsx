import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import './index.css';

const Hero = () => {
  const navigate = useNavigate();

  // Floating Mandalas Animation Settings
  const mandalaVariants = {
    animate1: {
      rotate: 360,
      x: [0, 15, -10, 0],
      y: [0, -20, 10, 0],
      transition: {
        rotate: { repeat: Infinity, duration: 80, ease: 'linear' },
        x: { repeat: Infinity, duration: 15, ease: 'easeInOut' },
        y: { repeat: Infinity, duration: 12, ease: 'easeInOut' }
      }
    },
    animate2: {
      rotate: -360,
      x: [0, -20, 15, 0],
      y: [0, 15, -25, 0],
      transition: {
        rotate: { repeat: Infinity, duration: 100, ease: 'linear' },
        x: { repeat: Infinity, duration: 18, ease: 'easeInOut' },
        y: { repeat: Infinity, duration: 14, ease: 'easeInOut' }
      }
    }
  };

  return (
    <div className="hero-container">
      {/* Background Image Overlay */}
      <div className="hero-bg-overlay"></div>

      {/* Floating Mandalas */}
      <motion.div
        className="floating-mandala mandala-top"
        variants={mandalaVariants}
        animate="animate1"
      >
        <svg viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="45" stroke="var(--secondary-gold)" strokeWidth="0.5" fill="none" strokeDasharray="3 3" />
          <path d="M 50 5 Q 52 25 50 45 Q 48 25 50 5 Z" fill="var(--secondary-gold)" opacity="0.15" />
          <path d="M 50 95 Q 52 75 50 55 Q 48 75 50 95 Z" fill="var(--secondary-gold)" opacity="0.15" />
          <path d="M 5 50 Q 25 52 45 50 Q 25 48 5 50 Z" fill="var(--secondary-gold)" opacity="0.15" />
          <path d="M 95 50 Q 75 52 55 50 Q 75 48 95 50 Z" fill="var(--secondary-gold)" opacity="0.15" />
          <circle cx="50" cy="50" r="15" stroke="var(--secondary-gold)" strokeWidth="0.5" fill="none" />
        </svg>
      </motion.div>

      <motion.div
        className="floating-mandala mandala-bottom"
        variants={mandalaVariants}
        animate="animate2"
      >
        <svg viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="40" stroke="var(--primary-maroon)" strokeWidth="0.5" fill="none" strokeDasharray="4 2" />
          <circle cx="50" cy="50" r="20" stroke="var(--secondary-gold)" strokeWidth="0.3" fill="none" />
          <polygon points="50,10 60,35 90,50 60,65 50,90 40,65 10,50 40,35" stroke="var(--secondary-gold)" strokeWidth="0.5" fill="none" opacity="0.3" />
        </svg>
      </motion.div>

      {/* Hero Content */}
      <div className="hero-content container">
        <motion.div 
          className="hero-text-card glassmorphism"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.span 
            className="hero-tagline"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            A1 Emporium
          </motion.span>
          
          <motion.h1 
            className="hero-heading"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Celebrate Every Occasion with Timeless Elegance
          </motion.h1>

          <motion.p 
            className="hero-subheading"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            Discover premium sarees crafted with elegance, comfort, and tradition. Woven with love by India's finest master artisans.
          </motion.p>

          <motion.div 
            className="hero-buttons"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.9, duration: 0.5 }}
          >
            <button className="btn-gold" onClick={() => navigate('/products')}>
              Explore Collection
            </button>
            <button className="btn-outline" onClick={() => navigate('/products?collection=wedding')}>
              Shop Wedding
            </button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
