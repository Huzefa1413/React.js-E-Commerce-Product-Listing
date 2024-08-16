import React, { createContext, useState, useEffect } from 'react';
import {
  fetchAllCategories,
  fetchAllProducts,
  fetchProductsByCategory,
} from './API.js';

const ProductsContext = createContext();

const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('');
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [sortOption, setSortOption] = useState('');

  useEffect(() => {
    const fetchInitialData = async () => {
      try {
        setLoading(true);
        const categoriesData = await fetchAllCategories('/products/categories');
        setCategories(categoriesData);

        const productsData = category
          ? await fetchProductsByCategory(`/products/category/${category}`)
          : await fetchAllProducts('/products');

        setProducts(productsData);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchInitialData();
  }, [category]);

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

  return (
    <ProductsContext.Provider
      value={{
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
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

export { ProductsProvider, ProductsContext };
