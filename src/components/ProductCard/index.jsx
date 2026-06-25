import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiHeart, FiEye, FiShoppingCart } from 'react-icons/fi';
import { FaStar, FaHeart } from 'react-icons/fa';
import CartContext from '../../context/CartContext';
import './index.css';

const getShortName = (fullName) => {
  const nameMap = {
    'Pure Kanchipuram Gold Zari Silk Saree': 'Kanchipuram Silk Saree',
    'Handcrafted Royal Brass Peacock Diya Lamp': 'Brass Peacock Diya',
    'Sacred Lord Ganesha Antique Brass Statue': 'Brass Ganesha Idol',
    'Floral Brass Urli Bowl for Floating Flowers': 'Brass Urli Bowl',
    'Traditional Brass Pooja Thali Set': 'Brass Pooja Thali',
    'Royal Banarasi Brocade Silk Saree': 'Banarasi Wedding Saree',
    'Sacred Lakshmi Antique Brass Idol': 'Brass Lakshmi Idol',
    'Royal Brass Hanging Bell with Chain': 'Brass Hanging Bell',
    'Classic Handloom Cotton Saree': 'Handloom Cotton Saree',
    'Designer Floral Print Cotton Saree': 'Floral Cotton Saree',
    'Premium Silk Blend Party Wear Saree': 'Silk Blend Saree',
    'Designer Zari Work Georgette Saree': 'Zari Georgette Saree',
    'Brass Decorative Kalash for Pooja': 'Brass Kalash',
    'Ornate Brass Diya Stand Set': 'Brass Diya Stand',
    'Premium Brass Dinner Utensils Set': 'Brass Dinner Set'
  };
  return nameMap[fullName] || fullName;
};

const ProductCard = ({ product, onQuickView }) => {
  const { 
    cartList,
    onIncreaseQuantity,
    onDecreaseQuantity,
    addToCart, 
    toggleWishlist, 
    isInWishlist, 
    compareList, 
    addToCompare 
  } = useContext(CartContext);
  
  const navigate = useNavigate();
  
  const { id, name, price, originalPrice, rating, images, stockStatus, category, brand } = product;
  const cartItem = cartList.find(item => item.id === id);
  const quantity = cartItem ? cartItem.quantity : 0;
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
        
        {/* Discount Badge top-left */}
        {discount > 0 && (
          <span className="discount-badge">-{discount}%</span>
        )}

        {/* Wishlist Heart Icon top-right */}
        <button 
          className={`wishlist-toggle-btn ${isWishlisted ? 'active' : ''}`}
          onClick={handleWishlist}
          aria-label="Add to Wishlist"
        >
          {isWishlisted ? <FaHeart /> : <FiHeart />}
        </button>
      </div>

      {/* Product Details */}
      <div className="product-card-info">
        <span className="product-card-category">{category}</span>
        <h3 className="product-card-title">{getShortName(name)}</h3>
        
        {/* Rating */}
        <div className="product-card-rating">
          <FaStar className="gold-star" />
          <span>{rating.toFixed(1)}</span>
        </div>

        {/* Pricing */}
        <div className="product-card-price-row">
          <span className="price-current">₹{price.toLocaleString('en-IN')}</span>
          {originalPrice && (
            <span className="price-original">₹{originalPrice.toLocaleString('en-IN')}</span>
          )}
          {discount > 0 && (
            <span className="price-discount-percent">{discount}% OFF</span>
          )}
        </div>

        {/* Stock status message */}
        <div className="product-card-stock-row">
          <span className={`stock-status-text ${stockStatus === 'Low Stock' ? 'low-stock' : stockStatus === 'Out of Stock' ? 'out-of-stock' : 'in-stock'}`}>
            {stockStatus === 'Low Stock' ? 'Only Few Left' : stockStatus}
          </span>
        </div>

        {/* Action Button */}
        <div className="product-card-action">
          {stockStatus === 'Out of Stock' ? (
            <button className="premium-add-to-cart-card-btn sold-out" disabled>
              Sold Out
            </button>
          ) : quantity > 0 ? (
            <div className="quantity-controls-card" onClick={(e) => e.stopPropagation()}>
              <button className="qty-card-btn" onClick={() => onDecreaseQuantity(cartItem.cartItemId)}>-</button>
              <span className="qty-card-val">{quantity}</span>
              <button className="qty-card-btn" onClick={() => onIncreaseQuantity(cartItem.cartItemId)}>+</button>
            </div>
          ) : (
            <button className="premium-add-to-cart-card-btn" onClick={handleAddToCart}>
              Add to Cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
