// src/components/products/components/CompanyinfoSlider.tsx
import React, { useState } from 'react';
import type { Companyinfo, CompanyinfoTypes } from '../types/companyinfo.types';
import { companyinfo } from '../data/companyinfo.data';
import styles from './companyinfoSlider.module.scss';

interface CompanyinfoSliderProps {
  activeType?: CompanyinfoTypes;
  onTypeChange?: (type: CompanyinfoTypes) => void;
}

const CompanyinfoSlider: React.FC<CompanyinfoSliderProps> = ({ activeType: externalActiveType, onTypeChange }) => {
  const [internalActiveType, setInternalActiveType] = useState<CompanyinfoTypes>('Описание');
  // Используем внешний activeType если он передан, иначе внутренний
  const activeType = externalActiveType || internalActiveType;
  // Получаем все уникальные типы продуктов
  const productTypes: CompanyinfoTypes[] = ['Описание', 'Как мы работаем', 'Отзывы', 'Сертификаты'];
  // Находим текущий индекс типа
  const currentTypeIndex = productTypes.findIndex(type => type === activeType);
  // Получаем продукт текущего типа (первый продукт этого типа)
  const currentCompanyinfo = companyinfo.find(companyinfo => companyinfo.type === activeType) || companyinfo[0];

  // Функция для переключения на следующий тип (можно использовать для кнопок или автоматической смены)
  const goToNextType = () => {
    const newIndex = currentTypeIndex === productTypes.length - 1 ? 0 : currentTypeIndex + 1;
    const newType = productTypes[newIndex];
    if (onTypeChange) {
      onTypeChange(newType);
    } else {
      setInternalActiveType(newType);
    }
  };

  // Функция для переключения на предыдущий тип
  const goToPrevType = () => {
    const newIndex = currentTypeIndex === 0 ? productTypes.length - 1 : currentTypeIndex - 1;
    const newType = productTypes[newIndex];
    if (onTypeChange) {
      onTypeChange(newType);
    } else {
      setInternalActiveType(newType);
    }
  };

  if (!currentCompanyinfo) {
    return <div>Нет информации</div>;
  }

  return (
    <div className={styles['companyinfo-slider']}>
      <div className={styles['companyinfo-slider__container']}>
        <div className={styles['companyinfo-card']}>
          <div className={styles['companyinfo-card__image']}>
            <img 
              src={currentCompanyinfo.image} 
              alt={"Информация о компании"} 
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyinfoSlider;