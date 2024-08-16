import React, { useContext } from 'react';
import { ProductsContext } from '../ContextApi/ProductsContext';
import SearchBar from '../Components/SearchBar';
import CategoryFilter from '../Components/CategoryFilter';
import PriceRangeFilter from '../Components/PriceRangeFilter';
import SortOptions from '../Components/SortOptions';
import ProductList from '../Components/ProductList';

const ProductsPage = () => {
  const {
    products,
    categories,
    loading,
    error,
    searchTerm,
    setSearchTerm,
    category,
    setCategory,
    priceRange,
    setPriceRange,
    sortOption,
    setSortOption,
    filteredProducts,
  } = useContext(ProductsContext);

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
