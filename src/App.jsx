import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import ProtectedRoute from './components/ProtectedRoute';
import Loader from './components/Loader';
import './App.css';

// Lazy loading the boutique pages for optimal bundle splitting
const Login = lazy(() => import('./pages/Login'));
const Home = lazy(() => import('./pages/Home'));
const Products = lazy(() => import('./pages/Products'));
const ProductDetails = lazy(() => import('./pages/ProductDetails'));
const Cart = lazy(() => import('./pages/Cart'));
const Checkout = lazy(() => import('./pages/Checkout'));
const Orders = lazy(() => import('./pages/Orders'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const Profile = lazy(() => import('./pages/Profile'));
const Compare = lazy(() => import('./pages/Compare'));
const FAQs = lazy(() => import('./pages/FAQs'));

const App = () => (
  <BrowserRouter>
    <CartProvider>
      <Suspense fallback={<Loader />}>
        <Routes>
          {/* Public login flow */}
          <Route path="/login" element={<Login />} />
          
          {/* Protected boutique catalog flow */}
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route
            path="/products"
            element={
              <ProtectedRoute>
                <Products />
              </ProtectedRoute>
            }
          />
          
          {/* Product details routing, supports standard and legacy routes */}
          <Route
            path="/products/:productId"
            element={
              <ProtectedRoute>
                <ProductDetails />
              </ProtectedRoute>
            }
          />
          <Route
            path="/restaurants/:restrauntId"
            element={
              <ProtectedRoute>
                <ProductDetails />
              </ProtectedRoute>
            }
          />

          <Route
            path="/cart"
            element={
              <ProtectedRoute>
                <Cart />
              </ProtectedRoute>
            }
          />
          <Route
            path="/checkout"
            element={
              <ProtectedRoute>
                <Checkout />
              </ProtectedRoute>
            }
          />
          <Route
            path="/payment-success"
            element={
              <ProtectedRoute>
                <Orders />
              </ProtectedRoute>
            }
          />
          <Route
            path="/about"
            element={
              <ProtectedRoute>
                <About />
              </ProtectedRoute>
            }
          />
          <Route
            path="/contact"
            element={
              <ProtectedRoute>
                <Contact />
              </ProtectedRoute>
            }
          />
          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
          />
          <Route
            path="/compare"
            element={
              <ProtectedRoute>
                <Compare />
              </ProtectedRoute>
            }
          />
          <Route
            path="/faqs"
            element={
              <ProtectedRoute>
                <FAQs />
              </ProtectedRoute>
            }
          />
          <Route
            path="/best-sellers"
            element={
              <ProtectedRoute>
                <Navigate to="/products?bestseller=true" replace />
              </ProtectedRoute>
            }
          />
          <Route
            path="/new-arrivals"
            element={
              <ProtectedRoute>
                <Navigate to="/products?newarrivals=true" replace />
              </ProtectedRoute>
            }
          />

          {/* Catch-all redirect to Home */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Suspense>
    </CartProvider>
  </BrowserRouter>
);

export default App;