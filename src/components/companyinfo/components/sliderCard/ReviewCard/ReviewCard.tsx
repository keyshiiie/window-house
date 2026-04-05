import React from 'react';
import ReviewsSlider from './components/ReviewsSlider';
import styles from './Reviews.module.scss';

export const ReviewCard: React.FC = () => {
  const handleLeaveReview = () => {
    console.log('Открыть форму для отзыва');
    // Здесь будет логика открытия модального окна с формой
  };

  return (
    <section className={styles.reviews} id='reviews'>
      <div className="container">
        <ReviewsSlider onLeaveReview={handleLeaveReview} />
      </div>
    </section>
  );
};