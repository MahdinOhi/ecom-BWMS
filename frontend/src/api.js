import axios from 'axios';

const API_BASE = import.meta.env.VITE_API_BASE || 'http://localhost:8000/api/user';

export const signup = (data) => axios.post(`${API_BASE}/register/`, data);
export const verifyOtp = (data) => axios.post(`${API_BASE}/verify-otp/`, data);
export const login = (data) => axios.post(`${API_BASE}/login/`, data); 