import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiHeart, FiEye, FiShoppingCart } from 'react-icons/fi';
import { FaStar, FaHeart } from 'react-icons/fa';
import CartContext from '../../context/CartContext';
import './index.css';

const ProductCard = ({ product, onQuickView }) => {
  const { 
    addToCart, 
    toggleWishlist, 
    isInWishlist, 
    compareList, 
    addToCompare 
  } = useContext(CartContext);
  
  const navigate = useNavigate();
  
  const { id, name, price, originalPrice, rating, images, stockStatus, category, brand } = product;
  const isWishlisted = isInWishlist(id);
  const isCompared = compareList.some(item => item.id === id);
  
  // Calculate discount percentage
  const discount = originalPrice ? Math.round(((originalPrice - price) / originalPrice) * 100) : 0;
  
  const handleCardClick = () => {
    navigate(`/products/${id}`);
  };

  const handleWishlist = (e) => {
    e.stopPropagation();
    toggleWishlist(product);
  };

  const handleAddToCart = (e) => {
    e.stopPropagation();
    addToCart(product);
  };

  const handleBuyNow = (e) => {
    e.stopPropagation();
    addToCart(product);
    navigate('/cart');
  };

  const handleQuickViewClick = (e) => {
    e.stopPropagation();
    if (onQuickView) {
      onQuickView(product);
    } else {
      navigate(`/products/${id}`);
    }
  };

  const handleCompareChange = (e) => {
    e.stopPropagation();
    addToCompare(product);
  };

  return (
    <div className="product-card-container" onClick={handleCardClick}>
      {/* Product Image Wrapper */}
      <div className="product-image-wrapper">
        <img 
          src={images[0]} 
          alt={name} 
          className="product-card-image"
          loading="lazy"
        />
        
        {/* Badges */}
        <div className="product-card-badges">
          {discount > 0 && <span className="discount-badge">-{discount}% OFF</span>}
          {stockStatus === 'Low Stock' && <span className="stock-badge low-stock">Low Stock</span>}
          {stockStatus === 'Out of Stock' && <span className="stock-badge out-of-stock">Out of Stock</span>}
        </div>

        {/* Wishlist Heart Icon */}
        <button 
          className={`wishlist-toggle-btn ${isWishlisted ? 'active' : ''}`}
          onClick={handleWishlist}
          aria-label="Add to Wishlist"
        >
          {isWishlisted ? <FaHeart /> : <FiHeart />}
        </button>

        {/* Hover Action Overlay */}
        <div className="product-card-overlay">
          <div className="overlay-actions-row">
            <button 
              className="circle-action-btn" 
              onClick={handleQuickViewClick}
              title="Quick View"
              aria-label="Quick View"
            >
              <FiEye />
            </button>
            <button 
              className="circle-action-btn" 
              onClick={handleAddToCart}
              title="Add to Cart"
              aria-label="Add to Cart"
              disabled={stockStatus === 'Out of Stock'}
            >
              <FiShoppingCart />
            </button>
          </div>
          <button 
            className="buy-now-overlay-btn" 
            onClick={handleBuyNow}
            disabled={stockStatus === 'Out of Stock'}
          >
            Buy Now
          </button>
        </div>
      </div>

      {/* Product Details */}
      <div className="product-card-info">
        <div className="product-brand-row">
          <span className="product-card-brand">{brand}</span>
          <span className="product-card-category">{category}</span>
        </div>
        
        <h3 className="product-card-title">{name}</h3>
        
        {/* Rating */}
        <div className="product-card-rating">
          <span className="stars-wrapper">
            <FaStar className="gold-star" />
            <span>{rating.toFixed(1)}</span>
          </span>
        </div>

        {/* Pricing & Compare checkbox */}
        <div className="product-card-price-row" style={{ marginTop: 'auto', marginBottom: '12px' }}>
          <div className="prices-col">
            <span className="price-current">₹{price.toLocaleString('en-IN')}</span>
            {originalPrice && (
              <span className="price-original">₹{originalPrice.toLocaleString('en-IN')}</span>
            )}
          </div>
        </div>

        {/* Visible Premium Add to Bag Button */}
        <button 
          className="premium-add-to-cart-card-btn btn-gold" 
          onClick={handleAddToCart}
          disabled={stockStatus === 'Out of Stock'}
        >
          <FiShoppingCart /> {stockStatus === 'Out of Stock' ? 'Sold Out' : 'Add to Bag'}
        </button>

        {/* Side-by-Side Product Comparison Checkbox */}
        <label className="compare-checkbox-container" onClick={(e) => e.stopPropagation()}>
          <input
            type="checkbox"
            checked={isCompared}
            onChange={handleCompareChange}
          />
          <span>Add to Compare</span>
        </label>

      </div>
    </div>
  );
};

export default ProductCard;
