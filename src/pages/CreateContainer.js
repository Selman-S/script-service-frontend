// src/pages/CreateContainer.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../services/api';
import { createContainer } from '../services/containerService';

function CreateContainer() {
  const [name, setName] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await createContainer()
      navigate(`/edit-container/${res.data._id}`);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 bg-secondary p-8 rounded shadow">
      <h2 className="text-2xl font-bold mb-6 text-center text-light">Yeni Container Oluştur</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-6">
          <label className="block text-light mb-2">Container Adı</label>
          <input
            type="text"
            placeholder="Container adını giriniz"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full p-2 rounded bg-primary text-light border border-accent"
          />
        </div>
        <button
          type="submit"
          className="w-full py-2 bg-accent text-light rounded hover:bg-light hover:text-primary transition"
        >
          Oluştur
        </button>
      </form>
    </div>
  );
}

export default CreateContainer;
