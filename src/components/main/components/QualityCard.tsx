// components/QualityCard.tsx
import React from 'react';
import type { Quality } from '../../../types/quality.types';
import styles from '../main.module.scss';

interface QualityCardProps {
    quality: Quality;
}

const QualityCard: React.FC<QualityCardProps> = ({ quality }) => {
    return (
        <div className={styles.qualityCard}>
            <div className={styles.qualityCard__icon}>
                <img src={quality.icon} alt={quality.title} />
            </div>
            <h3 className={styles.qualityCard__title}>
                {quality.title}
            </h3>
            <p className={styles.qualityCard__description}>
                {quality.description}
            </p>
        </div>
    );
};

export default QualityCard;