import React, { useContext } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiCheckCircle, FiPackage, FiCalendar, FiMapPin, FiTruck } from 'react-icons/fi';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import CartContext from '../../context/CartContext';
import './index.css';

const Orders = () => {
  const { orders } = useContext(CartContext);
  const location = useLocation();
  const navigate = useNavigate();

  // Check if we just redirected from checkout with an order id
  const newlyPlacedOrderId = location.state?.orderId;
  const recentOrder = newlyPlacedOrderId ? orders.find(o => o.orderId === newlyPlacedOrderId) : null;

  return (
    <div className="orders-page-container">
      <Navbar />

      <div className="orders-body container">
        {recentOrder ? (
          /* Case A: Order Placed Successfully Confirmation View */
          <div className="order-success-confirmation-view">
            {/* Checkmark Animation Wrapper */}
            <motion.div 
              className="success-anim-circle"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: 'spring', damping: 15, stiffness: 200 }}
            >
              <FiCheckCircle className="green-checkmark-icon" />
            </motion.div>

            <motion.h1 
              className="success-title"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              Order Placed Successfully!
            </motion.h1>

            <motion.p 
              className="success-subtitle"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              Thank you for shopping with A1 Emporium. Your order is being processed by our boutique weavers.
            </motion.p>

            {/* Order Brief Info */}
            <motion.div 
              className="order-brief-summary-box glassmorphism"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <div className="summary-info-row">
                <span className="summary-info-label">Order ID:</span>
                <span className="summary-info-val highlight-gold">{recentOrder.orderId}</span>
              </div>
              <div className="summary-info-row">
                <span className="summary-info-label">Date:</span>
                <span className="summary-info-val">{recentOrder.orderDate}</span>
              </div>
              <div className="summary-info-row">
                <span className="summary-info-label">Payment Mode:</span>
                <span className="summary-info-val">{recentOrder.paymentMethod}</span>
              </div>
              <div className="summary-info-row">
                <span className="summary-info-label">Total Charged:</span>
                <span className="summary-info-val">₹{recentOrder.total.toLocaleString('en-IN')}</span>
              </div>
              <div className="summary-info-row">
                <span className="summary-info-label">Shipping To:</span>
                <span className="summary-info-val text-sm">{recentOrder.shippingAddress.fullName}, {recentOrder.shippingAddress.city}</span>
              </div>
            </motion.div>

            <motion.div 
              className="success-actions-row"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <Link to="/products" className="btn-gold">
                Continue Shopping
              </Link>
              <Link to="/profile?tab=orders" className="btn-outline">
                Track Orders
              </Link>
            </motion.div>
          </div>
        ) : (
          /* Case B: Standalone Orders History Listing View */
          <div className="orders-history-listing-view">
            <h1 className="orders-page-title">Your Order History</h1>
            <div className="divider-gold mb-8"></div>

            {orders.length === 0 ? (
              <div className="empty-orders-card text-center glassmorphism">
                <div className="empty-orders-icon-wrapper">
                  <FiPackage />
                </div>
                <h2>No Orders Placed Yet</h2>
                <p>You haven't purchased any luxurious ethnic wear yet. Explore our designer collections to place your first order.</p>
                <Link to="/products" className="btn-gold mt-6">Start Shopping</Link>
              </div>
            ) : (
              <div className="orders-history-cards-list">
                {orders.map((order) => (
                  <div key={order.orderId} className="order-history-card glassmorphism">
                    {/* Header bar of order */}
                    <div className="order-history-card-header">
                      <div className="order-history-meta-col">
                        <span className="order-id-label">{order.orderId}</span>
                        <span className="order-date-row"><FiCalendar /> {order.orderDate}</span>
                      </div>
                      <div className="order-history-status-col">
                        <span className="status-badge-delivered"><FiCheckCircle /> {order.status}</span>
                      </div>
                    </div>

                    <div className="divider-beige"></div>

                    {/* Items row */}
                    <div className="order-history-items-row">
                      {order.items.map((item, idx) => (
                        <div key={idx} className="order-history-item-thumb-row">
                          <img src={item.images[0]} alt={item.name} className="item-thumb-img" />
                          <div className="item-thumb-details">
                            <span className="item-thumb-title">{item.name}</span>
                            <span className="item-thumb-meta">Qty: {item.quantity} | Size: {item.selectedSize}</span>
                          </div>
                          <span className="item-thumb-price">₹{(item.price * item.quantity).toLocaleString('en-IN')}</span>
                        </div>
                      ))}
                    </div>

                    <div className="divider-beige"></div>

                    {/* Footer bar of order */}
                    <div className="order-history-card-footer">
                      <div className="order-delivery-address-col">
                        <span><FiMapPin /> Delivered To:</span>
                        <p>{order.shippingAddress.fullName}, {order.shippingAddress.streetAddress}, {order.shippingAddress.city} - {order.shippingAddress.zipCode}</p>
                      </div>
                      <div className="order-total-price-col">
                        <span>Total Paid</span>
                        <h3>₹{order.total.toLocaleString('en-IN')}</h3>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default Orders;
