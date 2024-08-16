import { useState, useEffect } from 'react';
import {
  fetchAllCategories,
  fetchAllProducts,
  fetchProductsByCategory,
} from '../API';

const useProducts = (category) => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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

  return { products, categories, loading, error };
};

export default useProducts;
