import axios from 'axios';
import { API_URL } from './config';

export const fetchAllProducts = async (endpoint) => {
  try {
    const url = `${API_URL}${endpoint}`;
    const response = await axios.get(url);
    if (response.status >= 200 && response.status < 300) {
      return response.data;
    } else {
      throw new Error(`Unexpected response status: ${response.status}`);
    }
  } catch (error) {
    console.error('Error fetching products:', error.message);
    if (error.response) {
      console.error('Response data:', error.response.data);
      console.error('Response status:', error.response.status);
      console.error('Response headers:', error.response.headers);
      throw new Error(
        `Failed to fetch products. Server responded with status: ${error.response.status}`
      );
    } else if (error.request) {
      console.error('Request made but no response received:', error.request);
      throw new Error(
        'Failed to fetch products. No response received from the server.'
      );
    } else {
      console.error('Request setup error:', error.message);
      throw new Error('An error occurred while setting up the request.');
    }
  }
};

export const fetchAllCategories = async (endpoint) => {
  try {
    const url = `${API_URL}${endpoint}`;
    const response = await axios.get(url);
    if (response.status >= 200 && response.status < 300) {
      return response.data;
    } else {
      throw new Error(`Unexpected response status: ${response.status}`);
    }
  } catch (error) {
    console.error('Error fetching categories:', error.message);
    if (error.response) {
      console.error('Response data:', error.response.data);
      console.error('Response status:', error.response.status);
      console.error('Response headers:', error.response.headers);
      throw new Error(
        `Failed to fetch categories. Server responded with status: ${error.response.status}`
      );
    } else if (error.request) {
      console.error('Request made but no response received:', error.request);
      throw new Error(
        'Failed to fetch categories. No response received from the server.'
      );
    } else {
      console.error('Request setup error:', error.message);
      throw new Error('An error occurred while setting up the request.');
    }
  }
};

export const fetchProductsByCategory = async (endpoint) => {
  try {
    const url = `${API_URL}${endpoint}`;
    const response = await axios.get(url);
    if (response.status >= 200 && response.status < 300) {
      return response.data;
    } else {
      throw new Error(`Unexpected response status: ${response.status}`);
    }
  } catch (error) {
    console.error('Error fetching products:', error.message);
    if (error.response) {
      console.error('Response data:', error.response.data);
      console.error('Response status:', error.response.status);
      console.error('Response headers:', error.response.headers);
      throw new Error(
        `Failed to fetch products. Server responded with status: ${error.response.status}`
      );
    } else if (error.request) {
      console.error('Request made but no response received:', error.request);
      throw new Error(
        'Failed to fetch products. No response received from the server.'
      );
    } else {
      console.error('Request setup error:', error.message);
      throw new Error('An error occurred while setting up the request.');
    }
  }
};
