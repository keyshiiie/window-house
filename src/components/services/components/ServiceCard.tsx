// src/components/services/components/ServiceCard.tsx
import React from 'react';
import type { Services } from '../types/Services';
import styles from '../services.module.scss';

interface ServiceCardProps {
    service: Services;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
    const handleClick = () => {
        // Используем относительный путь с параметром
        window.open(`/service.html?id=${service.id}`, '_blank');
    };

    return (
        <div 
            className={styles.serviceCard}
            style={{ backgroundImage: `url(${service.backgroundImage})` }}
            onClick={handleClick}
        >
            <div className={styles.serviceCard__overlay}>
                <div className={styles.serviceCard__header}>
                    <div className={styles.serviceCard__icon}>
                        <img src={service.icon} alt={service.title} />
                    </div>
                    <h3 className={styles.serviceCard__title}>
                        {service.title}
                    </h3>
                </div>
                <p className={styles.serviceCard__description}>
                    {service.description}
                </p>
                <button className={styles.serviceCard__button}>
                    <span className={styles.serviceCard__buttonText}>Подробнее</span>
                    <span className={styles.serviceCard__buttonIcon}></span>
                </button>
            </div>
        </div>
    );
};

export default ServiceCard;