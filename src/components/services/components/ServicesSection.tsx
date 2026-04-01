// src/components/service/components/ServicesSection.tsx
import React from 'react';
import { servicesData } from '../data/servicesData';
import ServiceCard from './ServiceCard'; 
import styles from '../services.module.scss';

interface ServicesSectionProps {
    title?: string;
    subtitle?: string;
}

const ServicesSection: React.FC<ServicesSectionProps> = ({ 
    title = "Наши услуги",
}) => {
    return (
        <section className={styles.services} id='services'>
            <div className="container">
                <div className={styles.services__header}>
                    <h2 className={styles.services__title}>{title}</h2>
                </div>
                <div className={styles.services__grid}>
                    {servicesData.map(service => (
                        <ServiceCard key={service.id} service={service} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;