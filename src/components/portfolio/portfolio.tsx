// src/components/portfolio/portfolio.tsx
import React from 'react';
import PortfolioSlider from './components/PortfolioSlider';
import styles from './portfolio.module.scss';

const Portfolio: React.FC = () => {
  return (
    <section className={styles.portfolio} id='portfolio'>
      <div className={"container"}>
        <div className={styles.portfolio__content}>
          <h2 className={styles.portfolio__title}>Портфолио</h2>
          <PortfolioSlider />
        
          <div className={styles.portfolio__map}>
            <div className={styles.mapContainer}>
              <iframe
                src="https://yandex.ru/map-widget/v1/?um=constructor%3A123456789&source=constructor"
                width="100%"
                height="400"
                frameBorder="0"
                allowFullScreen
                title="Карта проектов"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;