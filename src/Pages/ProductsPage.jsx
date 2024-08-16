import React, { useContext } from 'react';
import { ProductsContext } from '../ContextApi/ProductsContext.jsx';
import SearchBar from '../Components/SearchBar.jsx';
import CategoryFilter from '../Components/CategoryFilter.jsx';
import PriceRangeFilter from '../Components/PriceRangeFilter.jsx';
import SortOptions from '../Components/SortOptions.jsx';
import ProductList from '../Components/ProductList.jsx';

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
