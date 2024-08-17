import React from 'react';
import { CiSearch } from 'react-icons/ci';

const SearchBar = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className="searchbox">
      <input
        type="text"
        placeholder="Search products..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
