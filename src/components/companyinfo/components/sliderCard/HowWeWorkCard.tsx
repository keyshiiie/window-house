import React from 'react';
import styles from './HowWeWorkCard.module.scss';

export const HowWeWorkCard: React.FC = () => {
  return (
    <div className={styles.howWeWorkCard}>
      <div className={styles.howWeWorkCard__content}>
        <div className={styles.howWeWorkCard__header}>
          <div className={styles.howWeWorkCard__image}>
            <img 
              src={"/public/icons/logo.svg"} 
              alt={"Информация о компании"} 
            />
          </div>
          <div className={styles.howWeWorkCard__text}>
            <p>
              Мы помогаем клиентам подбирать решения, учитывая пожелания и характеристики 
              окна и его стоимости. Окно - это объект, который Вы будете пользоваться много 
              лет, поэтому для нас очень важно, чтобы Вы сделали правильный выбор.
            </p>
          </div>
        </div>
        <div className={styles.howWeWorkCard__video}>
          <video 
            controls 
            autoPlay={false} 
            muted 
            loop
            className={styles.videoPlayer}
            poster="/public/images/video-bg.jpg"
          >
            <source src="/videos/company-presentation.mp4" type="video/mp4" />
            <source src="/videos/company-presentation.webm" type="video/webm" />
            Ваш браузер не поддерживает видео.
          </video>
        </div>
      </div>
    </div>
  );
};