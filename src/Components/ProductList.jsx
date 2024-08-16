import React from 'react';

const ProductList = ({ products }) => {
  return (
    <ul>
      {products.map((product) => (
        <li key={product.id}>
          {product.title} - ${product.price} - Rating: {product.rating?.rate}
        </li>
      ))}
    </ul>
  );
};

export default ProductList;
