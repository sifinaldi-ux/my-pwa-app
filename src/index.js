import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Daftarkan Service Worker (untuk offline caching, dll)
// Ganti register() jika ingin PWA aktif (default CRA: unregister())
serviceWorkerRegistration.register();
