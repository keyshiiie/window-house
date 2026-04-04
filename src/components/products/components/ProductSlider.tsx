// src/components/products/components/ProductSlider.tsx
import React, { useState, useEffect } from 'react';
import type { Product, ProductType } from '../types/product.types';
import { products } from '../data/products.data';
import { PrevArrowIcon, NextArrowIcon } from '../../ui/ArrowIcons';
import styles from './ProductSlider.module.scss';

interface ProductSliderProps {
  activeType?: ProductType;
  onTypeChange?: (type: ProductType) => void;
}

const ProductSlider: React.FC<ProductSliderProps> = ({ activeType: externalActiveType, onTypeChange }) => {
  const [internalActiveType, setInternalActiveType] = useState<ProductType>('Стандарт');
  // Используем внешний activeType если он передан, иначе внутренний
  const activeType = externalActiveType || internalActiveType;
  // Получаем все уникальные типы продуктов
  const productTypes: ProductType[] = ['Стандарт', 'Бизнес', 'Премиум', 'Эксклюзив'];
  // Находим текущий индекс типа
  const currentTypeIndex = productTypes.findIndex(type => type === activeType);
  // Получаем продукт текущего типа (первый продукт этого типа)
  const currentProduct = products.find(product => product.type === activeType) || products[0];

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

  // Функция для переключения на следующий тип
  const goToNextType = () => {
    const newIndex = currentTypeIndex === productTypes.length - 1 ? 0 : currentTypeIndex + 1;
    const newType = productTypes[newIndex];
    if (onTypeChange) {
      onTypeChange(newType);
    } else {
      setInternalActiveType(newType);
    }
  };

  const getTypeClass = (type: ProductType): string => {
    switch (type) {
      case 'Стандарт': return styles['type-standard'];
      case 'Бизнес': return styles['type-business'];
      case 'Премиум': return styles['type-premium'];
      case 'Эксклюзив': return styles['type-exclusive'];
      default: return '';
    }
  };

  if (!currentProduct) {
    return <div>Нет продуктов</div>;
  }

  return (
    <div className={styles['product-slider']}>
      <div className={"container"}>
        <button 
          className={`${styles['product-slider__arrow']} ${styles['product-slider__arrow--prev']}`} 
          onClick={goToPrevType}
        >
          <PrevArrowIcon />
        </button>
        <div className={styles['product-card']}>
          <div className={styles['product-card__image']}>
            <img src={currentProduct.image} alt={currentProduct.name} />
          </div>
          <div className={styles['product-card__content']}>
            <h2 className={styles['product-card__title']}>{currentProduct.name}</h2>
            <p className={styles['product-card__description']}>{currentProduct.description}</p>
            <div className={styles['product-card__characteristics']}>
              {currentProduct.characteristics.map((char, idx) => (
                <div key={idx} className={styles['characteristic']}>
                  <span className={styles['characteristic__name']}>{char.name}</span>
                  <span className={styles['characteristic__dots']}></span>
                  <span className={styles['characteristic__value']}>{char.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <button 
          className={`${styles['product-slider__arrow']} ${styles['product-slider__arrow--next']}`} 
          onClick={goToNextType}
        >
          <NextArrowIcon />
        </button>
      </div>
    </div>
  );
};

export default ProductSlider;