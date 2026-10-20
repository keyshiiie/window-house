// src/components/companyinfo/components/companyinfoSlider.tsx
import React from 'react';
import type { CompanyinfoTypes } from '../types/companyinfo.types';
import { DescriptionCard } from './sliderCard/DescriptionCard/DescriptionCard';
import { HowWeWorkCard } from './sliderCard/HowWeWorkCard/HowWeWorkCard';
import { CertificateCard } from './sliderCard/CertificateCard/CertificateCard';
import { ReviewCard } from './sliderCard/ReviewCard/ReviewCard';
import styles from './companyinfoSlider.module.scss';

interface CompanyinfoSliderProps {
  activeType?: CompanyinfoTypes;
}

const CompanyinfoSlider: React.FC<CompanyinfoSliderProps> = ({ activeType: externalActiveType }) => {
  const activeType = externalActiveType || 'Описание';
  
  const renderContent = () => {
    switch (activeType) {
      case 'Описание':
        return <DescriptionCard />;
      case 'Как мы работаем':
        return <HowWeWorkCard />;
      case 'Отзывы':
        return <ReviewCard />;
      case 'Сертификаты':
        return <CertificateCard />;
      default:
        return <div>Нет информации</div>;
    }
  };

  return (
    <div className={styles['companyinfo-slider']}>
      <div className={styles['companyinfo-slider__container']}>
        <div className={styles['companyinfo-card']}>
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default CompanyinfoSlider;