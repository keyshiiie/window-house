import React from 'react';
import styles from './ActionButton.module.scss';

export type ButtonType = 'application' | 'calculation';

interface ActionButtonProps {
    type: ButtonType;
    onClick?: () => void;
    className?: string;
    children?: React.ReactNode;
}

const buttonConfig = {
    application: {
        defaultText: 'Заявка на замер',
        className: styles['button--application']
    },
    calculation: {
        defaultText: 'Заказать расчет',
        className: styles['button--calculation']
    }
};

const ActionButton: React.FC<ActionButtonProps> = ({ 
    type, 
    onClick, 
    className = '',
    children 
}) => {
    const config = buttonConfig[type];
    
    return (
        <button 
            className={`${styles.button} ${config.className} ${className}`}
            onClick={onClick}
        >
            {children || config.defaultText}
        </button>
    );
};

export default ActionButton;