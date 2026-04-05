// src/components/reviews/components/ReviewsSlider.tsx
import React, { useState } from 'react';
import { PrevArrowIcon, NextArrowIcon } from '../../../../../ui/ArrowIcons';
import type { Review } from '../types/reviews.types';
import { reviews as defaultReviews } from '../data/reviews.data';
import styles from './ReviewsSlider.module.scss';

interface ReviewsSliderProps {
  reviews?: Review[];
  onLeaveReview?: () => void;
}

const ReviewsSlider: React.FC<ReviewsSliderProps> = ({ 
  reviews = defaultReviews,
  onLeaveReview 
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const totalSlides = reviews.length;

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const currentReview = reviews[currentIndex];

  if (!reviews.length) {
    return <div>Нет отзывов</div>;
  }

  return (
    <div className={styles['reviews-slider']}>
      <div className={styles['reviews-slider__container']}>
        {totalSlides > 1 && (
          <button 
            className={`${styles['reviews-slider__arrow']} ${styles['reviews-slider__arrow--prev']}`}
            onClick={goToPrev}
            aria-label="Предыдущий отзыв"
          >
            <PrevArrowIcon />
          </button>
        )}
        
        <div className={styles['reviews-slider__content']}>
          <div className={styles['review-card']}>
            <div className={styles['review-header']}>
              <div className={styles['review-header__text']}>
                <h4 className={styles['review-name']}>{currentReview.name}</h4>
                <div className={styles['review-meta']}>
                  <span className={styles['review-date']}>{currentReview.date}</span>
                  <span className={styles['review-contract']}>{currentReview.contractNumber}</span>
                </div>
              </div>
              <button 
                className={styles['leave-review-btn']}
                onClick={onLeaveReview}
              >
                Оставить отзыв
              </button>
            </div>
        
            <div className={styles['review-text']}>
              <p>{currentReview.text}</p>
            </div>
          </div>
        </div>
        
        {totalSlides > 1 && (
          <button 
            className={`${styles['reviews-slider__arrow']} ${styles['reviews-slider__arrow--next']}`}
            onClick={goToNext}
            aria-label="Следующий отзыв"
          >
            <NextArrowIcon />
          </button>
        )}
      </div>
      
      {totalSlides > 1 && (
        <div className={styles['reviews-slider__dots']}>
          {reviews.map((_, index) => (
            <button
              key={index}
              className={`${styles['dot']} ${index === currentIndex ? styles['dot--active'] : ''}`}
              onClick={() => goToSlide(index)}
              aria-label={`Перейти к отзыву ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ReviewsSlider;