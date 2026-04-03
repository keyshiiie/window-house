// components/QualityCard.tsx
import React from 'react';
import type { Quality } from '../types/quality.types.ts';
import styles from './quality.module.scss';

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
        </div>
    );
};

export default QualityCard;