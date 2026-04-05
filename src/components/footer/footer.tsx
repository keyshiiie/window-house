// src/components/contacts/contacts.tsx
import React from 'react';
import styles from './footer.module.scss';

const Footer: React.FC = () => {
  return (
    <section className={styles.footer} id='footer'>
      <div className={"container"}>
        <div className={styles.footer__content}>
          <div className={styles.footer__logo}>
            <img src="/public/icons/logo-footer.svg" alt="" className={styles.footer__icon}/>
            <p className={styles.footer__text}>© ООО “Окна Хаус”, 2011 - 2022</p>
          </div>
          <div className={styles.footer__data}>
            <a href="" className={styles.footer__link}>Политика кофиденциальности</a>
            <a href="" className={styles.footer__link}>Пользовательское соглашение</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;