// src/pages/Dashboard.js
import React, { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { getContainers } from '../services/containerService';


function Dashboard() {
  const [containers, setContainers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchContainers();
  }, []);

  const fetchContainers = async () => {
    try {
      const res = await getContainers();
      setContainers(res.data);

      if (res.data.length === 0) {
        navigate('/create-container');
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleCreateContainer = () => {
    navigate('/create-container');
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-light">Container'larınız</h2>
        <button
          onClick={handleCreateContainer}
          className="py-2 px-4 bg-accent text-light rounded hover:bg-light hover:text-primary transition"
        >
          Yeni Container Oluştur
        </button>
      </div>
      {containers.length > 0 ? (
        <table className="w-full text-left text-light">
          <thead>
            <tr>
              <th className="border-b border-accent p-2">#</th>
              <th className="border-b border-accent p-2">Container Adı</th>
              <th className="border-b border-accent p-2">İşlemler</th>
            </tr>
          </thead>
          <tbody>
            {containers.map((container, index) => (
              <tr key={container._id} className="hover:bg-secondary">
                <td className="border-b border-accent p-2">{index + 1}</td>
                <td className="border-b border-accent p-2">{container.name}</td>
                <td className="border-b border-accent p-2">
                  <Link
                    to={`/edit-container/${container._id}`}
                    className="py-1 px-3 bg-accent text-light rounded hover:bg-light hover:text-primary transition"
                  >
                    Düzenle
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p className="text-light">Hiç container oluşturmadınız. Yeni bir container oluşturabilirsiniz.</p>
      )}
    </div>
  );
}

export default Dashboard;
