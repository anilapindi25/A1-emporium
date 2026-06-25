import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Slider from 'react-slick';
import { 
  FiAward, FiShield, FiTruck, FiCheckCircle, 
  FiRotateCcw, FiPercent, FiClock 
} from 'react-icons/fi';

import Navbar from '../../components/Navbar';
import Categories from '../../components/Categories';
import ProductGrid from '../../components/ProductGrid';
import ReviewCard from '../../components/ReviewCard';
import Newsletter from '../../components/Newsletter';
import Footer from '../../components/Footer';

import { products, reviews, brandPartners } from '../../data/sarees';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './index.css';

const Home = () => {
  const navigate = useNavigate();

  // Filter products for sections
  const newArrivals = products.slice(0, 4); // First 4 items
  const bestSellers = products.filter(p => p.isBestSeller).slice(0, 4); // Best sellers
  const trendingProducts = products.filter(p => !p.isBestSeller).slice(0, 6); // Trending

  // 1. Flash Sale Count Down Timer State
  const [timeLeft, setTimeLeft] = useState({ hours: 4, minutes: 34, seconds: 12 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else {
          clearInterval(timer);
          return { hours: 0, minutes: 0, seconds: 0 };
        }
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // 2. Slick Slider Settings for Banners
  const heroSliderSettings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    fade: true,
    cssEase: 'linear'
  };

  // 3. Slick Slider Settings for Trending Cards
  const trendingSliderSettings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  const heroSlides = [
    {
      id: 1,
      title: "Wedding Collection",
      tag: "Bridal Splendour",
      heading: "Celebrate Every Occasion with Timeless Elegance",
      desc: "Explore premium zardozi bridal lehengas, hand-woven pure silk sarees, and exquisite Kundan jewelry.",
      image: "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?w=1600&auto=format&fit=crop&q=80",
      cta: "/products?collection=wedding"
    },
    {
      id: 2,
      title: "Western Wear",
      tag: "Contemporary Classics",
      heading: "Style, Elegance & Confidence for Every Woman",
      desc: "Discover our premium satin slip dresses, crisp linen blazers, and coordinates crafted for modern versatility.",
      image: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=1600&auto=format&fit=crop&q=80",
      cta: "/products?category=Dresses"
    },
    {
      id: 3,
      title: "Luxe Beauty",
      tag: "Glow & Radiance",
      heading: "Skincare, Cosmetics & Perfumes Redefined",
      desc: "Plump skin with organic hyaluronic serums, find your shade in 16h matte lipsticks, and wear rich jasmine scents.",
      image: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=1600&auto=format&fit=crop&q=80",
      cta: "/products?category=Beauty%20Products"
    }
  ];

  return (
    <div className="home-page-container">
      {/* Sticky Header */}
      <Navbar />

      {/* Hero Multi-Banner Slider */}
      <div className="hero-slider-section">
        <Slider {...heroSliderSettings}>
          {heroSlides.map(slide => (
            <div key={slide.id} className="hero-slide-item">
              <div 
                className="hero-slide-bg" 
                style={{ backgroundImage: `url(${slide.image})` }}
              >
                <div className="hero-bg-overlay"></div>
                <div className="hero-slide-content container">
                  <motion.div 
                    className="hero-text-card glassmorphism"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                  >
                    <span className="hero-tagline">{slide.tag}</span>
                    <h1 className="hero-heading">{slide.heading}</h1>
                    <p className="hero-subheading">{slide.desc}</p>
                    <div className="hero-buttons">
                      <button className="btn-gold" onClick={() => navigate(slide.cta)}>
                        Explore Collection
                      </button>
                      <button className="btn-outline" onClick={() => navigate('/products')}>
                        Shop Now
                      </button>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      {/* Featured Categories */}
      <Categories />

      {/* Flash Sale Banner Widget */}
      <section className="home-section container">
        <div className="flash-sale-banner-widget glassmorphism">
          <div className="flash-sale-left">
            <span className="flash-badge"><FiPercent /> Flash Sale</span>
            <h2>Exclusive Mid-Summer Offer</h2>
            <p>Get up to <b>35% Off</b> across luxury cosmetics, Western wear, and designer handbags. Ends soon!</p>
            <div className="timer-wrapper">
              <div className="timer-icon"><FiClock /></div>
              <div className="timer-block">
                <span>{timeLeft.hours.toString().padStart(2, '0')}</span>
                <span className="timer-label">Hrs</span>
              </div>
              <span className="timer-colon">:</span>
              <div className="timer-block">
                <span>{timeLeft.minutes.toString().padStart(2, '0')}</span>
                <span className="timer-label">Mins</span>
              </div>
              <span className="timer-colon">:</span>
              <div className="timer-block">
                <span>{timeLeft.seconds.toString().padStart(2, '0')}</span>
                <span className="timer-label">Secs</span>
              </div>
            </div>
          </div>
          <div className="flash-sale-right">
            <button className="btn-maroon flash-shop-btn" onClick={() => navigate('/products?discount=30')}>
              Shop the Sale Now
            </button>
          </div>
        </div>
      </section>

      {/* Best Sellers Section */}
      <section className="home-section container">
        <div className="section-head text-center">
          <span className="section-sub">Customer Favourites</span>
          <h2 className="section-title">Best Sellers</h2>
          <div className="divider-gold"></div>
        </div>
        <ProductGrid products={bestSellers} viewMode="grid" />
      </section>

      {/* Trending Collection Slider Section */}
      <section className="home-section bg-accent-light">
        <div className="container">
          <div className="section-head text-center">
            <span className="section-sub">Most Loved</span>
            <h2 className="section-title">Trending Collection</h2>
            <div className="divider-gold"></div>
          </div>
          
          <div className="trending-slider-wrapper">
            <Slider {...trendingSliderSettings}>
              {trendingProducts.map((product) => (
                <div key={product.id} className="trending-slider-item">
                  <div className="trending-card" onClick={() => navigate(`/products/${product.id}`)}>
                    <div className="trending-img-box">
                      <img src={product.images[0]} alt={product.name} className="trending-img" />
                      <span className="trending-price-tag">₹{product.price.toLocaleString('en-IN')}</span>
                    </div>
                    <div className="trending-info-box">
                      <span className="trending-brand">{product.brand}</span>
                      <span className="trending-cat">{product.category}</span>
                      <h4 className="trending-title">{product.name}</h4>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </section>

      {/* New Arrivals Section */}
      <section className="home-section container">
        <div className="section-head text-center">
          <span className="section-sub">Just In</span>
          <h2 className="section-title">New Arrivals</h2>
          <div className="divider-gold"></div>
        </div>
        <ProductGrid products={newArrivals} viewMode="grid" />
        <div className="section-footer-actions">
          <button className="btn-outline mt-8" onClick={() => navigate('/products')}>
            View All Products
          </button>
        </div>
      </section>

      {/* Brand Partners Section */}
      <section className="home-section bg-accent-light text-center">
        <div className="container">
          <span className="section-sub">Elite Collaborations</span>
          <h2 className="section-title">Brand Partners</h2>
          <div className="divider-gold mx-auto mb-12"></div>
          
          <div className="brand-partners-slider-row">
            {brandPartners.map((brand, idx) => (
              <div key={idx} className="brand-logo-partner-card glassmorphism">
                <span className="brand-logo-icon">{brand.logo}</span>
                <span className="brand-logo-name">{brand.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose A1 Emporium Section */}
      <section className="home-section container">
        <div className="section-head text-center">
          <span className="section-sub">Our Promise</span>
          <h2 className="section-title">Why Choose A1 Emporium</h2>
          <div className="divider-gold"></div>
        </div>

        <div className="why-choose-grid">
          <div className="feature-card hover-lift">
            <div className="feature-icon-wrapper"><FiAward /></div>
            <h3 className="feature-card-title">Luxury Quality</h3>
            <p className="feature-card-desc">Hand-selected threads, certified fabrics, and premium dermatologist-approved beauty essentials.</p>
          </div>
          <div className="feature-card hover-lift">
            <div className="feature-icon-wrapper"><FiShield /></div>
            <h3 className="feature-card-title">Secure Payments</h3>
            <p className="feature-card-desc">Complete checkout encryption through credit/debit cards, Netbanking, UPI, or cash on delivery options.</p>
          </div>
          <div className="feature-card hover-lift">
            <div className="feature-icon-wrapper"><FiTruck /></div>
            <h3 className="feature-card-title">Fast Delivery</h3>
            <p className="feature-card-desc">Express delivery across India within 3 days, and reliable global shipping options. Safe packaging.</p>
          </div>
        </div>
      </section>

      {/* Customer Reviews Section */}
      <section className="home-section bg-accent-light">
        <div className="container">
          <div className="section-head text-center">
            <span className="section-sub">Testimonials</span>
            <h2 className="section-title">What Our Customers Say</h2>
            <div className="divider-gold"></div>
          </div>

          <div className="reviews-cards-grid">
            {reviews.map((review) => (
              <div key={review.id} className="reviews-grid-item">
                <ReviewCard review={review} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <Newsletter />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
