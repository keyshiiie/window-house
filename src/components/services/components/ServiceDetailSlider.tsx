// src/components/services/components/ServiceDetailSlider.tsx
import React, { useState, useRef } from 'react';
import styles from '../serviceDetail.module.scss';

interface ServiceDetailSliderProps {
    images: string[];
    title: string;
}

export const ServiceDetailSlider: React.FC<ServiceDetailSliderProps> = ({ images, title }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const sliderRef = useRef<HTMLDivElement>(null);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    const goToSlide = (index: number) => {
        setCurrentIndex(index);
    };

    // Обработчик клика по левой/правой части слайдера
    const handleSliderClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!sliderRef.current) return;
        
        const rect = sliderRef.current.getBoundingClientRect();
        const clickX = e.clientX - rect.left;
        const width = rect.width;
        
        // Если клик по левой трети - предыдущий слайд
        if (clickX < width / 3) {
            prevSlide();
        }
        // Если клик по правой трети - следующий слайд
        else if (clickX > (width * 2) / 3) {
            nextSlide();
        }
    };

    return (
        <div className={styles.slider}>
            <div 
                className={styles.slider__main}
                ref={sliderRef}
                onClick={handleSliderClick}
            >
                <img 
                    src={images[currentIndex]} 
                    alt={`${title} - изображение ${currentIndex + 1}`}
                    className={styles.slider__image}
                />
            </div>
            
            {/* Кружочки (точки) */}
            <div className={styles.slider__dots}>
                {images.map((_, index) => (
                    <button
                        key={index}
                        className={`${styles.slider__dot} ${index === currentIndex ? styles.slider__dotActive : ''}`}
                        onClick={() => goToSlide(index)}
                        aria-label={`Перейти к изображению ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
};