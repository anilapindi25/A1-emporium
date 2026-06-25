import React, { useContext, useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiHeart, FiShoppingCart, FiArrowLeft, FiChevronRight, FiCheck } from 'react-icons/fi';
import { FaStar } from 'react-icons/fa';

import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import ProductCard from '../../components/ProductCard';
import Loader from '../../components/Loader';
import CartContext from '../../context/CartContext';

import { products } from '../../data/sarees';
import './index.css';

const ProductDetails = () => {
  // Support both restrauntId (from original restaurant route) and standard productId
  const { productId, restrauntId } = useParams();
  const idToFind = productId || restrauntId;
  
  const navigate = useNavigate();
  const { 
    addToCart, 
    toggleWishlist, 
    isInWishlist, 
    recentlyViewed, 
    addToRecentlyViewed 
  } = useContext(CartContext);

  const [product, setProduct] = useState(null);
  const [activeImageIdx, setActiveImageIdx] = useState(0);
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('description'); // 'description' | 'specifications'
  
  useEffect(() => {
    // Find the product matching the route parameter
    const foundProduct = products.find(p => p.id === idToFind);
    if (foundProduct) {
      setProduct(foundProduct);
      setActiveImageIdx(0);
      setQuantity(1);
      // Pre-select first size and color
      if (foundProduct.sizes && foundProduct.sizes.length > 0) {
        setSelectedSize(foundProduct.sizes[0]);
      }
      if (foundProduct.colors && foundProduct.colors.length > 0) {
        setSelectedColor(foundProduct.colors[0]);
      }
      addToRecentlyViewed(foundProduct);
    } else {
      setProduct(null);
    }
  }, [idToFind]);

  if (!product) {
    return (
      <div className="product-details-loading-screen">
        <Navbar />
        <div className="container details-not-found-card text-center">
          <h2>Product Not Found</h2>
          <p>We couldn't find the traditional outfit you are looking for.</p>
          <Link to="/products" className="btn-gold mt-4">Go to Collections</Link>
        </div>
        <Footer />
      </div>
    );
  }

  const { name, price, originalPrice, rating, reviewsCount, images, stockStatus, category, description, specifications } = product;
  const isWishlisted = isInWishlist(product.id);
  const discount = originalPrice ? Math.round(((originalPrice - price) / originalPrice) * 100) : 0;

  // Filter 4 related products from the same category (excluding current)
  const relatedProducts = products
    .filter(p => p.category === category && p.id !== product.id)
    .slice(0, 4);

  const handleQuantityChange = (val) => {
    const newVal = quantity + val;
    if (newVal >= 1) setQuantity(newVal);
  };

  const handleAddToCartClick = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(product, selectedSize, selectedColor);
    }
    alert(`${quantity} unit(s) of ${name} added to cart!`);
  };

  const handleBuyNowClick = () => {
    addToCart(product, selectedSize, selectedColor);
    navigate('/cart');
  };

  return (
    <div className="product-details-page-container">
      <Navbar />

      {/* Breadcrumb nav */}
      <div className="details-breadcrumb-container container">
        <button className="back-nav-link-btn" onClick={() => navigate(-1)}>
          <FiArrowLeft /> Back
        </button>
        <span className="breadcrumb-separator"><FiChevronRight /></span>
        <Link to="/products" className="breadcrumb-link">Collections</Link>
        <span className="breadcrumb-separator"><FiChevronRight /></span>
        <span className="breadcrumb-active-item">{name}</span>
      </div>

      {/* Main Details Body */}
      <div className="details-body container">
        <div className="details-grid-wrapper">
          
          {/* Images Gallery Column */}
          <div className="details-images-column">
            {/* Main Viewer Card */}
            <div className="details-main-image-viewer">
              <img 
                src={images[activeImageIdx]} 
                alt={name} 
                className="main-view-img"
              />
              {discount > 0 && <span className="view-discount-badge">{discount}% OFF</span>}
            </div>

            {/* Thumbnail Carousel Row */}
            {images.length > 1 && (
              <div className="details-thumbnails-row">
                {images.map((img, idx) => (
                  <button
                    key={idx}
                    className={`thumbnail-btn ${activeImageIdx === idx ? 'active' : ''}`}
                    onClick={() => setActiveImageIdx(idx)}
                  >
                    <img src={img} alt={`${name} thumb ${idx}`} className="thumb-img" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Info Details Column */}
          <div className="details-info-column">
            <span className="details-category">{category}</span>
            <h1 className="details-title">{name}</h1>

            {/* Star Rating Row */}
            <div className="details-rating-row">
              <div className="stars-box">
                <FaStar className="star-active" />
                <span className="rating-value">{rating.toFixed(1)}</span>
              </div>
              <span className="reviews-count">({reviewsCount} customer reviews)</span>
            </div>

            {/* Price section */}
            <div className="details-price-row">
              <span className="details-price-current">₹{price.toLocaleString('en-IN')}</span>
              {originalPrice && (
                <span className="details-price-original">₹{originalPrice.toLocaleString('en-IN')}</span>
              )}
              {stockStatus === 'In Stock' ? (
                <span className="details-stock-status-badge in-stock">In Stock</span>
              ) : (
                <span className={`details-stock-status-badge ${stockStatus === 'Low Stock' ? 'low-stock' : 'out-of-stock'}`}>
                  {stockStatus}
                </span>
              )}
            </div>

            <div className="divider-beige"></div>

            {/* Colors selection */}
            {product.colors && product.colors.length > 0 && (
              <div className="selection-group">
                <span className="selection-label">Select Color</span>
                <div className="color-swatches-row">
                  {product.colors.map((colorObj, idx) => {
                    const isColorSelected = selectedColor?.hex === colorObj.hex;
                    return (
                      <button
                        key={idx}
                        className={`color-swatch-btn ${isColorSelected ? 'active' : ''}`}
                        style={{ backgroundColor: colorObj.hex }}
                        onClick={() => setSelectedColor(colorObj)}
                        title={colorObj.name}
                        aria-label={`Color ${colorObj.name}`}
                      >
                        {isColorSelected && <FiCheck className="color-check-icon" />}
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Sizes selection */}
            {product.sizes && product.sizes.length > 0 && (
              <div className="selection-group mt-6">
                <span className="selection-label">Select Size</span>
                <div className="size-buttons-row">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      className={`size-btn ${selectedSize === size ? 'active' : ''}`}
                      onClick={() => setSelectedSize(size)}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity Selector */}
            <div className="selection-group mt-6">
              <span className="selection-label">Quantity</span>
              <div className="quantity-details-adjuster">
                <button className="qty-btn" onClick={() => handleQuantityChange(-1)} disabled={quantity <= 1}>-</button>
                <span className="qty-num">{quantity}</span>
                <button className="qty-btn" onClick={() => handleQuantityChange(1)} disabled={stockStatus === 'Out of Stock'}>+</button>
              </div>
            </div>

            {/* Action Buttons Row */}
            <div className="details-actions-row">
              <button 
                className="btn-gold details-cart-btn" 
                onClick={handleAddToCartClick}
                disabled={stockStatus === 'Out of Stock'}
              >
                <FiShoppingCart /> Add to Cart
              </button>

              <button 
                className="btn-maroon details-buy-btn" 
                onClick={handleBuyNowClick}
                disabled={stockStatus === 'Out of Stock'}
              >
                Buy Now
              </button>

              <button 
                className={`details-wishlist-btn ${isWishlisted ? 'active' : ''}`} 
                onClick={() => toggleWishlist(product)}
                aria-label="Add to Wishlist"
              >
                <FiHeart />
              </button>
            </div>

            <div className="divider-beige mt-8"></div>

            {/* Description / Specifications tabs */}
            <div className="details-tabs-container">
              <div className="tabs-header-row">
                <button 
                  className={`tab-header-btn ${activeTab === 'description' ? 'active' : ''}`}
                  onClick={() => setActiveTab('description')}
                >
                  Description
                </button>
                <button 
                  className={`tab-header-btn ${activeTab === 'specifications' ? 'active' : ''}`}
                  onClick={() => setActiveTab('specifications')}
                >
                  Specifications
                </button>
              </div>

              <div className="tabs-content-body">
                {activeTab === 'description' ? (
                  <p className="tab-description-text">{description}</p>
                ) : (
                  <table className="specs-table">
                    <tbody>
                      {Object.entries(specifications).map(([key, value]) => (
                        <tr key={key}>
                          <td className="spec-name">{key}</td>
                          <td className="spec-value">{value}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                )}
              </div>
            </div>

          </div>
        </div>

        {/* Related Products Section */}
        {relatedProducts.length > 0 && (
          <section className="related-products-section mt-16">
            <div className="section-head text-center">
              <span className="section-sub">Similar Styles</span>
              <h2 className="section-title">Related Products</h2>
              <div className="divider-gold"></div>
            </div>
            <div className="related-grid mt-8">
              {relatedProducts.map(relProduct => (
                <ProductCard key={relProduct.id} product={relProduct} />
              ))}
            </div>
          </section>
        )}

        {/* Recently Viewed Section */}
        {recentlyViewed.filter(p => p.id !== product.id).length > 0 && (
          <section className="related-products-section mt-16">
            <div className="section-head text-center">
              <span className="section-sub">Your History</span>
              <h2 className="section-title">Recently Viewed</h2>
              <div className="divider-gold"></div>
            </div>
            <div className="related-grid mt-8">
              {recentlyViewed
                .filter(p => p.id !== product.id)
                .slice(0, 4)
                .map(recentProduct => (
                  <ProductCard key={recentProduct.id} product={recentProduct} />
                ))
              }
            </div>
          </section>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default ProductDetails;
