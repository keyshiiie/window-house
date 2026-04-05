// src/components/products/components/CompanyinfoSlider.tsx
import React, { useState } from 'react';
import type { CompanyinfoTypes } from '../types/companyinfo.types';
import { DescriptionCard } from './sliderCard/DescriptionCard/DescriptionCard';
import { HowWeWorkCard } from './sliderCard/HowWeWorkCard/HowWeWorkCard';
import { CertificateCard } from './sliderCard/CertificateCard/CertificateCard';
import { ReviewCard } from './sliderCard/ReviewCard/ReviewCard';
import styles from './companyinfoSlider.module.scss';

interface CompanyinfoSliderProps {
  activeType?: CompanyinfoTypes;
  onTypeChange?: (type: CompanyinfoTypes) => void;
}

const CompanyinfoSlider: React.FC<CompanyinfoSliderProps> = ({ activeType: externalActiveType, onTypeChange }) => {
  const [internalActiveType, setInternalActiveType] = useState<CompanyinfoTypes>('Описание');
  // Используем внешний activeType если он передан, иначе внутренний
  const activeType = externalActiveType || internalActiveType;
  
  // Рендерим нужный компонент в зависимости от типа
  const renderContent = () => {
    switch (activeType) {
      case 'Описание':
        return <DescriptionCard />;
      case 'Как мы работаем':
        return <HowWeWorkCard/>;
      case 'Отзывы':
        return <ReviewCard/>;
      case 'Сертификаты':
        return <CertificateCard/>;
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