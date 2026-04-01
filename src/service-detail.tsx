// src/service-detail.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import ServiceDetailPage from './components/services/ServiceDetailPage';
import './scss/style.scss';

// Получаем ID услуги из параметров URL
const getServiceId = () => {
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('id');
    return id ? parseInt(id) : null;
};

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <ServiceDetailPage serviceId={getServiceId()} />
    </React.StrictMode>
);