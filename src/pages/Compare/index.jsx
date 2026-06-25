import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FiTrash2, FiLayers, FiShoppingCart, FiChevronRight, FiArrowLeft } from 'react-icons/fi';
import { FaStar } from 'react-icons/fa';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import CartContext from '../../context/CartContext';
import './index.css';

const Compare = () => {
  const { compareList, removeFromCompare, clearCompare, addToCart } = useContext(CartContext);
  const navigate = useNavigate();

  const handleRemove = (id) => {
    removeFromCompare(id);
  };

  const handleClear = () => {
    if (window.confirm('Clear comparison list?')) {
      clearCompare();
    }
  };

  const handleAddToCart = (product) => {
    addToCart(product);
    alert(`${product.name} added to cart!`);
  };

  // Compile a list of all unique specification keys across selected compared items
  const specKeys = Array.from(
    new Set(
      compareList.flatMap(product => 
        product.specifications ? Object.keys(product.specifications) : []
      )
    )
  );

  return (
    <div className="compare-page-container">
      <Navbar />

      <div className="compare-body container">
        <div className="compare-header-row">
          <div>
            <Link to="/products" className="back-link"><FiArrowLeft /> Back to Catalog</Link>
            <h1 className="compare-title">Product Comparison</h1>
            <div className="divider-gold"></div>
          </div>
          {compareList.length > 0 && (
            <button className="clear-compare-btn" onClick={handleClear}>
              <FiTrash2 /> Clear All
            </button>
          )}
        </div>

        {compareList.length === 0 ? (
          /* Empty Compare State */
          <div className="empty-compare-card text-center glassmorphism">
            <div className="empty-compare-icon-wrapper">
              <FiLayers />
            </div>
            <h2>No Products Selected for Comparison</h2>
            <p>Go to our catalogs and check 'Add to Compare' on up to 3 products to compare their prices, fabrics, and ratings side-by-side.</p>
            <Link to="/products" className="btn-gold mt-6">Browse Collections</Link>
          </div>
        ) : (
          /* Filled Compare State Table */
          <div className="compare-table-wrapper glassmorphism">
            <table className="compare-table">
              <thead>
                <tr>
                  <th className="feature-col-header">Products</th>
                  {compareList.map(product => (
                    <th key={product.id} className="product-col-header">
                      <div className="compare-product-column-head">
                        <button className="remove-col-btn" onClick={() => handleRemove(product.id)} title="Remove Product">✕</button>
                        <div className="compare-image-box">
                          <img src={product.images[0]} alt={product.name} />
                        </div>
                        <span className="compare-brand-name">{product.brand}</span>
                        <h4 className="compare-product-name">{product.name}</h4>
                      </div>
                    </th>
                  ))}
                  {/* Fill empty columns if compared count < 3 */}
                  {compareList.length < 3 && 
                    Array.from({ length: 3 - compareList.length }).map((_, idx) => (
                      <th key={`empty-${idx}`} className="product-col-header empty-col">
                        <div className="compare-empty-col-box">
                          <span>Add product</span>
                          <Link to="/products" className="btn-outline add-more-compare-btn">+</Link>
                        </div>
                      </th>
                    ))
                  }
                </tr>
              </thead>
              
              <tbody>
                {/* Row 1: Price */}
                <tr className="compare-row">
                  <td className="spec-label-col">Price</td>
                  {compareList.map(product => (
                    <td key={product.id} className="spec-value-col price-cell">
                      <span>₹{product.price.toLocaleString('en-IN')}</span>
                      {product.originalPrice && (
                        <span className="unit-original-price">₹{product.originalPrice.toLocaleString('en-IN')}</span>
                      )}
                    </td>
                  ))}
                  {compareList.length < 3 && 
                    Array.from({ length: 3 - compareList.length }).map((_, idx) => <td key={`empty-p-${idx}`} className="empty-cell"></td>)
                  }
                </tr>

                {/* Row 2: Rating */}
                <tr className="compare-row">
                  <td className="spec-label-col">Rating</td>
                  {compareList.map(product => (
                    <td key={product.id} className="spec-value-col">
                      <div className="compare-stars-wrapper">
                        <FaStar className="gold-star" />
                        <span>{product.rating} / 5</span>
                        <span className="count-txt">({product.reviewsCount} reviews)</span>
                      </div>
                    </td>
                  ))}
                  {compareList.length < 3 && 
                    Array.from({ length: 3 - compareList.length }).map((_, idx) => <td key={`empty-r-${idx}`} className="empty-cell"></td>)
                  }
                </tr>

                {/* Row 3: Category */}
                <tr className="compare-row">
                  <td className="spec-label-col">Category</td>
                  {compareList.map(product => (
                    <td key={product.id} className="spec-value-col font-medium">
                      {product.category}
                    </td>
                  ))}
                  {compareList.length < 3 && 
                    Array.from({ length: 3 - compareList.length }).map((_, idx) => <td key={`empty-c-${idx}`} className="empty-cell"></td>)
                  }
                </tr>

                {/* Dynamic Spec Rows */}
                {specKeys.map(specKey => (
                  <tr key={specKey} className="compare-row">
                    <td className="spec-label-col">{specKey}</td>
                    {compareList.map(product => (
                      <td key={product.id} className="spec-value-col">
                        {product.specifications && product.specifications[specKey] ? (
                          product.specifications[specKey]
                        ) : (
                          <span className="not-avail-dash">—</span>
                        )}
                      </td>
                    ))}
                    {compareList.length < 3 && 
                      Array.from({ length: 3 - compareList.length }).map((_, idx) => <td key={`empty-spec-${idx}`} className="empty-cell"></td>)
                    }
                  </tr>
                ))}

                {/* Actions row */}
                <tr className="compare-row compare-actions-row">
                  <td className="spec-label-col">Actions</td>
                  {compareList.map(product => (
                    <td key={product.id} className="spec-value-col">
                      <button 
                        className="btn-gold compare-buy-btn"
                        onClick={() => handleAddToCart(product)}
                        disabled={product.stockStatus === 'Out of Stock'}
                      >
                        <FiShoppingCart /> Add to Bag
                      </button>
                    </td>
                  ))}
                  {compareList.length < 3 && 
                    Array.from({ length: 3 - compareList.length }).map((_, idx) => <td key={`empty-a-${idx}`} className="empty-cell"></td>)
                  }
                </tr>
              </tbody>

            </table>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default Compare;
