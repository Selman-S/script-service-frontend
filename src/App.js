// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { Toaster } from 'react-hot-toast'; // Eklendi
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import CreateContainer from './pages/CreateContainer';
import EditContainer from './pages/EditContainer';
import NavbarComponent from './components/NavbarComponent';
import FooterComponent from './components/FooterComponent';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-primary text-light">
        <NavbarComponent />
        {/* Toaster bileşenini ekliyoruz */}
      
<Toaster
  position="top-right"
  reverseOrder={false}
  toastOptions={{
    // Global varsayılan seçenekler
    success: {
      style: {
        background: '#415a77',
        color: '#e0e1dd',
      },
    },
    error: {
      style: {
        background: '#b00020',
        color: '#ffffff',
      },
    },
  }}
/>

        <div className="container mx-auto flex-1 p-4">
          <Routes>
            <Route path="/" element={<Navigate to="/login" />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/dashboard" element={<PrivateRoute component={Dashboard} />} />
            <Route path="/create-container" element={<PrivateRoute component={CreateContainer} />} />
            <Route path="/edit-container/:id" element={<PrivateRoute component={EditContainer} />} />
          </Routes>
        </div>
        <FooterComponent />
      </div>
    </Router>
  );
}

// Özel Route için bir bileşen oluşturuyoruz
function PrivateRoute({ component: Component }) {
  const token = localStorage.getItem('token');
  return token ? <Component /> : <Navigate to="/login" />;
}

export default App;
