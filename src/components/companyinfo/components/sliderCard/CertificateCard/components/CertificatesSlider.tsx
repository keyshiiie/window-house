// src/components/certificates/components/CertificatesSlider.tsx
import React, { useState } from 'react';
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
  const [currentPage, setCurrentPage] = useState(0);
  
  const itemsPerPage = 5; // 5 картинок на странице
  const totalPages = Math.ceil(certificates.length / itemsPerPage);

  const goToPrev = () => {
    setCurrentPage((prev) => (prev === 0 ? totalPages - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentPage((prev) => (prev === totalPages - 1 ? 0 : prev + 1));
  };

  const getCurrentCertificates = () => {
    const start = currentPage * itemsPerPage;
    const end = start + itemsPerPage;
    return certificates.slice(start, end);
  };

  const currentCertificates = getCurrentCertificates();

  if (!certificates.length) {
    return <div>Нет сертификатов</div>;
  }

  return (
    <div className={styles['certificates-slider']}>
      <div className={styles['certificates-slider__container']}>
        {totalPages > 1 && (
          <button 
            className={`${styles['certificates-slider__arrow']} ${styles['certificates-slider__arrow--prev']}`}
            onClick={goToPrev}
            aria-label="Предыдущая страница"
          >
            <PrevArrowIcon />
          </button>
        )}
        
        <div className={styles['certificates-slider__grid']}>
          {currentCertificates.map((certificate) => (
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
        
        {totalPages > 1 && (
          <button 
            className={`${styles['certificates-slider__arrow']} ${styles['certificates-slider__arrow--next']}`}
            onClick={goToNext}
            aria-label="Следующая страница"
          >
            <NextArrowIcon />
          </button>
        )}
      </div>
    </div>
  );
};

export default CertificatesSlider;