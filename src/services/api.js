import axios from 'axios';

const api = axios.create({
  baseURL: 'https://menuria-api.ialexanderbrito.dev',
});

export default api;
