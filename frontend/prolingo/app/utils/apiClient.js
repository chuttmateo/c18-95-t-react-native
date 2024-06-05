import axios from 'axios';

const apiClient = axios.create({
  baseURL: "http://192.168.1.7:3000",
});

export default apiClient;