// src/services/containerService.js
import api from './api';

export const getContainers = () => api.get('/containers');

export const createContainer = (name) => api.post('/containers', { name });

export const updateContainer = (id, scriptContent) =>
  api.put(`/containers/${id}`, { scriptContent });

export const getContainerScript = (containerId) =>
  api.get(`/containers/scripts/${containerId}.js`);
