// src/components/certificates/components/CertificatesSlider.tsx
import React, { useState, useEffect } from 'react';
import { PrevArrowIcon, NextArrowIcon } from '../../../../../ui/ArrowIcons';
import type { Certificate } from '../types/certificates.types';
import { certificates as defaultCertificates } from '../data/certificates.data';
import styles from './CertificatesSlider.module.scss';

interface CertificatesSliderProps {
  certificates?: Certificate[];
}

const CertificatesSlider: React.FC<CertificatesSliderProps> = ({ 
  certificates = defaultCertificates,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  
  // Определяем ширину экрана
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  // На мобилках: 1 сертификат, на планшетах/десктопе: 5 сертификатов
  const itemsPerPage = isMobile ? 1 : 5;
  const totalPages = Math.ceil(certificates.length / itemsPerPage);
  
  // Для десктопа - пагинация страницами
  // Для мобилок - индексы для свайпа
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const goToPrev = () => {
    if (isMobile) {
      setCurrentIndex((prev) => (prev === 0 ? certificates.length - 1 : prev - 1));
    } else {
      setCurrentIndex((prev) => (prev === 0 ? totalPages - 1 : prev - 1));
    }
  };

  const goToNext = () => {
    if (isMobile) {
      setCurrentIndex((prev) => (prev === certificates.length - 1 ? 0 : prev + 1));
    } else {
      setCurrentIndex((prev) => (prev === totalPages - 1 ? 0 : prev + 1));
    }
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
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

  const getCurrentCertificates = () => {
    if (isMobile) {
      return [certificates[currentIndex]];
    } else {
      const start = currentIndex * itemsPerPage;
      const end = start + itemsPerPage;
      return certificates.slice(start, end);
    }
  };

  const currentCertificates = getCurrentCertificates();
  const totalItems = isMobile ? certificates.length : totalPages;

  if (!certificates.length) {
    return <div>Нет сертификатов</div>;
  }

  return (
    <div className={styles['certificates-slider']}>
      <div className={styles['certificates-slider__container']}>
        {!isMobile && totalPages > 1 && (
          <button 
            className={`${styles['certificates-slider__arrow']} ${styles['certificates-slider__arrow--prev']}`}
            onClick={goToPrev}
            aria-label="Предыдущая страница"
          >
            <PrevArrowIcon />
          </button>
        )}
        
        <div 
          className={styles['certificates-slider__grid']}
          onTouchStart={isMobile ? handleTouchStart : undefined}
          onTouchMove={isMobile ? handleTouchMove : undefined}
          onTouchEnd={isMobile ? handleTouchEnd : undefined}
        >
          {currentCertificates.map((certificate, idx) => (
            <div key={certificate.id} className={styles['certificate-item']}>
              <div className={styles['image-wrapper']}>
                <img 
                  src={certificate.src} 
                  alt={certificate.alt}
                  className={styles['certificate-image']}
                />
              </div>
            </div>
          ))}
        </div>
        
        {!isMobile && totalPages > 1 && (
          <button 
            className={`${styles['certificates-slider__arrow']} ${styles['certificates-slider__arrow--next']}`}
            onClick={goToNext}
            aria-label="Следующая страница"
          >
            <NextArrowIcon />
          </button>
        )}
      </div>
      
      {/* Доты для мобилок */}
      {isMobile && certificates.length > 1 && (
        <div className={styles['certificates-slider__dots']}>
          {certificates.map((_, index) => (
            <button
              key={index}
              className={`${styles['dot']} ${index === currentIndex ? styles['dot--active'] : ''}`}
              onClick={() => goToSlide(index)}
              aria-label={`Перейти к сертификату ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default CertificatesSlider;