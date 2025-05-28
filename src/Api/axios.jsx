import axios from 'axios';

let setLoadingExternal = () => {};

export const setLoadingHandler = (fn) => {
  setLoadingExternal = fn;
};

const API = axios.create({
  baseURL: 'http://localhost:3000/api',
});

API.interceptors.request.use(
  (config) => {
    setLoadingExternal(true);
    const token = localStorage.getItem('token');
    console.log('getItemtoken', token);
    
    if (token) config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  (error) => {
    setLoadingExternal(false);
    return Promise.reject(error);
  }
);

API.interceptors.response.use(
  (response) => {
    setLoadingExternal(false);
    return response;
  },
  (error) => {
    setLoadingExternal(false);
    return Promise.reject(error);
  }
);

export default API;
