import React from 'react';

const PriceRangeFilter = ({ priceRange, setPriceRange }) => {
  return (
    <div className="price-range-container">
      <div className="range-container">
        <input
          type="range"
          min="0"
          max="1000"
          value={priceRange[0]}
          onChange={(e) =>
            setPriceRange([parseInt(e.target.value), priceRange[1]])
          }
          className="range-input"
        />
        <input
          type="range"
          min="0"
          max="1000"
          value={priceRange[1]}
          onChange={(e) =>
            setPriceRange([priceRange[0], parseInt(e.target.value)])
          }
          className="range-input"
        />
      </div>
      <div className="price-range-label">
        <p>Min</p>
        <p>Max</p>
      </div>
      <div className="price-range-label">
        <p>${priceRange[0]}</p>
        <p>${priceRange[1]}</p>
      </div>
    </div>
  );
};

export default PriceRangeFilter;
