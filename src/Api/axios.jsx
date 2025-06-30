import axios from 'axios';

let setLoadingExternal = () => {};

export const setLoadingHandler = (fn) => {
  setLoadingExternal = fn;
};
const localURL = "http://localhost:3000/api";
const liveURL = "https://********/api"; 
const isLive = false; 

const API = axios.create({
  baseURL: isLive ? liveURL : localURL
});

API.interceptors.request.use(
  (config) => {
    setLoadingExternal(true);
    const token = localStorage.getItem('token');    
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
