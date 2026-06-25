import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import ProductCard from '../ProductCard';
import CartContext from '../../context/CartContext';
import './index.css';

const ProductGrid = ({ products, viewMode = 'grid', onQuickView, onResetFilters }) => {
  const navigate = useNavigate();
  const { addToCart } = useContext(CartContext);

  if (products.length === 0) {
    return (
      <div className="empty-grid-state">
        <svg className="empty-grid-illustration" viewBox="0 0 100 100" width="120" height="120" style={{ marginBottom: '24px' }}>
          <circle cx="50" cy="50" r="40" fill="none" stroke="var(--secondary-gold)" strokeWidth="2" strokeDasharray="5,5" />
          <circle cx="50" cy="50" r="30" fill="none" stroke="var(--primary-maroon)" strokeWidth="1" opacity="0.5" />
          <path d="M35 50 L65 50 M50 35 L50 65" stroke="var(--primary-maroon)" strokeWidth="2.5" strokeLinecap="round" opacity="0.8" />
          <circle cx="50" cy="50" r="4" fill="var(--secondary-gold)" />
        </svg>
        <h3>No Products Found</h3>
        <p className="empty-desc-text">Try changing your filters.</p>
        {onResetFilters && (
          <button className="btn-gold reset-btn-empty" onClick={onResetFilters} style={{ marginTop: '16px' }}>
            Reset Filters
          </button>
        )}
      </div>
    );
  }

  const handleListCardClick = (id) => {
    navigate(`/products/${id}`);
  };

  return (
    <div className={`product-grid-container ${viewMode}-view`}>
      {products.map((product) => (
        <div key={product.id} className="grid-item-wrapper">
          {viewMode === 'grid' ? (
            <ProductCard product={product} onQuickView={onQuickView} />
          ) : (
            /* Premium List Item Layout */
            <div className="product-list-card" onClick={() => handleListCardClick(product.id)}>
              <div className="list-image-container">
                <img src={product.images[0]} alt={product.name} className="list-product-image" loading="lazy" />
                {product.stockStatus === 'Out of Stock' && <span className="list-out-badge">Sold Out</span>}
              </div>
              <div className="list-details-container">
                <div className="list-header-row">
                  <span className="list-product-category">{product.category}</span>
                  <span className="list-rating-badge">★ {product.rating}</span>
                </div>
                <h3 className="list-product-title">{product.name}</h3>
                <p className="list-product-desc">{product.description}</p>
                
                <div className="list-price-row">
                  <span className="list-price-current">₹{product.price.toLocaleString('en-IN')}</span>
                  {product.originalPrice && (
                    <span className="list-price-original">₹{product.originalPrice.toLocaleString('en-IN')}</span>
                  )}
                  {product.originalPrice && (
                    <span className="list-discount-tag">({Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF)</span>
                  )}
                </div>

                <div className="list-actions-row" onClick={(e) => e.stopPropagation()}>
                  <button 
                    className="btn-gold" 
                    onClick={() => navigate(`/products/${product.id}`)}
                  >
                    View Details
                  </button>
                  <button 
                    className="btn-outline" 
                    onClick={() => addToCart(product)}
                    disabled={product.stockStatus === 'Out of Stock'}
                  >
                    Add To Cart
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ProductGrid;
