import React from 'react';

const PriceRangeFilter = ({ priceRange, setPriceRange }) => {
  return (
    <div>
      <label>
        Price Range: ${priceRange[0]} - ${priceRange[1]}
      </label>
      <input
        type="range"
        min="0"
        max="1000"
        value={priceRange[0]}
        onChange={(e) =>
          setPriceRange([parseInt(e.target.value), priceRange[1]])
        }
      />
      <input
        type="range"
        min="0"
        max="1000"
        value={priceRange[1]}
        onChange={(e) =>
          setPriceRange([priceRange[0], parseInt(e.target.value)])
        }
      />
    </div>
  );
};

export default PriceRangeFilter;
