// src/components/portfolio/components/PortfolioSlider.tsx
import React, { useState, useEffect } from 'react';
import { PrevArrowIcon, NextArrowIcon } from '../../ui/ArrowIcons';
import type { PortfolioImage, PortfolioSliderProps } from '../types/portfolio.types';
import { portfolioImages as defaultImages } from '../data/portfolio.data';
import styles from './PortfolioSlider.module.scss';

const PortfolioSlider: React.FC<PortfolioSliderProps> = ({ 
  images = defaultImages,
  autoPlay = false,
  autoPlayInterval = 3000
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  
  // Определяем ширину экрана
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  // На мобилках: 1 картинка, на планшетах/десктопе: 4 картинки
  const imagesPerPage = isMobile ? 1 : 4;
  const totalPages = Math.ceil(images.length / imagesPerPage);

  // Эффект для автовоспроизведения (опционально)
  React.useEffect(() => {
    if (autoPlay && !isHovered && totalPages > 1) {
      const interval = setInterval(() => {
        goToNext();
      }, autoPlayInterval);
      
      return () => clearInterval(interval);
    }
  }, [autoPlay, autoPlayInterval, isHovered, currentIndex, totalPages]);

  const goToPrev = () => {
    if (isMobile) {
      setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    } else {
      setCurrentIndex((prev) => (prev === 0 ? totalPages - 1 : prev - 1));
    }
  };

  const goToNext = () => {
    if (isMobile) {
      setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    } else {
      setCurrentIndex((prev) => (prev === totalPages - 1 ? 0 : prev + 1));
    }
  };

  const goToPage = (page: number) => {
    setCurrentIndex(page);
  };

  // Обработчики свайпов
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;
    
    if (isLeftSwipe) {
      goToNext();
    }
    if (isRightSwipe) {
      goToPrev();
    }
    
    setTouchStart(0);
    setTouchEnd(0);
  };

  // Получаем текущие изображения для отображения
  const getCurrentImages = () => {
    if (isMobile) {
      return [images[currentIndex]];
    } else {
      const start = currentIndex * imagesPerPage;
      const end = start + imagesPerPage;
      return images.slice(start, end);
    }
  };

  const currentImages = getCurrentImages();
  const totalItems = isMobile ? images.length : totalPages;

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
        {!isMobile && totalPages > 1 && (
          <button 
            className={`${styles['portfolio-slider__arrow']} ${styles['portfolio-slider__arrow--prev']}`}
            onClick={goToPrev}
            aria-label="Предыдущая страница"
          >
            <PrevArrowIcon />
          </button>
        )}
        
        <div 
          className={styles['portfolio-slider__grid']}
          onTouchStart={isMobile ? handleTouchStart : undefined}
          onTouchMove={isMobile ? handleTouchMove : undefined}
          onTouchEnd={isMobile ? handleTouchEnd : undefined}
        >
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
        
        {!isMobile && totalPages > 1 && (
          <button 
            className={`${styles['portfolio-slider__arrow']} ${styles['portfolio-slider__arrow--next']}`}
            onClick={goToNext}
            aria-label="Следующая страница"
          >
            <NextArrowIcon />
          </button>
        )}
      </div>
      
      {/* Доты для мобилок */}
      {isMobile && images.length > 1 && (
        <div className={styles['portfolio-slider__dots']}>
          {images.map((_, index) => (
            <button
              key={index}
              className={`${styles['dot']} ${index === currentIndex ? styles['dot--active'] : ''}`}
              onClick={() => goToPage(index)}
              aria-label={`Перейти к изображению ${index + 1}`}
            />
          ))}
        </div>
      )}
      
      {/* Доты для десктопа */}
      {!isMobile && totalPages > 1 && (
        <div className={styles['portfolio-slider__dots']}>
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              className={`${styles['dot']} ${index === currentIndex ? styles['dot--active'] : ''}`}
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