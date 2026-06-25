import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { FiGrid, FiList } from 'react-icons/fi';

import Navbar from '../../components/Navbar';
import FilterSidebar from '../../components/FilterSidebar';
import ProductGrid from '../../components/ProductGrid';
import Footer from '../../components/Footer';

import { products, categories } from '../../data/sarees';
import './index.css';

const Products = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Filter default states (expanded with brands and colors)
  const defaultFilters = {
    search: '',
    categories: [],
    brands: [],
    colors: [],
    maxPrice: 50000,
    minRating: 0,
    inStockOnly: false,
    sortBy: 'popularity'
  };

  const [filters, setFilters] = useState(defaultFilters);
  const [viewMode, setViewMode] = useState('grid');
  const [currentPage, setCurrentPage] = useState(1);
  const [showMobileFilters, setShowMobileFilters] = useState(false);
  const itemsPerPage = 8;

  // Update page title dynamically when category filter changes
  useEffect(() => {
    if (filters.categories.length === 1) {
      document.title = `${filters.categories[0]} - A1 Emporium`;
    } else {
      document.title = "Shop Catalog - A1 Emporium";
    }
  }, [filters.categories]);

  // Sync URL query params to state (search/category/collection/type)
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const urlSearch = params.get('search') || '';
    const urlCategory = params.get('category') || '';
    const urlCollection = params.get('collection') || '';
    const urlBestSeller = params.get('bestseller') || '';

    const newFilters = { ...defaultFilters };
    if (urlSearch) newFilters.search = urlSearch;
    if (urlCategory) newFilters.categories = [urlCategory];
    
    // Check custom collections
    if (urlCollection) {
      const matchedCategories = products
        .filter(p => p.collection && p.collection.toLowerCase() === urlCollection.toLowerCase())
        .map(p => p.category);
      newFilters.categories = Array.from(new Set(matchedCategories));
    }

    setFilters(newFilters);
    setCurrentPage(1); // Reset to page 1
  }, [location.search]);

  const handleFilterChange = (updatedFilters) => {
    setFilters(updatedFilters);
    
    // Preserve pagination if only sorting has changed
    const filtersChanged = 
      updatedFilters.search !== filters.search ||
      JSON.stringify(updatedFilters.categories) !== JSON.stringify(filters.categories) ||
      JSON.stringify(updatedFilters.brands) !== JSON.stringify(filters.brands) ||
      JSON.stringify(updatedFilters.colors) !== JSON.stringify(filters.colors) ||
      updatedFilters.maxPrice !== filters.maxPrice ||
      updatedFilters.minRating !== filters.minRating ||
      updatedFilters.inStockOnly !== filters.inStockOnly;
      
    if (filtersChanged) {
      setCurrentPage(1);
    }
  };

  const handleResetFilters = () => {
    setFilters(defaultFilters);
    setCurrentPage(1);
    navigate('/products', { replace: true });
  };

  const handleCategorySelect = (categoryName) => {
    const isAlreadySelected = filters.categories.includes(categoryName);
    const updatedCategories = isAlreadySelected ? [] : [categoryName];
    
    handleFilterChange({
      ...filters,
      categories: updatedCategories
    });

    const params = new URLSearchParams(location.search);
    if (updatedCategories.length > 0) {
      params.set('category', categoryName);
    } else {
      params.delete('category');
    }
    navigate(`/products?${params.toString()}`, { replace: true });

    // Smoothly scroll to the products grid section
    setTimeout(() => {
      const gridElement = document.getElementById('products-grid-catalog');
      if (gridElement) {
        gridElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 50);
  };

  // Perform Live Filtering
  const filteredProducts = products.filter(product => {
    // 1. Search Query
    if (filters.search) {
      const q = filters.search.toLowerCase();
      const matchName = product.name.toLowerCase().includes(q);
      const matchDesc = product.description.toLowerCase().includes(q);
      const matchCat = product.category.toLowerCase().includes(q);
      const matchBrand = product.brand.toLowerCase().includes(q);
      if (!matchName && !matchDesc && !matchCat && !matchBrand) return false;
    }

    // 2. Category Checkboxes
    if (filters.categories.length > 0) {
      const hasMatch = filters.categories.some(selectedCategory => {
        if (selectedCategory === 'Brass Collection') {
          return ['Brass Lamps', 'Brass Idols', 'Brass Pooja', 'Brass Home Decor'].includes(product.category);
        } else if (selectedCategory === 'Sarees') {
          return ['Wedding Sarees', 'Silk Sarees', 'Cotton Sarees', 'Handloom Sarees'].includes(product.category);
        } else {
          return product.category === selectedCategory;
        }
      });
      if (!hasMatch) return false;
    }

    // 3. Brand Checkboxes
    if (filters.brands.length > 0 && !filters.brands.includes(product.brand)) {
      return false;
    }

    // 4. Color Swatches
    if (filters.colors.length > 0) {
      const hasColorMatch = product.colors && product.colors.some(c => filters.colors.includes(c.hex));
      if (!hasColorMatch) return false;
    }

    // 5. Price Limit
    if (product.price > filters.maxPrice) {
      return false;
    }

    // 6. Rating Limit
    if (product.rating < filters.minRating) {
      return false;
    }

    // 7. Stock Availability
    if (filters.inStockOnly && product.stockStatus === 'Out of Stock') {
      return false;
    }

    // 8. Custom query checks (e.g. if we are on bestseller pre-filter path)
    const params = new URLSearchParams(location.search);
    if (params.get('bestseller') === 'true' && !product.isBestSeller) {
      return false;
    }
    if (params.get('newarrivals') === 'true' && !product.id.includes('prod-00')) {
      // Mock new arrivals (first few items)
      if (product.id !== 'prod-001' && product.id !== 'prod-002' && product.id !== 'prod-003' && product.id !== 'prod-004') {
        return false;
      }
    }

    return true;
  });

  // Perform Sorting
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (filters.sortBy === 'price-low-high') {
      return a.price - b.price;
    }
    if (filters.sortBy === 'price-high-low') {
      return b.price - a.price;
    }
    if (filters.sortBy === 'newest') {
      return b.id.localeCompare(a.id);
    }
    // Default popularity: rating descending
    return b.rating - a.rating;
  });

  // Perform Pagination
  const totalItems = sortedProducts.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedProducts = sortedProducts.slice(startIndex, startIndex + itemsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 180, behavior: 'smooth' });
  };

  // Pre-filter Title
  const getBannerTitle = () => {
    const params = new URLSearchParams(location.search);
    if (params.get('bestseller') === 'true') return "Best Sellers";
    if (params.get('newarrivals') === 'true') return "New Arrivals";
    return "Brass & Sarees Heritage Catalog";
  };

  // Dynamic count label based on active category
  const getProductCountLabel = () => {
    if (filters.categories.length === 1) {
      const activeCat = filters.categories[0];
      return `Showing ${totalItems} ${activeCat}`;
    }
    return `Showing ${totalItems} Products`;
  };

  return (
    <div className="products-page-container">
      <Navbar />

      {/* Catalog Header */}
      <div className="products-hero-banner">
        <div className="banner-overlay-dark"></div>
        <div className="banner-text container">
          <span className="banner-sub">A1 Traditional Indian Emporium</span>
          <h1 className="banner-title">{getBannerTitle()}</h1>
          <p className="banner-desc">Explore luxury handloom silk sarees, brass stand lamps, sacred idols, and heritage pooja decor crafted for traditional grace.</p>
        </div>
      </div>

      {/* Main Grid Section */}
      <div className="products-body container" id="products-catalog-section">
        
        {/* Horizontal Category Cards Bar */}
        <div className="horizontal-category-cards-bar">
          {categories.map((cat) => {
            const isActive = filters.categories.includes(cat.name);
            return (
              <div 
                key={cat.id} 
                className={`horizontal-category-card ${isActive ? 'active' : ''}`}
                onClick={() => handleCategorySelect(cat.name)}
              >
                <div className="category-card-img-wrapper">
                  <img src={cat.image} alt={cat.name} className="cat-card-img" />
                </div>
                <span className="cat-card-text">{cat.name}</span>
                {isActive && <div className="active-underline-indicator"></div>}
              </div>
            );
          })}
        </div>

        <div className="products-layout-wrapper">
          {/* Dim background overlay for mobile bottom sheet */}
          {showMobileFilters && (
            <div className="sidebar-overlay-dim" onClick={() => setShowMobileFilters(false)}></div>
          )}

          {/* Sidebar Filters - transformed into bottom-sheet on mobile */}
          <aside className={`products-sidebar-area ${showMobileFilters ? 'mobile-show' : ''}`}>
            <div className="mobile-sidebar-header">
              <h4>Filter Products</h4>
              <button className="close-sidebar-btn" onClick={() => setShowMobileFilters(false)}>✕</button>
            </div>
            <FilterSidebar
              filters={filters}
              onFilterChange={handleFilterChange}
              onResetFilters={() => {
                handleResetFilters();
                setShowMobileFilters(false);
              }}
            />
          </aside>

          {/* Results Area */}
          <main className="products-results-area">
            {/* Toolbar */}
            <div className="results-toolbar-row glassmorphism" id="products-grid-catalog">
              <div className="results-count-col">
                {getProductCountLabel()}
                {filters.search && <span className="search-term-badge">for "{filters.search}"</span>}
              </div>
              
              <div className="results-actions-col">
                <button 
                  type="button" 
                  className="mobile-filter-trigger-btn"
                  onClick={() => setShowMobileFilters(true)}
                >
                  Filters
                </button>
                <div className="view-toggles-wrapper">
                  <button 
                    className={`view-toggle-btn ${viewMode === 'grid' ? 'active' : ''}`}
                    onClick={() => setViewMode('grid')}
                    title="Grid View"
                  >
                    <FiGrid />
                  </button>
                  <button 
                    className={`view-toggle-btn ${viewMode === 'list' ? 'active' : ''}`}
                    onClick={() => setViewMode('list')}
                    title="List View"
                  >
                    <FiList />
                  </button>
                </div>
              </div>
            </div>

            {/* Product Cards */}
            <div className="products-grid-wrapper">
              <ProductGrid 
                products={paginatedProducts} 
                viewMode={viewMode}
                onResetFilters={handleResetFilters}
              />
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="pagination-row">
                <button
                  className="page-nav-btn"
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                >
                  Prev
                </button>
                
                {Array.from({ length: totalPages }).map((_, idx) => {
                  const pNum = idx + 1;
                  return (
                    <button
                      key={pNum}
                      className={`page-number-btn ${currentPage === pNum ? 'active' : ''}`}
                      onClick={() => handlePageChange(pNum)}
                    >
                      {pNum}
                    </button>
                  );
                })}

                <button
                  className="page-nav-btn"
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                >
                  Next
                </button>
              </div>
            )}
          </main>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Products;
