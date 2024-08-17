import React, { useState } from 'react';
import Col from 'react-bootstrap/Col';
import StarRating from './StarRating.jsx';

const ProductList = ({ products, viewMode }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 6;

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const totalPages = Math.ceil(products.length / productsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <div className={`products ${viewMode}`}>
        {currentProducts.map((product) => (
          <Col className="product" key={product.id}>
            <div className="image">
              <img src={product.image} alt={product.title} />
            </div>
            <div>
              <h3>{product.title}</h3>
              <p>{product.description}</p>
              <h3>${product.price}</h3>
              <div className="starbox">
                <StarRating value={product.rating?.rate} />(
                {product.rating?.count})
              </div>
            </div>
          </Col>
        ))}
      </div>
      <div className="pagination">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            onClick={() => paginate(index + 1)}
            className={`page-item ${currentPage === index + 1 ? 'active' : ''}`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </>
  );
};

export default ProductList;
