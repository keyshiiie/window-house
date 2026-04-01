// src/components/ui/FormModal.tsx
import React, { useEffect } from 'react';
import styles from './FormModal.module.scss';
import closeIcon from '/public/icons/form-close-icon.svg'; // импортируем иконку

interface FormModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
}

const FormModal: React.FC<FormModalProps> = ({ isOpen, onClose, children }) => {
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }

        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
        };

        window.addEventListener('keydown', handleEsc);
        return () => {
            window.removeEventListener('keydown', handleEsc);
            document.body.style.overflow = '';
        };
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    return (
        <div className={styles.formModalOverlay} onClick={onClose}>
            <div className={styles.formModalContent} onClick={e => e.stopPropagation()}>
                <button className={styles.formModalClose} onClick={onClose}>
                    <img src={closeIcon} alt="Закрыть" />
                </button>
                {children}
            </div>
        </div>
    );
};

export default FormModal;