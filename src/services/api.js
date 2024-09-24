// src/services/api.js
import axios from 'axios';
import toast from 'react-hot-toast'; // Eklendi
// Backend API URL'sini belirleyin
const API_URL = "https://script-service-backend.onrender.com/api/";


// axios instance oluşturma
const api = axios.create({
  baseURL: API_URL,
});

// İstek interceptor'ı ekleyerek her isteğe token ekleme
api.interceptors.request.use(
  (config) => {
    console.log(API_URL);
    
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
    const errorMessage = error.response && error.response.data && error.response.data.message
  ? error.response.data.message
  : 'Bir hata oluştu. Lütfen daha sonra tekrar deneyin.';
    // Örneğin, yetkisiz erişim durumunda kullanıcıyı çıkış yaptırabilirsiniz
    toast.error('Giriş başarısız: ' + errorMessage);
    if (error.response && error.response.status === 401) {
      localStorage.removeItem('token');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

export default api;
