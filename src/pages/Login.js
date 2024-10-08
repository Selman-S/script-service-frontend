// src/pages/Login.js
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import api from '../services/api';
import toast from 'react-hot-toast'; // Eklendi

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const token = localStorage.getItem('token');

  if (token) {
    navigate('/dashboard');
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post('/auth/login', { email, password });
      localStorage.setItem('token', res.data.token);
      toast.success('Giriş başarılı!'); // Başarılı giriş bildirimi
      navigate('/dashboard');
    } catch (err) {
      toast.error('Giriş başarısız: ' + err.response.data.message); // Hata bildirimi
    }
  };


  return (
    <div className="max-w-md mx-auto mt-10 bg-secondary p-8 rounded shadow">
      <h2 className="text-2xl font-bold mb-6 text-center text-light">Giriş Yap</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-light mb-2">Email adresi</label>
          <input
            type="email"
            placeholder="Email giriniz"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full p-2 rounded bg-primary text-light border border-accent"
          />
        </div>
        <div className="mb-6">
          <label className="block text-light mb-2">Şifre</label>
          <input
            type="password"
            placeholder="Şifre giriniz"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full p-2 rounded bg-primary text-light border border-accent"
          />
        </div>
        <button
          type="submit"
          className="w-full py-2 bg-accent text-light rounded hover:bg-light hover:text-primary transition"
        >
          Giriş Yap
        </button>
      </form>
      <p className="mt-4 text-center text-light">
        Henüz hesabınız yok mu?{' '}
        <Link to="/register" className="text-accent hover:text-light">
          Kayıt Ol
        </Link>
      </p>
    </div>
  );
}

export default Login;
