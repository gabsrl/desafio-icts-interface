import axios from 'axios';

const DEVELOPMENT_URL_API = 'http://localhost:3333/';
const api = axios.create({
  baseURL: DEVELOPMENT_URL_API,
});

export default api;
