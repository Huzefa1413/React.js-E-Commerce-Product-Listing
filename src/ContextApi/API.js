import axios from 'axios';
import { API_URL } from '../config.js';

// Fetch all products from the API
export const fetchAllProducts = async (endpoint) => {
  try {
    const url = `${API_URL}${endpoint}`;
    const response = await axios.get(url);

    if (response.status >= 200 && response.status < 300) {
      return response.data; // Return data if response is successful
    } else {
      throw new Error(`Unexpected response status: ${response.status}`);
    }
  } catch (error) {
    handleError(error, 'products'); // Handle and log errors
  }
};

// Fetch all categories from the API
export const fetchAllCategories = async (endpoint) => {
  try {
    const url = `${API_URL}${endpoint}`;
    const response = await axios.get(url);

    if (response.status >= 200 && response.status < 300) {
      return response.data; // Return data if response is successful
    } else {
      throw new Error(`Unexpected response status: ${response.status}`);
    }
  } catch (error) {
    handleError(error, 'categories'); // Handle and log errors
  }
};

// Fetch products by category from the API
export const fetchProductsByCategory = async (endpoint) => {
  try {
    const url = `${API_URL}${endpoint}`;
    const response = await axios.get(url);

    if (response.status >= 200 && response.status < 300) {
      return response.data; // Return data if response is successful
    } else {
      throw new Error(`Unexpected response status: ${response.status}`);
    }
  } catch (error) {
    handleError(error, 'products'); // Handle and log errors
  }
};

// Centralized error handling function
const handleError = (error, resource) => {
  console.error(`Error fetching ${resource}:`, error.message);

  if (error.response) {
    console.error('Response data:', error.response.data);
    console.error('Response status:', error.response.status);
    console.error('Response headers:', error.response.headers);
    throw new Error(
      `Failed to fetch ${resource}. Server responded with status: ${error.response.status}`
    );
  } else if (error.request) {
    console.error('Request made but no response received:', error.request);
    throw new Error(
      `Failed to fetch ${resource}. No response received from the server.`
    );
  } else {
    console.error('Request setup error:', error.message);
    throw new Error('An error occurred while setting up the request.');
  }
};
