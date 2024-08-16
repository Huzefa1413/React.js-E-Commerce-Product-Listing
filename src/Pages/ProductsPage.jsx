import React, { useState } from 'react';
import useProducts from '../hooks/useProducts';
import SearchBar from '../Components/Searchbar';
import CategoryFilter from '../Components/CategoryFilter';
import PriceRangeFilter from '../Components/PriceRangeFilter';
import SortOptions from '../Components/SortOptions';
import ProductList from '../Components/ProductList';

const ProductsPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('');
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [sortOption, setSortOption] = useState('');

  const { products, categories, loading, error } = useProducts(category);

  const filteredProducts = products
    .filter((product) => {
      const matchesSearchTerm = product.title
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      const matchesPriceRange =
        product.price >= priceRange[0] && product.price <= priceRange[1];

      return matchesSearchTerm && matchesPriceRange;
    })
    .sort((a, b) => {
      switch (sortOption) {
        case 'price-asc':
          return a.price - b.price;
        case 'price-desc':
          return b.price - a.price;
        case 'name-asc':
          return a.title.localeCompare(b.title);
        case 'name-desc':
          return b.title.localeCompare(a.title);
        case 'rating-asc':
          return a.rating.rate - b.rating.rate;
        case 'rating-desc':
          return b.rating.rate - a.rating.rate;
        default:
          return 0;
      }
    });

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div>
      <h1>Products List</h1>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <CategoryFilter
        categories={categories}
        category={category}
        setCategory={setCategory}
      />
      <PriceRangeFilter priceRange={priceRange} setPriceRange={setPriceRange} />
      <SortOptions sortOption={sortOption} setSortOption={setSortOption} />
      <ProductList products={filteredProducts} />
    </div>
  );
};

export default ProductsPage;
