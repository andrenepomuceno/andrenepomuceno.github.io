import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
// Importar CSS global se houver (opcional)
// import './index.css';

// Verifica se está em produção E se o ID do GA foi fornecido via env var
if (import.meta.env.PROD && import.meta.env.VITE_GA_MEASUREMENT_ID) {
  const gaMeasurementId = import.meta.env.VITE_GA_MEASUREMENT_ID;

  // Função para inicializar e configurar o GA
  function initializeAnalytics() {
    // Carrega o script gtag.js de forma assíncrona
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${gaMeasurementId}`;
    document.head.appendChild(script);

    // Inicializa o dataLayer e configura o GA
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', gaMeasurementId);
  }

  initializeAnalytics();

} else {
  if (import.meta.env.DEV) {
    console.log("Analytics skipped: Development mode.");
  } else if (!import.meta.env.VITE_GA_MEASUREMENT_ID) {
    console.warn("Analytics skipped: VITE_GA_MEASUREMENT_ID is not defined in this build.");
  }
}

// Cria o ponto de montagem do React na div#root do index.html
const root = ReactDOM.createRoot(document.getElementById('root'));

// Renderiza o componente principal App
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);