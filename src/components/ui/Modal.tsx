// src/components/ui/Modal.tsx
import React, { useEffect, useState } from 'react';
import styles from './Modal.module.scss';
import closeIcon from '/public/icons/close-icon.svg';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
    const [animationState, setAnimationState] = useState<'open' | 'close' | ''>('');
    const [shouldRender, setShouldRender] = useState(false);

    useEffect(() => {
        if (isOpen) {
            setShouldRender(true);
            setTimeout(() => setAnimationState('open'), 10);
            document.body.style.overflow = 'hidden';
        } else {
            setAnimationState('close');
            setTimeout(() => {
                setShouldRender(false);
                document.body.style.overflow = '';
            }, 300);
        }

        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
        };

        window.addEventListener('keydown', handleEsc);
        return () => {
            window.removeEventListener('keydown', handleEsc);
        };
    }, [isOpen, onClose]);

    if (!shouldRender) return null;

    return (
        <div className={`${styles.modalOverlay} ${animationState === 'open' ? styles.open : animationState === 'close' ? styles.close : ''}`} onClick={onClose}>
            <div className={styles.modalContent} onClick={e => e.stopPropagation()}>
                <button className={styles.modalClose} onClick={onClose}>
                    <img src={closeIcon} alt="Закрыть" />
                </button>
                {children}
            </div>
        </div>
    );
};

export default Modal;