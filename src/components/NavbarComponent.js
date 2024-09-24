// src/components/NavbarComponent.js
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function NavbarComponent() {
  const navigate = useNavigate();
  const token = localStorage.getItem('token');

  const logout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <nav className="bg-secondary p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold text-light">
          My Container App
        </Link>
        <div>
          {!token ? (
            <>
              <Link to="/login" className="text-light mr-4 hover:text-accent">
                Giriş Yap
              </Link>
              <Link to="/register" className="text-light hover:text-accent">
                Kayıt Ol
              </Link>
            </>
          ) : (
            <>
              <Link to="/dashboard" className="text-light mr-4 hover:text-accent">
                Dashboard
              </Link>
              <button onClick={logout} className="text-light hover:text-accent">
                Çıkış Yap
              </button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}

export default NavbarComponent;
