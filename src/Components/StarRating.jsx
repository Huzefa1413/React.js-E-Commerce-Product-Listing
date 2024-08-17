// StarRating.js
import React from 'react';
import { FaStar } from 'react-icons/fa';

const StarRating = ({ value }) => {
  const fullStars = Math.floor(value);
  const hasHalfStar = value % 1 >= 0.5;
  const totalStars = 5;

  return (
    <div className="star-rating">
      {Array.from({ length: totalStars }, (_, index) => {
        const starIndex = index + 1;
        if (starIndex <= fullStars) {
          return <FaStar key={starIndex} className="star full" />;
        }
        if (starIndex === fullStars + 1 && hasHalfStar) {
          return <FaStar key={starIndex} className="star half" />;
        }
        return <FaStar key={starIndex} className="star empty" />;
      })}
    </div>
  );
};

export default StarRating;
