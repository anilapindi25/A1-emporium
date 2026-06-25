import React from 'react';
import { FaStar } from 'react-icons/fa';
import './index.css';

const FilterSidebar = ({
  filters,
  onFilterChange,
  onResetFilters
}) => {
  const categoriesList = [
    'Sarees',
    'Kurtis',
    'Dresses',
    'Tops',
    'Jeans',
    'Handbags',
    'Jewellery',
    'Beauty',
    'Cosmetics',
    'Footwear',
    'Accessories'
  ];

  const brandsList = [
    'A1 Signature',
    'TrendAura',
    'Velvet Vogue',
    'Urban Diva',
    'Grace Studio',
    'Bella Femme',
    'Chic Avenue',
    'Royal Threads'
  ];

  const colorsList = [
    { name: 'Crimson Red', hex: '#7A1F3D' },
    { name: 'Royal Gold', hex: '#C9A227' },
    { name: 'Soft Cream', hex: '#FFF8F2' },
    { name: 'Blush Pink', hex: '#FFD1DC' },
    { name: 'Peach', hex: '#FFD3B6' },
    { name: 'Mint Green', hex: '#E8F5E9' },
    { name: 'Soft Sand', hex: '#F5ECE3' },
    { name: 'Rose Gold', hex: '#B26F6F' }
  ];

  const handleCategoryToggle = (category) => {
    const updatedCategories = filters.categories.includes(category)
      ? filters.categories.filter(c => c !== category)
      : [...filters.categories, category];
    
    onFilterChange({ ...filters, categories: updatedCategories });
  };

  const handleBrandToggle = (brand) => {
    const updatedBrands = filters.brands ? (
      filters.brands.includes(brand)
        ? filters.brands.filter(b => b !== brand)
        : [...filters.brands, brand]
    ) : [brand];
    
    onFilterChange({ ...filters, brands: updatedBrands });
  };

  const handleColorToggle = (colorHex) => {
    const currentColors = filters.colors || [];
    const updatedColors = currentColors.includes(colorHex)
      ? currentColors.filter(c => c !== colorHex)
      : [...currentColors, colorHex];
    
    onFilterChange({ ...filters, colors: updatedColors });
  };

  const handlePriceChange = (e) => {
    onFilterChange({ ...filters, maxPrice: parseInt(e.target.value) });
  };

  const handleRatingChange = (rating) => {
    onFilterChange({ ...filters, minRating: rating });
  };

  const handleStockToggle = () => {
    onFilterChange({ ...filters, inStockOnly: !filters.inStockOnly });
  };

  const handleSortChange = (e) => {
    onFilterChange({ ...filters, sortBy: e.target.value });
  };

  return (
    <div className="filter-sidebar glassmorphism">
      <div className="filter-section-header">
        <h3>Filters & Sorting</h3>
        <button className="reset-filters-btn" onClick={onResetFilters}>Reset All</button>
      </div>

      {/* Sorting */}
      <div className="filter-group">
        <label className="filter-label" htmlFor="sort-by">Sort By</label>
        <select 
          id="sort-by"
          className="filter-select" 
          value={filters.sortBy} 
          onChange={handleSortChange}
        >
          <option value="popularity">Popularity (Rating)</option>
          <option value="price-low-high">Price: Low to High</option>
          <option value="price-high-low">Price: High to Low</option>
          <option value="newest">Newest Arrivals</option>
        </select>
      </div>

      {/* Categories */}
      <div className="filter-group">
        <span className="filter-label">Categories</span>
        <div className="category-checkboxes scrollable-checkboxes">
          {categoriesList.map(category => {
            const isChecked = filters.categories.includes(category);
            return (
              <label key={category} className="checkbox-container">
                <input
                  type="checkbox"
                  checked={isChecked}
                  onChange={() => handleCategoryToggle(category)}
                />
                <span className="checkmark"></span>
                <span className="checkbox-text">{category}</span>
              </label>
            );
          })}
        </div>
      </div>

      {/* Brands */}
      <div className="filter-group">
        <span className="filter-label">Fashion Brands</span>
        <div className="category-checkboxes scrollable-checkboxes">
          {brandsList.map(brand => {
            const isChecked = filters.brands ? filters.brands.includes(brand) : false;
            return (
              <label key={brand} className="checkbox-container">
                <input
                  type="checkbox"
                  checked={isChecked}
                  onChange={() => handleBrandToggle(brand)}
                />
                <span className="checkmark"></span>
                <span className="checkbox-text">{brand}</span>
              </label>
            );
          })}
        </div>
      </div>

      {/* Colors Swatches */}
      <div className="filter-group">
        <span className="filter-label">Colors</span>
        <div className="color-swatches-filter-row">
          {colorsList.map(colorObj => {
            const isSelected = filters.colors ? filters.colors.includes(colorObj.hex) : false;
            return (
              <button
                key={colorObj.hex}
                type="button"
                className={`color-swatch-filter-btn ${isSelected ? 'active' : ''}`}
                style={{ backgroundColor: colorObj.hex }}
                onClick={() => handleColorToggle(colorObj.hex)}
                title={colorObj.name}
                aria-label={`Color ${colorObj.name}`}
              >
                {isSelected && <span className="color-filter-check">✓</span>}
              </button>
            );
          })}
        </div>
      </div>

      {/* Price Range Slider */}
      <div className="filter-group">
        <div className="price-label-row">
          <span className="filter-label">Max Price</span>
          <span className="price-value">₹{filters.maxPrice.toLocaleString('en-IN')}</span>
        </div>
        <input
          type="range"
          min="1000"
          max="50000"
          step="1000"
          value={filters.maxPrice}
          onChange={handlePriceChange}
          className="price-slider"
        />
        <div className="slider-limits">
          <span>₹1,000</span>
          <span>₹50,000+</span>
        </div>
      </div>

      {/* Ratings */}
      <div className="filter-group">
        <span className="filter-label">Minimum Rating</span>
        <div className="rating-selector-buttons">
          {[4, 4.5, 4.8].map(rating => (
            <button
              key={rating}
              type="button"
              className={`rating-btn ${filters.minRating === rating ? 'active' : ''}`}
              onClick={() => handleRatingChange(rating)}
            >
              <span>{rating}</span>
              <FaStar className="star-icon" />
              <span>& Up</span>
            </button>
          ))}
        </div>
      </div>

      {/* Availability */}
      <div className="filter-group">
        <label className="checkbox-container">
          <input
            type="checkbox"
            checked={filters.inStockOnly}
            onChange={handleStockToggle}
          />
          <span className="checkmark"></span>
          <span className="checkbox-text font-semibold">In Stock Only</span>
        </label>
      </div>
    </div>
  );
};

export default FilterSidebar;
