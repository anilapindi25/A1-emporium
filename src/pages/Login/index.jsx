import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import { motion } from 'framer-motion';
import { FaGoogle, FaEye } from 'react-icons/fa';
import CartContext from '../../context/CartContext';
import './index.css';

const Login = () => {
  const { loginUser } = useContext(CartContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [loading, setLoading] = useState(false);
  
  const navigate = useNavigate();

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg('');

    // Predefined guest credentials + Fallback mock authentication
    // Accepts CCBP mock credentials (rahul/rahul@2021) or any standard email format
    const trimmedEmail = email.trim();
    const trimmedPassword = password.trim();

    try {
      if (!trimmedEmail || !trimmedPassword) {
        throw new Error('Please enter both email/username and password');
      }

      // Check for CCBP API auth or default mock credentials
      // Standard mock credentials: guest@a1emporium.com / guest123
      // We will also accept 'rahul' and 'rahul@2021' for backward compatibility
      let token = 'mock_jwt_token_a1_emporium';
      
      if (trimmedEmail === 'rahul' && trimmedPassword === 'rahul@2021') {
        // Fetch CCBP API to stay consistent with original restaurant api if needed
        const userDetails = { username: trimmedEmail, password: trimmedPassword };
        const options = {
          method: 'POST',
          body: JSON.stringify(userDetails),
        };
        const response = await fetch('https://apis.ccbp.in/login', options);
        const data = await response.json();
        if (response.ok) {
          token = data.jwt_token;
        } else {
          throw new Error(data.error_msg || 'Failed to authenticate');
        }
      } else if (trimmedEmail.includes('@') && trimmedPassword.length >= 5) {
        // Accept any standard email login for premium feel
        token = `mock_token_${btoa(trimmedEmail)}`;
      } else {
        // Fallback info
        throw new Error('Invalid credentials. Use guest@a1emporium.com / guest123 or rahul / rahul@2021.');
      }

      // Success
      Cookies.set('jwt_token', token, { expires: rememberMe ? 30 : 1 });

      // Determine name from email or username
      let name = 'Guest User';
      let userEmailVal = trimmedEmail;
      if (trimmedEmail === 'rahul') {
        name = 'Rahul';
        userEmailVal = 'rahul@a1emporium.com';
      } else if (trimmedEmail.includes('@')) {
        const localPart = trimmedEmail.split('@')[0];
        name = localPart
          .split(/[._-]/)
          .map(part => part.charAt(0).toUpperCase() + part.slice(1))
          .join(' ');
      } else {
        name = trimmedEmail.charAt(0).toUpperCase() + trimmedEmail.slice(1);
        userEmailVal = `${trimmedEmail}@a1emporium.com`;
      }

      loginUser(userEmailVal, name);
      navigate('/', { replace: true });
    } catch (err) {
      setErrorMsg(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = () => {
    setLoading(true);
    setTimeout(() => {
      Cookies.set('jwt_token', 'google_mock_token_12345', { expires: 1 });
      loginUser('googleuser@gmail.com', 'Google User');
      setLoading(false);
      navigate('/', { replace: true });
    }, 1200);
  };

  return (
    <div className="login-page-container">
      {/* Blurred background image layer */}
      <div className="login-bg-overlay-image"></div>
      <div className="login-bg-darken"></div>

      <div className="login-content container">
        <motion.div 
          className="login-card-wrapper glassmorphism"
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Logo Head */}
          <div className="login-card-header">
            <span className="login-logo-icon">A1</span>
            <h1 className="login-brand-title">A1 Emporium</h1>
            <p className="login-brand-subtitle">Where Tradition Meets Elegance</p>
          </div>

          {/* Form */}
          <form className="login-form-element" onSubmit={handleLoginSubmit}>
            {/* Email / Username field */}
            <div className="login-input-group">
              <label htmlFor="email-input" className="login-field-label">Email or Username</label>
              <div className="input-with-icon-wrapper">
                <input
                  type="text"
                  id="email-input"
                  placeholder="Enter guest@a1emporium.com"
                  className="login-field-input"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>

            {/* Password field */}
            <div className="login-input-group">
              <label htmlFor="password-input" className="login-field-label">Password</label>
              <div className="input-with-icon-wrapper">
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="password-input"
                  placeholder="Enter guest123"
                  className="login-field-input"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button 
                  type="button" 
                  className="password-toggle-btn"
                  onClick={() => setShowPassword(!showPassword)}
                  aria-label="Toggle Password Visibility"
                >
                  <FaEye />
                </button>
              </div>
            </div>

            {/* Extra Options */}
            <div className="login-extra-options-row">
              <label className="checkbox-container">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={() => setRememberMe(!rememberMe)}
                />
                <span className="checkmark"></span>
                <span className="checkbox-text size-sm text-dark">Remember Me</span>
              </label>
              <a href="#forgot" className="forgot-password-link" onClick={(e) => { e.preventDefault(); alert("Mock password reset sent to email!"); }}>
                Forgot Password?
              </a>
            </div>

            {/* Error Message */}
            {errorMsg && <p className="login-error-message">*{errorMsg}</p>}

            {/* Login Action Button */}
            <button type="submit" className="btn-gold login-submit-btn" disabled={loading}>
              {loading ? 'Verifying...' : 'Login'}
            </button>
          </form>

          {/* Separator */}
          <div className="login-divider-row">
            <span className="divider-line"></span>
            <span className="divider-text">OR</span>
            <span className="divider-line"></span>
          </div>

          {/* Social Sign In */}
          <button type="button" className="google-sign-in-btn" onClick={handleGoogleLogin} disabled={loading}>
            <FaGoogle className="google-icon" />
            <span>Continue with Google</span>
          </button>

          {/* Sign Up Link */}
          <div className="login-signup-prompt">
            <span>New to A1 Emporium?</span>
            <a href="#signup" className="create-account-link" onClick={(e) => { e.preventDefault(); alert("Create Account feature: Please use any mock email & password (length >= 5) to log in directly!"); }}>
              Create Account
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Login;
