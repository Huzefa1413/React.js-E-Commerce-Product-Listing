# **E-commerce Product Listing**

## **Table of Contents**

- [**E-commerce Product Listing**](#e-commerce-product-listing)
  - [**Table of Contents**](#table-of-contents)
  - [**Project Overview**](#project-overview)
  - [**Features**](#features)
  - [**Installation**](#installation)
    - [**Prerequisites**](#prerequisites)
    - [**Steps**](#steps)
  - [**Usage**](#usage)
  - [**Folder Structure**](#folder-structure)
  - [**API Endpoints**](#api-endpoints)
  - [**Technologies Used**](#technologies-used)
  - [**Best Practices Implemented**](#best-practices-implemented)

## **Project Overview**

The E-commerce Product Listing is a React-based web application that provides users with the ability to browse, search, filter, and sort a catalog of products. The application leverages Context API for efficient state management, ensuring a smooth and responsive user experience. It also includes API integrations for fetching product data and categories.

## **Features**

- **Product Listing**: Displays a list of products fetched from an API.
- **Search Functionality**: Allows users to search for products by name, updating the list in real-time as the user types.
- **Filtering**: Users can filter products based on categories and price ranges.
- **Sorting**: Products can be sorted by price (ascending/descending), name (alphabetically), and rating.
- **Responsive Design**: The application is designed to be fully responsive, ensuring usability across devices.

## **Installation**

### **Prerequisites**

- Node.js (version 12.x or higher)
- npm or yarn

### **Steps**

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/Huzefa1413/React.js-E-Commerce-Product-Listing.git
   cd React.js-E-Commerce-Product-Listing
   ```

2. **Install Dependencies**:
   Using npm:

   ```bash
   npm install
   ```

   Or using yarn:

   ```bash
   yarn install
   ```

3. **Start the Application**:
   Using npm:

   ```bash
   npm run dev
   ```

   Or using yarn:

   ```bash
   yarn run dev
   ```

4. **Open the Application**:
   The app should now be running on `http://localhost:3000/`.

## **Usage**

Once the application is running, users can interact with the product catalog by searching, filtering, and sorting products. The interface is intuitive, with search bars, dropdowns, and sliders for filtering, and radio buttons or dropdowns for sorting.

## **Folder Structure**

```bash
product-catalog-app/
├── public/
├── src/
|   ├── assets/
|   |
│   ├── Components/
│   │   ├── SearchBar.jsx
│   │   ├── CategoryFilter.jsx
│   │   ├── PriceRangeFilter.jsx
│   │   ├── SortOptions.jsx
│   │   └── ProductList.jsx
│   ├── ContextApi/
│   │   ├── ProductsContext.js
│   │   └── API.js
│   ├── Pages/
│   │   └── ProductsPage.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── styles/
│       └── styles.css
├── .gitignore
├── package.json
└── README.md
```

## **API Endpoints**

- **Get All Products**: `https://fakestoreapi.com/products`
- **Get Products by Category**: `https://fakestoreapi.com/products/category/{category}`
- **Get All Categories**: `https://fakestoreapi.com/products/categories`

## **Technologies Used**

- **React**: A JavaScript library for building user interfaces.
- **Context API**: A React structure that provides a way to pass data through the component tree without having to pass props down manually at every level.
- **Axios**: A promise-based HTTP client for the browser and Node.js to handle API requests.
- **CSS/Bootstrap**: For styling the components.

## **Best Practices Implemented**

- **State Management**: Using Context API for managing and sharing state across the component tree efficiently.
- **Error Handling**: Comprehensive error handling is implemented to manage API failures gracefully.
- **Code Modularity**: Breaking down the main page into smaller, reusable components.
- **Responsiveness**: Ensuring the application is accessible and usable across different screen sizes.
