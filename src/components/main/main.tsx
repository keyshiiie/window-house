// Main.tsx
import React from 'react';
import MainAdvantages from './components/MainQuality.tsx';
import styles from './main.module.scss';
import RequestForm from '../common/RequestForm/RequestForm.tsx';
import type {RequestFormData} from '../common/RequestForm/types.ts';

const Main: React.FC = () => {
  const handleSubmit = (data: RequestFormData) => {
    console.log('Данные формы:', data);
    // Здесь можно добавить отправку на сервер
  };

  return (
    <main className={styles.main}>
      <div className="container">
        <div className={styles.main__row}>
          <div className={styles.main__hero}>
            <p className={styles.main__subtitle}>Окна Хаус -</p>
            <h1 className={styles.main__title}>
                Профессиональный подход к остеклению
            </h1>
            <MainAdvantages/>
          </div>
          <RequestForm
            title="Вызвать замерщика на дом"
            buttonText="Отправить заявку"
            variant="main"
            showPhone={true}
            showComment={false}
            onSubmit={handleSubmit}
          />
        </div>
      </div>
    </main>
  );
};

export default Main;