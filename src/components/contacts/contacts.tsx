// src/components/contacts/contacts.tsx
import React from 'react';
import styles from './contacts.module.scss';

const Contacts: React.FC = () => {
  return (
    <section className={styles.contacts} id='contacts'>
      <div className={"container"}>
        <h2 className={styles.contacts__title}>Контакты</h2>
        
        <div className={styles.contacts__wrapper}>
          <div className={styles.contacts__info}>
            <p className={styles.contacts__subtitle}>Бесплатная консультация:</p>
            
            <div className={styles.contacts__phones}>
              <img src="/public/icons/phone.svg" alt="Телефон" className={styles.contacts__icon} />
              <div className={styles.contacts__phoneItem}>
                <a href="tel:84932343140" className={styles.contacts__phone}>8 (4932) 34 - 31 - 40</a>
              </div>
              <div className={styles.contacts__phoneItem}>
                <a href="tel:89051093140" className={styles.contacts__phone}>8 (905) 109 - 31 - 40</a>
              </div>
            </div>
            
            <div className={styles.contacts__address}>
              <img src="/public/icons/address.svg" alt="Адрес" className={styles.contacts__icon} />
              <p className={styles.contacts__addressText}>г. Иваново, ул. Генерала Хлебникова, д.54, оф.303</p>
            </div>
            
            <div className={styles.contacts__email}>
              <img src="/public/icons/email.svg" alt="Email" className={styles.contacts__icon} />
              <a href="mailto:okna@haus.ru" className={styles.contacts__emailLink}>okna@haus.ru</a>
            </div>
            
            <p className={styles.contacts__description}>
              Установку должны выполнять только эксперты. Нам доверяют сотни семей. 
              Узнайте подробнее, какие решения вам подходят. 
              Вы можете приобрести недорогие товары 
              при гарантированно высоком качестве.
            </p>
            
            <div className={styles.contacts__social}>
              <a href="#" className={styles.contacts__socialLink} aria-label="Социальная сеть">
                <img src="/public/icons/social/01.svg" alt="" className={styles.contacts__socialIcon} />
              </a>
              <a href="#" className={styles.contacts__socialLink} aria-label="Социальная сеть">
                <img src="/public/icons/social/02.svg" alt="" className={styles.contacts__socialIcon} />
              </a>
              <a href="#" className={styles.contacts__socialLink} aria-label="Социальная сеть">
                <img src="/public/icons/social/03.svg" alt="" className={styles.contacts__socialIcon} />
              </a>
              <a href="#" className={styles.contacts__socialLink} aria-label="Социальная сеть">
                <img src="/public/icons/social/04.svg" alt="" className={styles.contacts__socialIcon} />
              </a>
            </div>
          </div>
          
          <div className={styles.contacts__form}>
            {/* Здесь будет форма */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;