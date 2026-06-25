import React from 'react';
import './index.css';

export const PageLoader = () => {
  return (
    <div className="page-loader-container">
      <div className="mandala-spinner">
        <svg viewBox="0 0 100 100" className="mandala-svg">
          <circle cx="50" cy="50" r="45" stroke="#C9A227" strokeWidth="2" fill="none" strokeDasharray="10 5" />
          <circle cx="50" cy="50" r="35" stroke="#7A1F3D" strokeWidth="3" fill="none" strokeDasharray="40 10" />
          <circle cx="50" cy="50" r="25" stroke="#C9A227" strokeWidth="1.5" fill="none" strokeDasharray="5 5" />
          <circle cx="50" cy="50" r="10" stroke="#7A1F3D" strokeWidth="4" fill="none" />
        </svg>
      </div>
      <p className="loader-text">A1 Emporium</p>
      <p className="loader-sub">Where Tradition Meets Elegance</p>
    </div>
  );
};

export const SkeletonCard = () => {
  return (
    <div className="skeleton-card">
      <div className="skeleton skeleton-image"></div>
      <div className="skeleton-details">
        <div className="skeleton skeleton-title"></div>
        <div className="skeleton skeleton-meta"></div>
        <div className="skeleton skeleton-price"></div>
      </div>
    </div>
  );
};

export const SkeletonGrid = ({ count = 4 }) => {
  return (
    <div className="skeleton-grid">
      {Array.from({ length: count }).map((_, idx) => (
        <SkeletonCard key={idx} />
      ))}
    </div>
  );
};

const Loader = () => <PageLoader />;

export default Loader;
