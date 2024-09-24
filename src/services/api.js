// src/services/api.js
import axios from 'axios';

// Backend API URL'sini belirleyin
const API_URL = 'http://localhost:5000/api';

// axios instance oluşturma
const api = axios.create({
  baseURL: API_URL,
});

// İstek interceptor'ı ekleyerek her isteğe token ekleme
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Yanıt interceptor'ı ekleyerek hata yönetimi yapabilirsiniz (opsiyonel)
api.interceptors.response.use(
  (response) => response,
  (error) => {
    // Örneğin, yetkisiz erişim durumunda kullanıcıyı çıkış yaptırabilirsiniz
    if (error.response && error.response.status === 401) {
      localStorage.removeItem('token');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

export default api;
