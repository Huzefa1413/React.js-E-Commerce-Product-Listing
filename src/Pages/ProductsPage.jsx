import React, { useContext, useState, useEffect } from 'react';
import { ProductsContext } from '../ContextApi/ProductsContext.jsx';
import SearchBar from '../Components/SearchBar.jsx';
import CategoryFilter from '../Components/CategoryFilter.jsx';
import PriceRangeFilter from '../Components/PriceRangeFilter.jsx';
import SortOptions from '../Components/SortOptions.jsx';
import ProductList from '../Components/ProductList.jsx';
import Loading from '../Components/Loading.jsx';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Accordion from 'react-bootstrap/Accordion';
import { MdDarkMode } from 'react-icons/md';
import { MdLightMode } from 'react-icons/md';
import { BsFillGrid3X3GapFill } from 'react-icons/bs';
import { FaListUl } from 'react-icons/fa';

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

  const [viewMode, setViewMode] = useState('grid'); // State to manage view mode

  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  useEffect(() => {
    document.body.className = isDarkMode ? 'dark-mode' : '';
  }, [isDarkMode]);

  if (loading) {
    <Loading />;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <Container>
      <Row className="my-4">
        <h1 className="text-center">Products List</h1>
        <div className="dark-light-switch">
          <div>Toggle Dark Light Mode</div>
          <div
            onClick={toggleTheme}
            className={`${isDarkMode ? 'active' : ''}`}
          >
            <MdDarkMode />
          </div>
          <div
            onClick={toggleTheme}
            className={`${!isDarkMode ? 'active' : ''}`}
          >
            <MdLightMode />
          </div>
        </div>
      </Row>
      <Row>
        <Col xs={12} md={5} lg={3} className="left">
          <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
              <Accordion.Header>Categories</Accordion.Header>
              <Accordion.Body>
                <CategoryFilter
                  categories={categories}
                  category={category}
                  setCategory={setCategory}
                />
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>Price range</Accordion.Header>
              <Accordion.Body>
                <PriceRangeFilter
                  priceRange={priceRange}
                  setPriceRange={setPriceRange}
                />
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Col>
        <Col xs={12} md={7} lg={9} className="right">
          <div className="top-bar">
            <label>{filteredProducts.length} items found</label>
            <div className="top-right">
              <SortOptions
                sortOption={sortOption}
                setSortOption={setSortOption}
              />
              <div className="switch">
                <div
                  className={`switch-item ${
                    viewMode === 'grid' ? 'active' : ''
                  }`}
                  onClick={() => setViewMode('grid')}
                >
                  <BsFillGrid3X3GapFill />
                </div>
                <div
                  className={`switch-item ${
                    viewMode === 'list' ? 'active' : ''
                  }`}
                  onClick={() => setViewMode('list')}
                >
                  <FaListUl />
                </div>
              </div>
            </div>
          </div>
          <ProductList products={filteredProducts} viewMode={viewMode} />
        </Col>
      </Row>
    </Container>
  );
};

export default ProductsPage;
