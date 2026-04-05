import React from 'react';
import styles from './HowWeWorkCard.module.scss';
import QualityCard from './QualityCard';
import { qualityData } from './qualityData';

export const HowWeWorkCard: React.FC = () => {
  return (
    <div className={styles.howWeWorkCard}>
      <div className={styles.howWeWorkCard__content}>
        <div className={styles.howWeWorkCard__header}>
          <h2 className={styles.howWeWorkCard__title}>Как мы работаем</h2>
        </div>
        <div className={styles.howWeWorkCard__grid}>
          {qualityData.map(quality => (
            <QualityCard 
              key={quality.id} 
              quality={quality} 
            />
          ))}
        </div>
      </div>
    </div>
  );
};