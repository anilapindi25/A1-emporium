import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Slider from 'react-slick';

import Navbar from '../../components/Navbar';
import ProductGrid from '../../components/ProductGrid';
import ReviewCard from '../../components/ReviewCard';
import Newsletter from '../../components/Newsletter';
import Footer from '../../components/Footer';

import { products, reviews } from '../../data/sarees';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './index.css';

const Home = () => {
  const navigate = useNavigate();

  // Filter products for sections
  const brassCollection = products.filter(p => ['Brass Lamps', 'Brass Idols', 'Brass Pooja'].includes(p.category)).slice(0, 4);
  const sareeCollection = products.filter(p => ['Wedding Sarees', 'Silk Sarees', 'Cotton Sarees'].includes(p.category)).slice(0, 4);
  const festivalCollection = products.filter(p => p.category === 'Brass Pooja').slice(0, 4);
  
  const newArrivals = products.slice(0, 4); // First 4 items
  const bestSellers = products.filter(p => p.isBestSeller).slice(0, 4); // Best sellers

  // Slick Slider Settings for Banners
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

  const heroSlides = [
    {
      id: 1,
      title: "Brass Collection",
      tag: "Sacred Brass Sculptures & Lamps",
      heading: "Bring Divinity & Heritage Into Your Home",
      desc: "Intricately cast peacock diyas, antique Ganesha statues, and traditional pooja essentials.",
      image: "/brass_diya_banner.png",
      cta: "/products?category=Brass Collection"
    },
    {
      id: 2,
      title: "Premium Sarees",
      tag: "Elegance of Indian Handlooms",
      heading: "Celebrate Heritage with Pure Silk Sarees",
      desc: "Explore premium Kanchipuram silk, Banarasi weaves, and masterfully crafted handlooms.",
      image: "/silk_saree_banner.png",
      cta: "/products?category=Sarees"
    },
    {
      id: 3,
      title: "Festival Collection",
      tag: "Pooja Essentials & Festival Decor",
      heading: "Artisanal Pooja Supplies & Sacred Urli Decor",
      desc: "Complete brass thali sets, floral urli bowls, and stand oil lamps for grand celebrations.",
      image: "/festival_urli_banner.png",
      cta: "/products?category=Brass Pooja"
    },
    {
      id: 4,
      title: "Heritage Brass",
      tag: "Heritage Accents for Modern Spaces",
      heading: "Grace Your Home with Brass Artistry",
      desc: "Experience the timeless beauty of handcrafted Indian brass collectibles and traditional weaves.",
      image: "/brass_diya_banner.png",
      cta: "/products"
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
              <div className="hero-slide-bg">
                <img 
                  src={slide.image} 
                  alt={slide.title} 
                  className="hero-slide-image-bg"
                />
                <div className="hero-bg-overlay"></div>
                <div className="hero-slide-content container">
                  <motion.div 
                    className="hero-text-container"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                  >
                    <h1 className="hero-heading">{slide.title}</h1>
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

      {/* Section 1: Brass Collection */}
      <section className="home-section container">
        <div className="section-head text-center">
          <h2 className="section-title">Brass Collection</h2>
          <div className="divider-gold"></div>
        </div>
        <ProductGrid products={brassCollection} viewMode="grid" />
        <div className="section-footer-actions">
          <button className="btn-outline mt-8" onClick={() => navigate('/products?category=Brass Collection')}>
            View All Brassware
          </button>
        </div>
      </section>

      {/* Section 2: Premium Sarees */}
      <section className="home-section bg-accent-light">
        <div className="container">
          <div className="section-head text-center">
            <h2 className="section-title">Premium Sarees</h2>
            <div className="divider-gold"></div>
          </div>
          <ProductGrid products={sareeCollection} viewMode="grid" />
          <div className="section-footer-actions">
            <button className="btn-outline mt-8" onClick={() => navigate('/products?category=Sarees')}>
              View All Sarees
            </button>
          </div>
        </div>
      </section>

      {/* Section 3: Festival Collection */}
      <section className="home-section container">
        <div className="section-head text-center">
          <h2 className="section-title">Festival Collection</h2>
          <div className="divider-gold"></div>
        </div>
        <ProductGrid products={festivalCollection} viewMode="grid" />
        <div className="section-footer-actions">
          <button className="btn-outline mt-8" onClick={() => navigate('/products?category=Brass Pooja')}>
            View All Festival Pooja
          </button>
        </div>
      </section>

      {/* Section 4: New Arrivals */}
      <section className="home-section bg-accent-light">
        <div className="container">
          <div className="section-head text-center">
            <h2 className="section-title">New Arrivals</h2>
            <div className="divider-gold"></div>
          </div>
          <ProductGrid products={newArrivals} viewMode="grid" />
          <div className="section-footer-actions">
            <button className="btn-outline mt-8" onClick={() => navigate('/products')}>
              View All Products
            </button>
          </div>
        </div>
      </section>

      {/* Section 5: Best Sellers */}
      <section className="home-section container">
        <div className="section-head text-center">
          <h2 className="section-title">Best Sellers</h2>
          <div className="divider-gold"></div>
        </div>
        <ProductGrid products={bestSellers} viewMode="grid" />
      </section>

      {/* Customer Reviews Section */}
      <section className="home-section bg-accent-light">
        <div className="container">
          <div className="section-head text-center">
            <h2 className="section-title">Customer Reviews</h2>
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
