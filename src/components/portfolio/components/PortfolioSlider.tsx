// src/components/portfolio/components/PortfolioSlider.tsx
import React, { useState } from 'react';
import { PrevArrowIcon, NextArrowIcon } from '../../ui/ArrowIcons';
import type { PortfolioImage, PortfolioSliderProps } from '../types/portfolio.types';
import { portfolioImages as defaultImages } from '../data/portfolio.data';
import styles from './PortfolioSlider.module.scss';

const PortfolioSlider: React.FC<PortfolioSliderProps> = ({ 
  images = defaultImages,
  autoPlay = false,
  autoPlayInterval = 3000
}) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  
  const imagesPerPage = 4; // 4 картинки на странице
  const totalPages = Math.ceil(images.length / imagesPerPage);

  // Эффект для автовоспроизведения (опционально)
  React.useEffect(() => {
    if (autoPlay && !isHovered && totalPages > 1) {
      const interval = setInterval(() => {
        goToNext();
      }, autoPlayInterval);
      
      return () => clearInterval(interval);
    }
  }, [autoPlay, autoPlayInterval, isHovered, currentPage, totalPages]);

  const goToPrev = () => {
    setCurrentPage((prev) => (prev === 0 ? totalPages - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentPage((prev) => (prev === totalPages - 1 ? 0 : prev + 1));
  };

  const goToPage = (page: number) => {
    setCurrentPage(page);
  };

  // Получаем текущие изображения для отображения
  const getCurrentImages = () => {
    const start = currentPage * imagesPerPage;
    const end = start + imagesPerPage;
    return images.slice(start, end);
  };

  const currentImages = getCurrentImages();

  if (!images.length) {
    return <div>Нет изображений</div>;
  }

  return (
    <div 
      className={styles['portfolio-slider']}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={styles['portfolio-slider__container']}>
        {totalPages > 1 && (
          <button 
            className={`${styles['portfolio-slider__arrow']} ${styles['portfolio-slider__arrow--prev']}`}
            onClick={goToPrev}
            aria-label="Предыдущая страница"
          >
            <PrevArrowIcon />
          </button>
        )}
        
        <div className={styles['portfolio-slider__grid']}>
          {currentImages.map((image) => (
            <div key={image.id} className={styles['portfolio-item']}>
              <div className={styles['image-wrapper']}>
                <img 
                  src={image.src} 
                  alt={image.alt}
                  className={styles['portfolio-image']}
                />
                {(image.title || image.location) && (
                  <div className={styles['image-overlay']}>
                    {image.title && (
                      <h4 className={styles['image-title']}>{image.title}</h4>
                    )}
                    {image.location && (
                      <p className={styles['image-location']}>{image.location}</p>
                    )}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
        
        {totalPages > 1 && (
          <button 
            className={`${styles['portfolio-slider__arrow']} ${styles['portfolio-slider__arrow--next']}`}
            onClick={goToNext}
            aria-label="Следующая страница"
          >
            <NextArrowIcon />
          </button>
        )}
      </div>
      
      {totalPages > 1 && (
        <div className={styles['portfolio-slider__dots']}>
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              className={`${styles['dot']} ${index === currentPage ? styles['dot--active'] : ''}`}
              onClick={() => goToPage(index)}
              aria-label={`Перейти к странице ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default PortfolioSlider;