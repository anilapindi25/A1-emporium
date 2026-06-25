import React, { useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { FiShoppingBag, FiTrash2, FiArrowRight, FiPercent } from 'react-icons/fi';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import CartItem from '../../components/CartItem';
import CartContext from '../../context/CartContext';
import './index.css';

const Cart = () => {
  const { cartList, clearCart } = useContext(CartContext);
  const navigate = useNavigate();

  // Sum up subtotal
  const subtotal = cartList.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  
  // Calculate discount (10% auto discount + show crossed out pricing benefits)
  const discountRate = 0.10; 
  const discountAmount = Math.round(subtotal * discountRate);

  // GST 12% on ethnic apparel in India
  const gstAmount = Math.round((subtotal - discountAmount) * 0.12);

  // Delivery: Free if order > ₹5,000, else ₹150
  const deliveryFee = (subtotal - discountAmount) > 5000 ? 0 : 150;

  // Grand Total
  const grandTotal = subtotal - discountAmount + gstAmount + deliveryFee;

  const handleCheckout = () => {
    navigate('/checkout');
  };

  const handleClear = () => {
    if (window.confirm('Are you sure you want to clear your shopping cart?')) {
      clearCart();
    }
  };

  return (
    <div className="cart-page-container">
      <Navbar />

      <div className="cart-body container">
        <h1 className="cart-page-title">Shopping Cart</h1>
        <div className="divider-gold"></div>

        {cartList.length === 0 ? (
          /* Empty Cart View */
          <div className="empty-cart-card text-center glassmorphism">
            <div className="empty-cart-icon-wrapper">
              <FiShoppingBag />
            </div>
            <h2>Your Shopping Cart is Empty</h2>
            <p>Traditional elegance is waiting for you. Browse our exclusive catalog to add premium handlooms to your cart.</p>
            <Link to="/products" className="btn-gold mt-6">Shop Collections</Link>
          </div>
        ) : (
          /* Filled Cart View */
          <div className="cart-grid-wrapper">
            
            {/* Cart Items List */}
            <div className="cart-items-column">
              <div className="cart-list-header">
                <h3>Bag Items ({cartList.length})</h3>
                <button className="clear-cart-btn" onClick={handleClear}>
                  <FiTrash2 /> Clear Bag
                </button>
              </div>

              <div className="cart-items-list-wrapper">
                {cartList.map((item) => (
                  <CartItem key={item.cartItemId} item={item} />
                ))}
              </div>

              <div className="cart-footer-actions">
                <Link to="/products" className="btn-outline">
                  Continue Shopping
                </Link>
              </div>
            </div>

            {/* Price Order Summary Bill Column */}
            <div className="cart-summary-column">
              <div className="order-summary-card glassmorphism">
                <h3 className="summary-card-title">Order Bill Summary</h3>
                <div className="divider-beige"></div>

                {/* Subtotal */}
                <div className="summary-row">
                  <span className="summary-row-label">Bag Subtotal</span>
                  <span className="summary-row-value">₹{subtotal.toLocaleString('en-IN')}</span>
                </div>

                {/* Discount */}
                <div className="summary-row text-green">
                  <span className="summary-row-label flex-row-icon">
                    <FiPercent /> 10% Auto Discount
                  </span>
                  <span className="summary-row-value">-₹{discountAmount.toLocaleString('en-IN')}</span>
                </div>

                {/* GST */}
                <div className="summary-row">
                  <span className="summary-row-label">GST (12% Apparel Tax)</span>
                  <span className="summary-row-value">₹{gstAmount.toLocaleString('en-IN')}</span>
                </div>

                {/* Delivery */}
                <div className="summary-row">
                  <span className="summary-row-label">Standard Delivery</span>
                  <span className="summary-row-value">
                    {deliveryFee === 0 ? <span className="free-tag">FREE</span> : `₹${deliveryFee}`}
                  </span>
                </div>

                {deliveryFee > 0 && (
                  <p className="delivery-free-prompt">
                    *Add items worth <b>₹{((5000 - (subtotal - discountAmount))).toLocaleString('en-IN')}</b> more to unlock Free Shipping!
                  </p>
                )}

                <div className="divider-beige mt-6"></div>

                {/* Grand Total */}
                <div className="summary-row grand-total-row">
                  <span className="grand-total-label">Grand Total</span>
                  <span className="grand-total-value">₹{grandTotal.toLocaleString('en-IN')}</span>
                </div>

                {/* Checkout Button */}
                <button className="btn-gold checkout-submit-btn" onClick={handleCheckout}>
                  Proceed to Checkout <FiArrowRight />
                </button>

                <p className="summary-card-assurance">
                  🔒 Secure checkout and hassle-free returns. By proceeding, you agree to our Terms of Service.
                </p>
              </div>
            </div>

          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default Cart;
