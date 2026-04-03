// src/components/services/ServiceDetailModal.tsx
import React from 'react';
import type { Services } from './types/Services';
import Modal from '../ui/Modal';
import { ServiceDetailSlider } from './components/ServiceDetailSlider';
import styles from './serviceDetail.module.scss';
import ActionButton from '../../components/actionButton/ActionButton';

interface ServiceDetailModalProps {
    isOpen: boolean;
    onClose: () => void;
    service: Services | null;
}

const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({ isOpen, onClose, service }) => {
    if (!service) return null;

    const handleApplicationClick = () => {
        // Логика открытия модалки или скролла
        console.log('Открыть форму заявки на замер');
    };

    const handleCalculationClick = () => {
        // Логика открытия модалки или скролла
        console.log('Открыть форму расчета');
    };

    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <div className={styles.serviceDetailModal}>
                <div className={styles.serviceDetailModal__top}>
                    {/* Слайдер с изображениями */}
                    {service.images && service.images.length > 0 ? (
                        <ServiceDetailSlider images={service.images} title={service.title} />
                    ) : (
                        <div className={styles.serviceDetailModal__slider}>
                            <img 
                                src={service.backgroundImage} 
                                alt={service.title}
                                className={styles.serviceDetailModal__image}
                            />
                        </div>
                    )}
                    
                    <div className={styles.serviceDetailModal__header}>
                        <h2 className={styles.serviceDetailModal__title}>{service.title}</h2>
                        <p className={styles.serviceDetailModal__description}>
                            {service.fullDescription || service.description}
                        </p>
                        {/* Кнопки */}
                        <div className={styles.serviceDetailModal__buttons}>
                          <ActionButton type="application" onClick={handleApplicationClick} />
                          <ActionButton type="calculation" onClick={handleCalculationClick} />
                        </div>
                    </div>
                </div>
                
                <div className={styles.serviceDetailModal__bottom}>
                    {/* Карточки с видами работ */}
                    {service.features && service.features.length > 0 && (
                        <div className={styles.serviceDetailModal__features}>
                            <div className={styles.serviceDetailModal__featuresGrid}>
                                {service.features.map((feature) => (
                                    <div key={feature.id} className={styles.serviceDetailModal__featureCard}>
                                        <div className={styles.serviceDetailModal__featureIcon}>
                                            <img src={feature.icon} alt={feature.title} />
                                        </div>
                                        <div className={styles.serviceDetailModal__featureText}>
                                            <h4 className={styles.serviceDetailModal__featureTitle}>
                                                {feature.title}
                                            </h4>
                                            <p className={styles.serviceDetailModal__featureDescription}>
                                                {feature.description}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </Modal>
    );
};

export default ServiceDetailModal;