// src/components/companyinfo/components/sliderCard/CertificateCard/CertificateCard.tsx
import React from 'react';
import CertificatesSlider from './components/CertificatesSlider';
import styles from './CertificateCard.module.scss'; // Теперь путь правильный

export const CertificateCard: React.FC = () => {
  return (
    <section className={styles.certificates} id='certificates'>
      <div className="container">
        <CertificatesSlider />
      </div>
    </section>
  );
};