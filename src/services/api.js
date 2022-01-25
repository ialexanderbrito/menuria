import axios from 'axios';

const api = axios.create({
  baseURL: 'https://menuria.herokuapp.com',
});

export default api;
