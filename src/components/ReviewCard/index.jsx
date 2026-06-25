import React from 'react';
import { FaStar } from 'react-icons/fa';
import './index.css';

const ReviewCard = ({ review }) => {
  const { name, location, rating, avatar, text } = review;

  return (
    <div className="review-card glassmorphism">
      <div className="review-card-top">
        {/* Customer Avatar */}
        <div className="review-avatar-wrapper">
          <img src={avatar} alt={name} className="review-avatar" />
        </div>
        
        {/* Customer Info */}
        <div className="review-customer-info">
          <h4 className="review-customer-name">{name}</h4>
          <span className="review-customer-location">{location}</span>
        </div>
      </div>

      {/* Review Content */}
      <div className="review-content-body">
        {/* Star Rating */}
        <div className="review-stars-row">
          {Array.from({ length: rating }).map((_, idx) => (
            <FaStar key={idx} className="gold-star-icon" />
          ))}
        </div>
        
        {/* Review Text */}
        <p className="review-text-content">"{text}"</p>
      </div>

      {/* Elegant Floral Decal */}
      <div className="review-decal">❀</div>
    </div>
  );
};

export default ReviewCard;
