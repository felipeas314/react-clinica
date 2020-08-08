import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:4006/api'
});

export default api;