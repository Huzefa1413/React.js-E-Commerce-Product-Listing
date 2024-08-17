import React from 'react';

const CategoryFilter = ({ categories, category, setCategory }) => {
  return (
    <div className="categories">
      <ul>
        <li>
          <label>
            <input
              type="radio"
              name="category"
              value=""
              checked={category === ''}
              onChange={(e) => setCategory(e.target.value)}
            />
            All Categories
          </label>
        </li>
        {categories.map((cat, i) => (
          <li key={i}>
            <label>
              <input
                type="radio"
                name="category"
                value={cat}
                checked={category === cat}
                onChange={(e) => setCategory(e.target.value)}
              />
              {cat}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryFilter;
