// src/components/services/ServiceDetailPage.tsx
import React, { useState, useEffect } from 'react';
import { servicesData } from './data/servicesData';
import styles from './serviceDetail.module.scss';

interface ServiceDetailPageProps {
    serviceId: number | null;
}

const ServiceDetailPage: React.FC<ServiceDetailPageProps> = ({ serviceId }) => {
    const service = servicesData.find(s => s.id === serviceId);
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        document.body.style.paddingTop = '0';
        document.title = service ? `${service.title} - Окна Хаус` : 'Услуга не найдена - Окна Хаус';
        
        return () => {
            document.body.style.paddingTop = '';
        };
    }, [service]);

    if (!service) {
        return (
            <div className={styles.notFound}>
                <div className="container">
                    <h2>Услуга не найдена</h2>
                    <button onClick={() => window.close()}>Закрыть окно</button>
                </div>
            </div>
        );
    }

    return (
        <div className={styles.serviceDetail}>
            <div className="container">
                {/* Кнопка закрытия */}
                <button className={styles.closeButton} onClick={() => window.close()}>
                    ×
                </button>

                {/* Заголовок и описание */}
                <div className={styles.serviceDetail__header}>
                    <div className={styles.serviceDetail__info}>
                        <h1 className={styles.serviceDetail__title}>{service.title}</h1>
                        <p className={styles.serviceDetail__description}>
                            {service.fullDescription || service.description}
                        </p>
                        {service.price && (
                            <div className={styles.serviceDetail__price}>
                                {service.price}
                            </div>
                        )}
                        <div className={styles.requestButtons}>
                            <button 
                                className={styles.requestButtons__measure}
                                onClick={() => setIsModalOpen(true)}
                            >
                                Заявка на замер
                            </button>
                            <button className={styles.requestButtons__calculation}>
                                Заказать расчет
                            </button>
                        </div>
                    </div>
                    <div className={styles.serviceDetail__icon}>
                        <img src={service.icon} alt={service.title} />
                    </div>
                </div>

                {/* Слайдер с изображениями */}
                {service.images && service.images.length > 0 && (
                    <div className={styles.slider}>
                        <div className={styles.slider__main}>
                            <img 
                                src={service.images[0]} 
                                alt={service.title}
                                className={styles.slider__image}
                            />
                        </div>
                    </div>
                )}

                {/* Карточки с видами работ */}
                {service.features && service.features.length > 0 && (
                    <div className={styles.features}>
                        <h2 className={styles.features__title}>Дополнительные возможности</h2>
                        <div className={styles.features__grid}>
                            {service.features.map((feature) => (
                                <div key={feature.id} className={styles.featureCard}>
                                    <div className={styles.featureCard__icon}>
                                        <img src={feature.icon} alt={feature.title} />
                                    </div>
                                    <h3 className={styles.featureCard__title}>{feature.title}</h3>
                                    <p className={styles.featureCard__description}>{feature.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>

            {/* Модальное окно формы заявки */}
            {isModalOpen && (
                <div className={styles.modal} onClick={() => setIsModalOpen(false)}>
                    <div className={styles.modal__content} onClick={e => e.stopPropagation()}>
                        <button className={styles.modal__close} onClick={() => setIsModalOpen(false)}>
                            ×
                        </button>
                        <h3 className={styles.modal__title}>Заявка на замер</h3>
                        <p className={styles.modal__subtitle}>
                            Оставьте заявку и мы свяжемся с вами в ближайшее время
                        </p>
                        <form className={styles.modal__form}>
                            <input type="text" placeholder="Ваше имя*" />
                            <input type="tel" placeholder="Телефон*" />
                            <input type="email" placeholder="Email" />
                            <button type="submit" className={styles.modal__button}>
                                Отправить заявку
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ServiceDetailPage;