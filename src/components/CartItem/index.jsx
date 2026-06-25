import React, { useContext } from 'react';
import { FiTrash2, FiPlus, FiMinus, FiHeart } from 'react-icons/fi';
import { FaHeart } from 'react-icons/fa';
import CartContext from '../../context/CartContext';
import './index.css';

const CartItem = ({ item }) => {
  const { 
    onIncreaseQuantity, 
    onDecreaseQuantity, 
    removeFromCart, 
    toggleWishlist, 
    isInWishlist 
  } = useContext(CartContext);

  const { 
    cartItemId, 
    id, 
    name, 
    price, 
    images, 
    selectedSize, 
    selectedColor, 
    quantity, 
    stockStatus 
  } = item;

  const isWishlisted = isInWishlist(id);

  const handleRemove = () => {
    removeFromCart(cartItemId);
  };

  const handleSaveForLater = () => {
    toggleWishlist(item);
    removeFromCart(cartItemId);
  };

  return (
    <div className="cart-item-container">
      {/* Product Image */}
      <div className="cart-item-image-wrapper">
        <img src={images[0]} alt={name} className="cart-item-image" />
      </div>

      {/* Product Details */}
      <div className="cart-item-details">
        <h4 className="cart-item-name">{name}</h4>
        
        <div className="cart-item-meta">
          <span className="meta-badge">Size: {selectedSize}</span>
          {selectedColor && selectedColor !== 'Default' && (
            <span className="meta-badge">Color: {selectedColor.name || selectedColor}</span>
          )}
        </div>

        <div className="cart-item-actions-row">
          <button className="cart-action-link-btn" onClick={handleSaveForLater}>
            {isWishlisted ? <FaHeart className="filled-heart" /> : <FiHeart />}
            <span>Save for Later</span>
          </button>
          
          <button className="cart-action-link-btn text-red" onClick={handleRemove}>
            <FiTrash2 />
            <span>Remove</span>
          </button>
        </div>
      </div>

      {/* Quantity Selector */}
      <div className="cart-item-quantity-section">
        <span className="section-label-mobile">Quantity</span>
        <div className="quantity-adjuster-box">
          <button 
            type="button" 
            className="quantity-adjust-btn" 
            onClick={() => onDecreaseQuantity(cartItemId)}
            aria-label="Decrease quantity"
          >
            <FiMinus />
          </button>
          <span className="quantity-value">{quantity}</span>
          <button 
            type="button" 
            className="quantity-adjust-btn" 
            onClick={() => onIncreaseQuantity(cartItemId)}
            aria-label="Increase quantity"
            disabled={stockStatus === 'Out of Stock'}
          >
            <FiPlus />
          </button>
        </div>
      </div>

      {/* Item Price */}
      <div className="cart-item-price-section">
        <span className="section-label-mobile">Price</span>
        <span className="cart-item-price-total">₹{(price * quantity).toLocaleString('en-IN')}</span>
        {quantity > 1 && (
          <span className="cart-item-price-unit">₹{price.toLocaleString('en-IN')} each</span>
        )}
      </div>
    </div>
  );
};

export default CartItem;