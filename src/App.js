import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>My Progressive Web App</h1>
        <p>
          Praktikum PWA menggunakan React (Create React App).
        </p>
        <p>
          Coba buka di Chrome DevTools &rarr; <code>Application</code> &rarr;{' '}
          <code>Manifest</code> &amp; <code>Service Workers</code>, atau jalankan
          audit <strong>Lighthouse</strong> untuk melihat skor PWA.
        </p>
      </header>
    </div>
  );
}

export default App;
