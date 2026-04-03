// src/components/products/Products.tsx
import React, { useState } from 'react';
import ProductSlider from './components/ProductSlider';
import QualityCardholder from './components/qualityCardholder';
import type { ProductType } from './types/product.types';
import styles from './Products.module.scss';
import ActionButton from '../../components/actionButton/ActionButton';

const Products: React.FC = () => {
  const [activeType, setActiveType] = useState<ProductType>('Стандарт');

  const handleTypeClick = (type: ProductType) => {
    setActiveType(type);
  };

  const handleCalculationClick = () => {
        // Логика открытия модалки или скролла
        console.log('Открыть форму расчета');
    };

  const getTypeClassName = (type: ProductType): string => {
    const baseClass = styles['products__type'];
    const activeClass = type === activeType ? styles['products__type--active'] : '';
    return `${baseClass} ${activeClass}`;
  };

  return (
    <section className={styles.products} id='products'>
      <div className={styles.products__container}>
        <div className={styles.products__header}>
          <h2 className={styles.products__title}>Продукция</h2>
          <div className={styles.products__types}>
            <button 
              className={getTypeClassName('Стандарт')}
              onClick={() => handleTypeClick('Стандарт')}
            >
              Стандарт
            </button>
            <button 
              className={getTypeClassName('Бизнес')}
              onClick={() => handleTypeClick('Бизнес')}
            >
              Бизнес
            </button>
            <button 
              className={getTypeClassName('Премиум')}
              onClick={() => handleTypeClick('Премиум')}
            >
              Премиум
            </button>
            <button 
              className={getTypeClassName('Эксклюзив')}
              onClick={() => handleTypeClick('Эксклюзив')}
            >
              Эксклюзив
            </button>
          </div>
        </div>
        
        <ProductSlider 
          activeType={activeType}
          onTypeChange={setActiveType}
        />

        <QualityCardholder/>

        <div className={styles['products__actions']}>
          <ActionButton type="calculation" onClick={handleCalculationClick} />
        </div>
      </div>
    </section>
  );
};

export default Products;