// components/AdvantageCard.tsx
import React from 'react';
import type { Advantage } from '../types/Advantage.types.ts';
import styles from '../main.module.scss';

interface AdvantageCardProps {
    advantage: Advantage;
}

const AdvantageCard: React.FC<AdvantageCardProps> = ({ advantage }) => {
    return (
        <div className={styles.advantageCard}>
            <div className={styles.advantageCard__icon}>
                <img src={advantage.icon} alt={advantage.title} />
            </div>
            <h3 className={styles.advantageCard__title}>
                {advantage.title}
            </h3>
            <p className={styles.advantageCard__description}>
                {advantage.description}
            </p>
        </div>
    );
};

export default AdvantageCard;