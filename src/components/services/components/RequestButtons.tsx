// src/components/services/components/RequestButtons.tsx
import React from 'react';
import styles from '../serviceDetail.module.scss';

interface RequestButtonsProps {
    onOpenModal: () => void;
}

export const RequestButtons: React.FC<RequestButtonsProps> = ({ onOpenModal }) => {
    const handleCalculation = () => {
        // Логика для расчета
        console.log('Заказать расчет');
    };

    return (
        <div className={styles.requestButtons}>
            <button 
                className={styles.requestButtons__measure}
                onClick={onOpenModal}
            >
                Заявка на замер
            </button>
            <button 
                className={styles.requestButtons__calculation}
                onClick={handleCalculation}
            >
                Заказать расчет
            </button>
        </div>
    );
};