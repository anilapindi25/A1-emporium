import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { categories } from '../../data/sarees';
import './index.css';

const Categories = () => {
  const navigate = useNavigate();

  const handleCategoryClick = (categoryName) => {
    navigate(`/products?category=${encodeURIComponent(categoryName)}`);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <section className="categories-section container">
      <div className="section-head text-center">
        <span className="section-sub">Curated Selections</span>
        <h2 className="section-title">Shop by Category</h2>
        <div className="divider-gold"></div>
      </div>

      <motion.div 
        className="categories-grid"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-100px' }}
      >
        {categories.map((category) => (
          <motion.div
            key={category.id}
            className="category-card"
            variants={itemVariants}
            onClick={() => handleCategoryClick(category.name)}
            whileHover={{ scale: 1.02 }}
          >
            <div className="category-image-wrapper">
              <img 
                src={category.image} 
                alt={category.name} 
                className="category-image"
                loading="lazy"
              />
              <div className="category-overlay"></div>
              
              <div className="category-info-card glassmorphism">
                <h3 className="category-card-title">{category.name}</h3>
                <span className="category-explore-link">Explore Collection</span>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Categories;
