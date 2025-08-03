// axiosInstance.js
import axios from 'axios';

const instance = axios.create({
  baseURL: 'botfolio-backend-production.up.railway.app',
});

// Optional: attach token automatically
instance.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default instance;
