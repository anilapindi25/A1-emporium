import React, { useContext, useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import { 
  FiShoppingCart, FiHeart, FiUser, FiSearch, 
  FiMenu, FiX, FiLogOut, FiSun, FiMoon, FiBell, FiLayers 
} from 'react-icons/fi';
import CartContext from '../../context/CartContext';
import './index.css';

const Navbar = () => {
  const { 
    cartList, 
    wishlist, 
    compareList, 
    darkMode, 
    toggleDarkMode, 
    notifications, 
    clearNotifications,
    logoutUser
  } = useContext(CartContext);

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  
  // Dropdown states
  const [notifOpen, setNotifOpen] = useState(false);
  
  const navigate = useNavigate();
  const token = Cookies.get('jwt_token');

  const handleLogout = () => {
    Cookies.remove('jwt_token');
    logoutUser();
    navigate('/login');
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/products?search=${encodeURIComponent(searchQuery)}`);
      setSearchOpen(false);
      setSearchQuery('');
    }
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const cartCount = cartList.reduce((acc, item) => acc + item.quantity, 0);
  const wishlistCount = wishlist.length;
  const compareCount = compareList.length;

  return (
    <nav className="navbar-container glassmorphism">
      <div className="navbar-inner container">
        {/* Mobile Toggle */}
        <button className="mobile-toggle-btn" onClick={toggleMobileMenu} aria-label="Toggle Navigation Menu">
          {mobileMenuOpen ? <FiX /> : <FiMenu />}
        </button>

        {/* Brand Logo */}
        <Link to="/" className="navbar-logo-link">
          <span className="logo-icon">A1</span>
          <div className="logo-text-wrapper">
            <span className="logo-main">A1 Emporium</span>
            <span className="logo-sub">Lifestyle Department</span>
          </div>
        </Link>

        {/* Navigation Links */}
        <ul className={`nav-links ${mobileMenuOpen ? 'mobile-open' : ''}`}>
          <li>
            <NavLink to="/" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'} onClick={() => setMobileMenuOpen(false)}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/products" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'} onClick={() => setMobileMenuOpen(false)}>
              Shop Catalog
            </NavLink>
          </li>
          <li>
            <NavLink to="/faqs" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'} onClick={() => setMobileMenuOpen(false)}>
              FAQs
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'} onClick={() => setMobileMenuOpen(false)}>
              About Us
            </NavLink>
          </li>
        </ul>

        {/* Navbar Action Icons */}
        <div className="navbar-actions">
          
          {/* Search Icon */}
          <div className="search-action-wrapper">
            <button className="action-btn" onClick={() => setSearchOpen(!searchOpen)} aria-label="Toggle Search">
              <FiSearch />
            </button>
            {searchOpen && (
              <form className="search-dropdown-form glassmorphism" onSubmit={handleSearchSubmit}>
                <input
                  type="text"
                  placeholder="Search dresses, cosmetics, bags..."
                  className="search-input"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  autoFocus
                />
                <button type="submit" className="search-submit-btn">Go</button>
              </form>
            )}
          </div>

          {/* Dark Mode Toggle */}
          <button className="action-btn theme-switch-btn" onClick={toggleDarkMode} title="Toggle Dark/Light Mode">
            {darkMode ? <FiSun /> : <FiMoon />}
          </button>

          {/* Notifications Bell Dropdown */}
          <div className="notifications-action-wrapper" style={{ position: 'relative' }}>
            <button className="action-btn" onClick={() => setNotifOpen(!notifOpen)} title="Notifications">
              <FiBell />
              {notifications.length > 0 && <span className="action-badge">{notifications.length}</span>}
            </button>
            {notifOpen && (
              <div className="notifications-dropdown glassmorphism">
                <div className="notif-header">
                  <h4>Activity Alerts</h4>
                  <button className="notif-clear-btn" onClick={clearNotifications}>Clear</button>
                </div>
                <div className="divider-beige" style={{ margin: '8px 0' }}></div>
                <div className="notif-list">
                  {notifications.length === 0 ? (
                    <p className="notif-empty-state">No new notifications</p>
                  ) : (
                    notifications.map(notif => (
                      <div key={notif.id} className="notif-item">
                        {notif.text}
                      </div>
                    ))
                  )}
                </div>
              </div>
            )}
          </div>

          {/* Compare Link */}
          <Link to="/compare" className="action-btn compare-icon-btn" title="Compare Products">
            <FiLayers />
            {compareCount > 0 && <span className="action-badge">{compareCount}</span>}
          </Link>

          {/* Wishlist Link */}
          <Link to="/profile?tab=wishlist" className="action-btn wishlist-icon-btn" title="View Wishlist">
            <FiHeart />
            {wishlistCount > 0 && <span className="action-badge">{wishlistCount}</span>}
          </Link>

          {/* Cart Link */}
          <Link to="/cart" className="action-btn cart-icon-btn" title="View Cart">
            <FiShoppingCart />
            {cartCount > 0 && <span className="action-badge">{cartCount}</span>}
          </Link>

          {/* Profile Link or Logout */}
          {token ? (
            <div className="profile-actions-wrapper">
              <Link to="/profile" className="action-btn profile-btn" title="View Profile">
                <FiUser />
              </Link>
              <button className="action-btn logout-btn" onClick={handleLogout} title="Logout">
                <FiLogOut />
              </button>
            </div>
          ) : (
            <Link to="/login" className="login-link-btn btn-gold">
              Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
