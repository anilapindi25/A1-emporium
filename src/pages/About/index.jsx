import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import './index.css';

const About = () => {
  return (
    <div className="about-page-container">
      <Navbar />

      {/* About Header */}
      <div className="about-hero-banner">
        <div className="banner-overlay-dark"></div>
        <div className="banner-text container text-center">
          <span className="banner-sub">Since 1984</span>
          <h1 className="banner-title">Our Story & Heritage</h1>
          <p className="banner-desc">Dedicated to preserving the beauty and luxury of authentic Indian handlooms.</p>
        </div>
      </div>

      {/* Section 1: The Story */}
      <section className="about-section container">
        <div className="about-grid-wrapper">
          <div className="about-text-col">
            <span className="section-sub">Where We Started</span>
            <h2 className="section-title">The Story of A1 Emporium</h2>
            <div className="divider-gold mb-6"></div>
            <p className="about-para">
              A1 Emporium was founded in 1984 in the historic heart of Hyderabad as a small, passionate boutique dedicated to sourcing authentic, high-quality hand-woven sarees. What began as a local sanctuary for pure silk connoisseurs has now grown into a premium fashion house, trusted worldwide for bringing the finest Indian ethnic wear to modern wardrobes.
            </p>
            <p className="about-para">
              We work directly with third-generation master weavers across India's traditional clusters—from the temple towns of Kanchipuram and the ghats of Banaras to the handloom pockets of Chanderi and Lucknow. By bypassing middlemen, we support artisan livelihoods while delivering unmatched premium quality to you.
            </p>
          </div>
          <div className="about-image-col">
            <img 
              src="https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=800&auto=format&fit=crop&q=80" 
              alt="Artisan loom weaving" 
              className="about-large-image hover-scale"
            />
          </div>
        </div>
      </section>

      {/* Section 2: Vision & Mission (Split Layout) */}
      <section className="about-section bg-accent-light">
        <div className="container vision-mission-grid">
          <div className="vision-card glassmorphism">
            <h3 className="about-card-heading">Our Vision</h3>
            <p className="about-card-text">
              To keep the legacy of traditional Indian weaving alive and thriving, ensuring that every handcrafted thread receives the appreciation and global recognition it deserves in the luxury fashion landscape.
            </p>
          </div>

          <div className="mission-card glassmorphism">
            <h3 className="about-card-heading">Our Mission</h3>
            <p className="about-card-text">
              To deliver premium quality, handloom apparel directly from the looms to your doorstep, providing an elegant, seamless shopping experience that blends heritage tradition with contemporary modern aesthetics.
            </p>
          </div>
        </div>
      </section>

      {/* Section 3: Why Customers Love Us */}
      <section className="about-section container">
        <div className="section-head text-center">
          <span className="section-sub">Why We Stand Out</span>
          <h2 className="section-title">Why Customers Love Us</h2>
          <div className="divider-gold"></div>
        </div>

        <div className="why-choose-grid mt-8">
          <div className="feature-card">
            <span className="feature-number">01</span>
            <h3 className="feature-card-title">100% Pure Fabrics</h3>
            <p className="feature-card-desc">Every piece is verified for fiber purity, ensuring you wear only genuine mulberry silk, premium linen, and organic cotton.</p>
          </div>

          <div className="feature-card">
            <span className="feature-number">02</span>
            <h3 className="feature-card-title">Artisanal Empowerment</h3>
            <p className="feature-card-desc">A portion of our profits goes directly to weaver welfare funds, supporting children education and cluster health insurance.</p>
          </div>

          <div className="feature-card">
            <span className="feature-number">03</span>
            <h3 className="feature-card-title">Custom Craftsmanship</h3>
            <p className="feature-card-desc">We offer tailor-made sizes, custom color drapes, and personalized designer consultations for bridal events.</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
