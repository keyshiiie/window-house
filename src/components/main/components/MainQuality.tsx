// components/MainQuality.tsx
import React from 'react';
import QualityCard from './QualityCard';
import { qualityData } from '../data/qualityData';
import styles from '../main.module.scss';

interface MainQualityProps {
  title?: string;
}

const MainQuality: React.FC<MainQualityProps> = ({ 
}) => {
  return (
    <div className={styles.quality}>
      <div className={styles.quality__grid}>
        {qualityData.map(quality => (
          <QualityCard 
            key={quality.id} 
            quality={quality} 
          />
        ))}
      </div>
    </div>
  );
};

export default MainQuality;