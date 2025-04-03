import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
// Importar CSS global se houver (opcional)
// import './index.css';

// Cria o ponto de montagem do React na div#root do index.html
const root = ReactDOM.createRoot(document.getElementById('root'));

// Renderiza o componente principal App
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
