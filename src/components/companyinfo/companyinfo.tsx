// src/components/companyinfo/companyinfo.tsx
import React, { useState } from 'react';
import CompanyinfoSlider from './components/companyinfoSlider';
import QualityCardholder from './components/qualityCardholder';
import type { CompanyinfoTypes } from './types/companyinfo.types';
import styles from './companyinfo.module.scss';
import ActionButton from '../actionButton/ActionButton';

const Companyinfo: React.FC = () => {
  const [activeType, setActiveType] = useState<CompanyinfoTypes>('Описание');

  const handleTypeClick = (type: CompanyinfoTypes) => {
    setActiveType(type);
  };

  const handleApplicationClick = () => {
        // Логика открытия модалки или скролла
        console.log('Открыть форму заявки на замер');
    };

  const getTypeClassName = (type: CompanyinfoTypes): string => {
    const baseClass = styles['companyinfo__type'];
    const activeClass = type === activeType ? styles['companyinfo__type--active'] : '';
    return `${baseClass} ${activeClass}`;
  };

  return (
    <section className={styles.companyinfo} id='companyinfo'>
      <div className="container">
        <div className={styles.companyinfo__header}>
          <h2 className={styles.companyinfo__title}>О компании</h2>
          <div className={styles.companyinfo__types}>
            <button 
              className={getTypeClassName('Описание')}
              onClick={() => handleTypeClick('Описание')}
            >
              Описание
            </button>
            <button 
              className={getTypeClassName('Как мы работаем')}
              onClick={() => handleTypeClick('Как мы работаем')}
            >
              Как мы работаем
            </button>
            <button 
              className={getTypeClassName('Отзывы')}
              onClick={() => handleTypeClick('Отзывы')}
            >
              Отзывы
            </button>
            <button 
              className={getTypeClassName('Сертификаты')}
              onClick={() => handleTypeClick('Сертификаты')}
            >
              Сертификаты
            </button>
          </div>
        </div>
        
        <CompanyinfoSlider 
          activeType={activeType}
          onTypeChange={setActiveType}
        />

        <QualityCardholder/>

        <div className={styles['companyinfo__actions']}>
          <ActionButton type="application" onClick={handleApplicationClick} />
        </div>
      </div>
    </section>
  );
};

export default Companyinfo;