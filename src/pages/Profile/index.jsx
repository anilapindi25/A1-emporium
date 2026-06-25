import React, { useContext, useState, useEffect } from 'react';
import { useLocation, Link, useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import { FiUser, FiPackage, FiHeart, FiMapPin, FiLogOut, FiEdit2, FiCheck } from 'react-icons/fi';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import ProductCard from '../../components/ProductCard';
import CartContext from '../../context/CartContext';
import './index.css';

const Profile = () => {
  const { wishlist, orders, address, saveAddress, userName, userEmail, logoutUser } = useContext(CartContext);
  const location = useLocation();
  const navigate = useNavigate();

  const [activeTab, setActiveTab] = useState('info'); // 'info' | 'orders' | 'wishlist'
  
  // Profile edit states
  const [isEditingAddress, setIsEditingAddress] = useState(false);
  const [editName, setEditName] = useState(address.fullName);
  const [editPhone, setEditPhone] = useState(address.phone);
  const [editStreet, setEditStreet] = useState(address.streetAddress);
  const [editCity, setEditCity] = useState(address.city);
  const [editState, setEditState] = useState(address.state);
  const [editZip, setEditZip] = useState(address.zipCode);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const tabParam = params.get('tab');
    if (tabParam === 'orders') setActiveTab('orders');
    if (tabParam === 'wishlist') setActiveTab('wishlist');
  }, [location.search]);

  // Sync edit name state when address updates from login
  useEffect(() => {
    setEditName(address.fullName);
  }, [address.fullName]);

  const handleLogout = () => {
    Cookies.remove('jwt_token');
    logoutUser();
    navigate('/login');
  };

  const handleSaveAddressEdit = (e) => {
    e.preventDefault();
    saveAddress({
      fullName: editName,
      phone: editPhone,
      streetAddress: editStreet,
      city: editCity,
      state: editState,
      zipCode: editZip,
      country: 'India'
    });
    setIsEditingAddress(false);
  };

  return (
    <div className="profile-page-container">
      <Navbar />

      <div className="profile-body container">
        <div className="profile-layout-grid">
          
          {/* Left Navigation Card */}
          <aside className="profile-nav-sidebar glassmorphism">
            <div className="profile-header-meta">
              <div className="profile-avatar-circle">
                <FiUser />
              </div>
              <h3 className="profile-user-name">{userName}</h3>
              <span className="profile-user-email">{userEmail}</span>
            </div>

            <div className="divider-beige"></div>

            <ul className="profile-tabs-list">
              <li>
                <button 
                  className={`profile-tab-link ${activeTab === 'info' ? 'active' : ''}`}
                  onClick={() => setActiveTab('info')}
                >
                  <FiUser /> Personal Details
                </button>
              </li>
              <li>
                <button 
                  className={`profile-tab-link ${activeTab === 'orders' ? 'active' : ''}`}
                  onClick={() => setActiveTab('orders')}
                >
                  <FiPackage /> Order History ({orders.length})
                </button>
              </li>
              <li>
                <button 
                  className={`profile-tab-link ${activeTab === 'wishlist' ? 'active' : ''}`}
                  onClick={() => setActiveTab('wishlist')}
                >
                  <FiHeart /> Wishlist ({wishlist.length})
                </button>
              </li>
              <li className="logout-tab-item">
                <button className="profile-tab-link text-red" onClick={handleLogout}>
                  <FiLogOut /> Log Out
                </button>
              </li>
            </ul>
          </aside>

          {/* Right Contents Area */}
          <main className="profile-content-area glassmorphism">
            
            {/* Tab 1: Personal Details */}
            {activeTab === 'info' && (
              <div className="profile-tab-content-panel">
                <div className="panel-title-row">
                  <h2>Account Details</h2>
                </div>
                <div className="divider-beige"></div>

                <div className="details-info-rows">
                  <div className="info-display-row">
                    <span className="info-row-label">Full Name</span>
                    <span className="info-row-value">{userName}</span>
                  </div>
                  <div className="info-display-row">
                    <span className="info-row-label">Email Address</span>
                    <span className="info-row-value">{userEmail}</span>
                  </div>
                  <div className="info-display-row">
                    <span className="info-row-label">Primary Mobile</span>
                    <span className="info-row-value">{address.phone}</span>
                  </div>
                </div>

                <div className="panel-title-row mt-8">
                  <h2>Shipping Address</h2>
                  {!isEditingAddress && (
                    <button className="btn-outline edit-addr-btn" onClick={() => setIsEditingAddress(true)}>
                      <FiEdit2 /> Edit Address
                    </button>
                  )}
                </div>
                <div className="divider-beige"></div>

                {isEditingAddress ? (
                  /* Edit Address Form */
                  <form className="profile-address-edit-form" onSubmit={handleSaveAddressEdit}>
                    <div className="form-group-half">
                      <div className="input-field-group">
                        <label>Receiver Name</label>
                        <input type="text" value={editName} onChange={(e) => setEditName(e.target.value)} required />
                      </div>
                      <div className="input-field-group">
                        <label>Contact Phone</label>
                        <input type="tel" value={editPhone} onChange={(e) => setEditPhone(e.target.value)} required />
                      </div>
                    </div>
                    <div className="input-field-group mt-4">
                      <label>Street Address</label>
                      <input type="text" value={editStreet} onChange={(e) => setEditStreet(e.target.value)} required />
                    </div>
                    <div className="form-group-half mt-4">
                      <div className="input-field-group">
                        <label>City</label>
                        <input type="text" value={editCity} onChange={(e) => setEditCity(e.target.value)} required />
                      </div>
                      <div className="input-field-group">
                        <label>State</label>
                        <input type="text" value={editState} onChange={(e) => setEditState(e.target.value)} required />
                      </div>
                    </div>
                    <div className="form-group-half mt-4">
                      <div className="input-field-group">
                        <label>Zip Code</label>
                        <input type="text" value={editZip} onChange={(e) => setEditZip(e.target.value)} required />
                      </div>
                      <div className="input-field-group">
                        <label>Country</label>
                        <input type="text" value="India" disabled />
                      </div>
                    </div>
                    <div className="address-form-actions mt-6">
                      <button type="submit" className="btn-gold"><FiCheck /> Save</button>
                      <button type="button" className="btn-outline" onClick={() => setIsEditingAddress(false)}>Cancel</button>
                    </div>
                  </form>
                ) : (
                  /* Address Details View */
                  <div className="address-display-box">
                    <div className="address-icon-box">
                      <FiMapPin />
                    </div>
                    <div className="address-details-text">
                      <h4>{address.fullName}</h4>
                      <p>{address.streetAddress}</p>
                      <p>{address.city}, {address.state} - <b>{address.zipCode}</b></p>
                      <p className="address-phone-txt">Phone: {address.phone}</p>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Tab 2: Order History */}
            {activeTab === 'orders' && (
              <div className="profile-tab-content-panel">
                <h2>Purchase History</h2>
                <div className="divider-beige mb-6"></div>

                {orders.length === 0 ? (
                  <div className="profile-empty-panel-state text-center">
                    <div className="empty-panel-icon"><FiPackage /></div>
                    <h3>No Orders Found</h3>
                    <p>When you purchase from our collections, your order receipts will appear here.</p>
                    <Link to="/products" className="btn-gold mt-4">Shop Now</Link>
                  </div>
                ) : (
                  <div className="profile-orders-list">
                    {orders.map(order => (
                      <div key={order.orderId} className="profile-order-row-card">
                        <div className="row-card-head">
                          <div>
                            <span className="row-order-id">{order.orderId}</span>
                            <span className="row-order-date">{order.orderDate}</span>
                          </div>
                          <span className="row-order-status">{order.status}</span>
                        </div>
                        <div className="row-card-body">
                          {order.items.map((item, idx) => (
                            <div key={idx} className="row-item-meta">
                              <span>• {item.name} (x{item.quantity}) - {item.selectedSize}</span>
                            </div>
                          ))}
                        </div>
                        <div className="row-card-foot">
                          <span>Payment Method: {order.paymentMethod}</span>
                          <h4>Total: ₹{order.total.toLocaleString('en-IN')}</h4>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* Tab 3: Wishlist */}
            {activeTab === 'wishlist' && (
              <div className="profile-tab-content-panel">
                <h2>Your Wishlist Collection</h2>
                <div className="divider-beige mb-6"></div>

                {wishlist.length === 0 ? (
                  <div className="profile-empty-panel-state text-center">
                    <div className="empty-panel-icon"><FiHeart /></div>
                    <h3>Your Wishlist is Empty</h3>
                    <p>Save items you love here to easily purchase them later.</p>
                    <Link to="/products" className="btn-gold mt-4">Explore Sarees</Link>
                  </div>
                ) : (
                  <div className="profile-wishlist-grid">
                    {wishlist.map(product => (
                      <ProductCard key={product.id} product={product} />
                    ))}
                  </div>
                )}
              </div>
            )}

          </main>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Profile;
