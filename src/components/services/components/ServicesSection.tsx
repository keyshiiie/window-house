// src/components/services/components/ServicesSection.tsx
import React, { useState } from 'react';
import { servicesData } from '../data/services.data';
import ServiceCard from './ServiceCard';
import ServiceDetailModal from '../ServiceDetailModal';
import type { Services } from '../types/Services';
import styles from '../services.module.scss';

interface ServicesSectionProps {
    title?: string;
}

const ServicesSection: React.FC<ServicesSectionProps> = ({ 
    title = "Наши услуги",
}) => {
    const [selectedService, setSelectedService] = useState<Services | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = (service: Services) => {
        setSelectedService(service);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setSelectedService(null);
    };

    return (
        <>
            <section className={styles.services} id='services'>
                <div className="container">
                    <div className={styles.services__header}>
                        <h2 className={styles.services__title}>{title}</h2>
                    </div>
                    <div className={styles.services__grid}>
                        {servicesData.map(service => (
                            <ServiceCard 
                                key={service.id} 
                                service={service} 
                                onOpenModal={handleOpenModal}
                            />
                        ))}
                    </div>
                </div>
            </section>

            <ServiceDetailModal 
                isOpen={isModalOpen}
                onClose={handleCloseModal}
                service={selectedService}
            />
        </>
    );
};

export default ServicesSection;