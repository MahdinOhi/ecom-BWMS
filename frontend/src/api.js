import axios from 'axios';

const API_BASE = import.meta.env.VITE_API_BASE || 'http://localhost:8000/api/user';

export const signup = (data) => axios.post(`${API_BASE}/register/`, data);
export const verifyOtp = (data) => axios.post(`${API_BASE}/verify-otp/`, data);
export const login = (data) => axios.post(`${API_BASE}/login/`, data); 









//Product APIs

export const getProducts = (params = {}) => {
  // params can include: page, limit, search, sort, etc.
  return axios.get(`${PRODUCT_API_BASE}/`, { params });
};

export const getProductsByCategory = (categoryId, params = {}) => {
  return axios.get(`${PRODUCT_API_BASE}/category/${categoryId}/`, { params });
};

export const getProductById = (productId) => {
  return axios.get(`${PRODUCT_API_BASE}/${productId}/`);
};

export const searchProducts = (searchQuery, params = {}) => {
  return axios.get(`${PRODUCT_API_BASE}/search/`, { 
    params: { q: searchQuery, ...params } 
  });
};

// this is for the category in the shop page 
export const getCategories = () => {
  return axios.get(`${PRODUCT_API_BASE}/categories/`);
};

export const getProductFilters = () => {
  // Get available filters like colors, sizes, price ranges, etc.
  return axios.get(`${PRODUCT_API_BASE}/filters/`);
};

// Advanced product filtering
export const getFilteredProducts = (filters) => {
  return axios.post(`${PRODUCT_API_BASE}/filter/`, filters);
};

// This is for the product categories in the sidebar
export const getCategoriesWithCount = () => {
  return axios.get(`${PRODUCT_API_BASE}/categories-with-count/`);
};


// Banner API
export const getSaleBanner = () => {
  return axios.get(`${PRODUCT_API_BASE}/banner/sale/`);
};


