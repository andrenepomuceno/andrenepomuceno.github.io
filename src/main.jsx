import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';

if (import.meta.env.PROD && import.meta.env.VITE_GA_MEASUREMENT_ID) {
    const gaMeasurementId = import.meta.env.VITE_GA_MEASUREMENT_ID;

    function initializeAnalytics() {
        const script = document.createElement('script');
        script.async = true;
        script.src = `https://www.googletagmanager.com/gtag/js?id=${gaMeasurementId}`;
        document.head.appendChild(script);

        window.dataLayer = window.dataLayer || [];
        function gtag() { dataLayer.push(arguments); }
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

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
);