// src/components/services/ServiceDetailModal.tsx
import React, { useState } from 'react';
import type { Services } from './types/Services';
import Modal from '../ui/Modal';
import FormModal from '../ui/FormModal';
import { ServiceDetailSlider } from './components/ServiceDetailSlider';
import SubmitRequestForm from '../main/components/SubmitRequestForm';
import styles from './serviceDetail.module.scss';

interface ServiceDetailModalProps {
    isOpen: boolean;
    onClose: () => void;
    service: Services | null;
}

const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({ isOpen, onClose, service }) => {
    const [activeFormType, setActiveFormType] = useState<'measure' | 'calculation' | null>(null);

    if (!service) return null;

    const handleFormSubmit = (data: any) => {
        console.log('Форма отправлена:', data, 'Тип заявки:', activeFormType);
        alert(`Заявка на ${activeFormType === 'measure' ? 'замер' : 'расчет'} успешно отправлена!`);
        setActiveFormType(null);
    };

    const handleFormClose = () => {
        setActiveFormType(null);
    };

    const getFormTitle = () => {
        return activeFormType === 'measure' ? 'Вызвать замерщика на дом' : 'Заказать расчет';
    };

    const getFormButtonText = () => {
        return activeFormType === 'measure' ? 'Отправить заявку' : 'Заказать расчет';
    };

    return (
        <>
            {/* Основное модальное окно с деталями услуги */}
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
                            <div className={styles.serviceDetailModal__buttons}>
                                <button 
                                    className={styles.serviceDetailModal__applicationButton}
                                    onClick={() => setActiveFormType('measure')}
                                >
                                    Заявка на замер
                                </button>
                                <button 
                                    className={styles.serviceDetailModal__calculationButton}
                                    onClick={() => setActiveFormType('calculation')}
                                >
                                    Заказать расчет
                                </button>
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

            {/* Отдельное модальное окно для формы */}
            <FormModal isOpen={activeFormType !== null} onClose={handleFormClose}>
                <SubmitRequestForm 
                    onSubmit={handleFormSubmit}
                    onClose={handleFormClose}
                    title={getFormTitle()}
                    buttonText={getFormButtonText()}
                    requestType={activeFormType || undefined}
                    variant={activeFormType === 'measure' ? 'measure' : 'calculation'}
                />
            </FormModal>
        </>
    );
};

export default ServiceDetailModal;