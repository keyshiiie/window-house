// components/qualityCardholder.tsx
import React from 'react';
import QualityCard from './qualityCard';
import { qualityData } from '../data/quality.data';
import styles from './quality.module.scss';

interface QualityCardholderProps {
    title?: string;
}

const QualityCardholder: React.FC<QualityCardholderProps> = ({ 
}) => {
    return (
      <section className={styles.quality}>
        <img 
          src="/public/icons/quality-logo.svg" 
          alt="Логотип" 
          className={styles.quality__logo}
        />
        <div className={styles.quality__grid}>
          {qualityData.map(quality => (
            <QualityCard 
              key={quality.id} 
              quality={quality} 
            />
          ))}
        </div>
      </section>
    );
};

export default QualityCardholder;