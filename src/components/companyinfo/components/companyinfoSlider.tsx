// src/components/products/components/CompanyinfoSlider.tsx
import React, { useState } from 'react';
import type { CompanyinfoTypes } from '../types/companyinfo.types';
import { DescriptionCard } from './sliderCard/DescriptionCard';
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
        // TODO: добавить компонент HowWeWorkCard
        return <div>Как мы работаем - в разработке</div>;
      case 'Отзывы':
        // TODO: добавить компонент ReviewsCard
        return <div>Отзывы - в разработке</div>;
      case 'Сертификаты':
        // TODO: добавить компонент CertificatesCard
        return <div>Сертификаты - в разработке</div>;
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