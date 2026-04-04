// Main.tsx
import React from 'react';
import MainAdvantages from './components/MainQuality.tsx';
import SubmitRequestForm from './components/SubmitRequestForm.tsx';
import styles from './main.module.scss';

const Main: React.FC = () => {
    const handleFormSubmit = (data: any) => {
        console.log('Форма отправлена:', data);
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
                    <SubmitRequestForm 
                        onSubmit={handleFormSubmit}
                        title="Вызвать замерщика на дом"
                        buttonText="Отправить заявку"
                    />
                </div>
            </div>
        </main>
    );
};

export default Main;