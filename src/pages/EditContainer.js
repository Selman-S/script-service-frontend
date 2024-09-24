// src/pages/EditContainer.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import api from '../services/api';
import { getContainers, updateContainer } from '../services/containerService';

function EditContainer() {
  const { id } = useParams();
  const [scriptContent, setScriptContent] = useState('');
  const [container, setContainer] = useState(null);

  useEffect(() => {
    fetchContainer();
  }, []);

  const fetchContainer = async () => {
    try {
      const res = await getContainers()
      const cont = res.data.find((c) => c._id === id);
      setContainer(cont);
      setScriptContent(cont.scriptContent);
    } catch (err) {
      console.error(err);
    }
  };

  const handleUpdate = async () => {
    try {
      await updateContainer()
      alert('Script güncellendi.');
    } catch (err) {
      console.error(err);
    }
  };

  if (!container) return <div className="text-light">Yükleniyor...</div>;

  return (
    <div>
      <h2 className="text-2xl font-bold text-light mb-4">{container.name} Container'ını Düzenle</h2>
      <div className="bg-secondary p-4 rounded shadow">
        <label className="block text-light mb-2">JavaScript Kodunuz</label>
        <textarea
          value={scriptContent}
          onChange={(e) => setScriptContent(e.target.value)}
          rows={10}
          className="w-full p-2 rounded bg-primary text-light border border-accent mb-4"
        />
        <button
          onClick={handleUpdate}
          className="py-2 px-4 bg-accent text-light rounded hover:bg-light hover:text-primary transition"
        >
          Güncelle
        </button>
      </div>
      <h3 className="text-xl font-bold text-light mt-6">Siteye Ekleyin</h3>
      <p className="text-light">
        Aşağıdaki kodu sitenizin <code>&lt;head&gt;</code> etiketinin içine ekleyin:
      </p>
      <pre className="bg-secondary p-4 rounded text-light mt-2">
        {`<script async src="http://localhost:5000/api/containers/scripts/${container.containerId}.js"></script>`}
      </pre>
    </div>
  );
}

export default EditContainer;
