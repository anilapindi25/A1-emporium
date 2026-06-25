import React, { useContext, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { FiMapPin, FiCreditCard, FiCheckCircle, FiGift, FiChevronLeft } from 'react-icons/fi';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import CartContext from '../../context/CartContext';
import './index.css';

const Checkout = () => {
  const { 
    cartList, 
    address, 
    saveAddress, 
    addOrder, 
    clearCart, 
    appliedGiftCard, 
    applyGiftCard 
  } = useContext(CartContext);
  const navigate = useNavigate();

  // Local form states (loaded from context address initially)
  const [fullName, setFullName] = useState(address.fullName || '');
  const [phone, setPhone] = useState(address.phone || '');
  const [streetAddress, setStreetAddress] = useState(address.streetAddress || '');
  const [city, setCity] = useState(address.city || '');
  const [state, setState] = useState(address.state || '');
  const [zipCode, setZipCode] = useState(address.zipCode || '');
  
  // Coupon states
  const [couponCode, setCouponCode] = useState('');
  const [appliedDiscount, setAppliedDiscount] = useState(0); // in percentage
  const [couponMsg, setCouponMsg] = useState('');

  // Payment states
  const [paymentMethod, setPaymentMethod] = useState('upi'); // 'upi' | 'card' | 'netbanking' | 'cod'

  // Sum up prices
  const subtotal = cartList.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  
  // Base 10% auto discount + Coupon discount if any
  const baseDiscount = Math.round(subtotal * 0.10);
  const couponDiscount = appliedDiscount > 0 ? Math.round((subtotal - baseDiscount) * (appliedDiscount / 100)) : 0;
  
  const totalDiscount = baseDiscount + couponDiscount;
  const gstAmount = Math.round((subtotal - totalDiscount - appliedGiftCard) * 0.12);
  const deliveryFee = (subtotal - totalDiscount - appliedGiftCard) > 5000 ? 0 : 150;
  const grandTotal = Math.max(0, subtotal - totalDiscount - appliedGiftCard + gstAmount + deliveryFee);

  const handleApplyCoupon = (e) => {
    e.preventDefault();
    const code = couponCode.trim().toUpperCase();
    if (code === 'ELEGANCE15') {
      setAppliedDiscount(15);
      applyGiftCard(0);
      setCouponMsg('15% Elegant Discount applied successfully! ❀');
    } else if (code === 'FESTIVAL20') {
      setAppliedDiscount(20);
      applyGiftCard(0);
      setCouponMsg('20% Festive Discount applied successfully! ❀');
    } else if (code === 'GIFT500') {
      setAppliedDiscount(0);
      applyGiftCard(500);
      setCouponMsg('₹500 Gift Card applied successfully! ❀');
    } else if (code) {
      setAppliedDiscount(0);
      applyGiftCard(0);
      setCouponMsg('Invalid coupon code. Try ELEGANCE15, FESTIVAL20, or GIFT500.');
    }
  };

  const handlePlaceOrder = (e) => {
    e.preventDefault();

    if (!fullName || !phone || !streetAddress || !city || !state || !zipCode) {
      alert('Please fill out all shipping details.');
      return;
    }

    // Save active address details back to context
    const finalAddress = { fullName, phone, streetAddress, city, state, zipCode, country: 'India' };
    saveAddress(finalAddress);

    // Build order object
    const order = {
      orderId: `A1-ORD-${Math.floor(100000 + Math.random() * 900000)}`,
      orderDate: new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' }),
      items: [...cartList],
      shippingAddress: finalAddress,
      paymentMethod: paymentMethod.toUpperCase(),
      subtotal,
      discount: totalDiscount,
      gst: gstAmount,
      delivery: deliveryFee,
      total: grandTotal,
      status: 'Placed Successfully'
    };

    // Add order to profile history, clear cart, redirect
    addOrder(order);
    clearCart();
    navigate('/payment-success', { state: { orderId: order.orderId } });
  };

  if (cartList.length === 0) {
    return (
      <div className="checkout-page-container">
        <Navbar />
        <div className="container text-center pt-24 pb-24">
          <h2>No items to checkout</h2>
          <Link to="/products" className="btn-gold mt-4">Go Shopping</Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="checkout-page-container">
      <Navbar />

      <div className="checkout-body container">
        <Link to="/cart" className="back-link-row">
          <FiChevronLeft /> Back to Cart
        </Link>
        <h1 className="checkout-title">Secure Checkout</h1>
        <div className="divider-gold"></div>

        <form className="checkout-layout-grid" onSubmit={handlePlaceOrder}>
          
          {/* Shipping Form & Payment Details Column */}
          <div className="checkout-main-column">
            
            {/* Address Card */}
            <div className="checkout-section-card glassmorphism">
              <div className="section-title-row">
                <span className="step-badge">1</span>
                <h3>Shipping Details</h3>
              </div>
              <div className="divider-beige"></div>

              <div className="address-form-rows">
                <div className="form-group-half">
                  <div className="input-field-group">
                    <label>Full Name</label>
                    <input type="text" value={fullName} onChange={(e) => setFullName(e.target.value)} required />
                  </div>
                  <div className="input-field-group">
                    <label>Contact Phone</label>
                    <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} required />
                  </div>
                </div>

                <div className="input-field-group mt-4">
                  <label>Street Address</label>
                  <input type="text" value={streetAddress} onChange={(e) => setStreetAddress(e.target.value)} required />
                </div>

                <div className="form-group-half mt-4">
                  <div className="input-field-group">
                    <label>City</label>
                    <input type="text" value={city} onChange={(e) => setCity(e.target.value)} required />
                  </div>
                  <div className="input-field-group">
                    <label>State</label>
                    <input type="text" value={state} onChange={(e) => setState(e.target.value)} required />
                  </div>
                </div>

                <div className="form-group-half mt-4">
                  <div className="input-field-group">
                    <label>Zip Code / Pincode</label>
                    <input type="text" value={zipCode} onChange={(e) => setZipCode(e.target.value)} required />
                  </div>
                  <div className="input-field-group">
                    <label>Country</label>
                    <input type="text" value="India" disabled />
                  </div>
                </div>
              </div>
            </div>

            {/* Payment Method Card */}
            <div className="checkout-section-card glassmorphism mt-8">
              <div className="section-title-row">
                <span className="step-badge">2</span>
                <h3>Select Payment Method</h3>
              </div>
              <div className="divider-beige"></div>

              <div className="payment-options-grid">
                {/* UPI Option */}
                <label className={`payment-option-label ${paymentMethod === 'upi' ? 'active' : ''}`}>
                  <input type="radio" name="payment" value="upi" checked={paymentMethod === 'upi'} onChange={() => setPaymentMethod('upi')} />
                  <FiCheckCircle className="checked-indicator" />
                  <div className="payment-label-info">
                    <span className="option-name">UPI Payment</span>
                    <span className="option-sub">Pay via PhonePe, GPay, Paytm</span>
                  </div>
                </label>

                {/* Card Option */}
                <label className={`payment-option-label ${paymentMethod === 'card' ? 'active' : ''}`}>
                  <input type="radio" name="payment" value="card" checked={paymentMethod === 'card'} onChange={() => setPaymentMethod('card')} />
                  <FiCheckCircle className="checked-indicator" />
                  <div className="payment-label-info">
                    <span className="option-name">Credit / Debit Cards</span>
                    <span className="option-sub">Visa, MasterCard, RuPay</span>
                  </div>
                </label>

                {/* Net Banking Option */}
                <label className={`payment-option-label ${paymentMethod === 'netbanking' ? 'active' : ''}`}>
                  <input type="radio" name="payment" value="netbanking" checked={paymentMethod === 'netbanking'} onChange={() => setPaymentMethod('netbanking')} />
                  <FiCheckCircle className="checked-indicator" />
                  <div className="payment-label-info">
                    <span className="option-name">Net Banking</span>
                    <span className="option-sub">Secure direct bank transfer</span>
                  </div>
                </label>

                {/* COD Option */}
                <label className={`payment-option-label ${paymentMethod === 'cod' ? 'active' : ''}`}>
                  <input type="radio" name="payment" value="cod" checked={paymentMethod === 'cod'} onChange={() => setPaymentMethod('cod')} />
                  <FiCheckCircle className="checked-indicator" />
                  <div className="payment-label-info">
                    <span className="option-name">Cash on Delivery</span>
                    <span className="option-sub">Pay in cash on arrival</span>
                  </div>
                </label>
              </div>
            </div>

          </div>

          {/* Right Column: Order Summary & Coupon Code */}
          <div className="checkout-summary-column">
            
            {/* Coupon Code Card */}
            <div className="checkout-section-card glassmorphism mb-6">
              <h3 className="card-sub-heading flex-row-icon"><FiGift /> Apply Promo Code</h3>
              <form className="coupon-apply-form mt-4" onSubmit={handleApplyCoupon}>
                <input
                  type="text"
                  placeholder="E.g. ELEGANCE15, FESTIVAL20"
                  value={couponCode}
                  onChange={(e) => setCouponCode(e.target.value)}
                />
                <button type="submit" className="btn-gold apply-code-btn">Apply</button>
              </form>
              {couponMsg && <p className={`coupon-status-msg ${appliedDiscount > 0 ? 'text-success' : 'text-error'}`}>{couponMsg}</p>}
            </div>

            {/* Billing Receipt Card */}
            <div className="checkout-section-card glassmorphism">
              <h3 className="card-sub-heading">Order Summary</h3>
              <div className="divider-beige"></div>

              {/* Items Summary list */}
              <div className="checkout-items-summary-list">
                {cartList.map(item => (
                  <div key={item.cartItemId} className="checkout-summary-item-row">
                    <span className="item-name-qty">{item.name} <b>x{item.quantity}</b></span>
                    <span className="item-price">₹{(item.price * item.quantity).toLocaleString('en-IN')}</span>
                  </div>
                ))}
              </div>

              <div className="divider-beige mt-4"></div>

              {/* Invoice lines */}
              <div className="invoice-rows-list">
                <div className="invoice-row">
                  <span>Bag Subtotal</span>
                  <span>₹{subtotal.toLocaleString('en-IN')}</span>
                </div>
                <div className="invoice-row text-green">
                  <span>Total Discount</span>
                  <span>-₹{totalDiscount.toLocaleString('en-IN')}</span>
                </div>
                {appliedGiftCard > 0 && (
                  <div className="invoice-row text-green">
                    <span>Gift Card Code</span>
                    <span>-₹{appliedGiftCard.toLocaleString('en-IN')}</span>
                  </div>
                )}
                <div className="invoice-row">
                  <span>GST Tax (12%)</span>
                  <span>₹{gstAmount.toLocaleString('en-IN')}</span>
                </div>
                <div className="invoice-row">
                  <span>Delivery Shipping</span>
                  <span>{deliveryFee === 0 ? 'FREE' : `₹${deliveryFee}`}</span>
                </div>
              </div>

              <div className="divider-beige mt-4"></div>

              <div className="invoice-grand-total-row">
                <span>Total Amount Due</span>
                <span>₹{grandTotal.toLocaleString('en-IN')}</span>
              </div>

              <button type="submit" className="btn-maroon place-order-submit-btn">
                Place Order (₹{grandTotal.toLocaleString('en-IN')})
              </button>
            </div>

          </div>

        </form>
      </div>

      <Footer />
    </div>
  );
};

export default Checkout;
