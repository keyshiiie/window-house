// src/components/services/components/ServiceDetailSlider.tsx
import React, { useState } from 'react';
import styles from '../serviceDetail.module.scss';

interface ServiceDetailSliderProps {
    images: string[];
    title: string;
}

export const ServiceDetailSlider: React.FC<ServiceDetailSliderProps> = ({ images, title }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    return (
        <div className={styles.slider}>
            <div className={styles.slider__main}>
                <button className={styles.slider__prev} onClick={prevSlide}>
                    ‹
                </button>
                <img 
                    src={images[currentIndex]} 
                    alt={`${title} - изображение ${currentIndex + 1}`}
                    className={styles.slider__image}
                />
                <button className={styles.slider__next} onClick={nextSlide}>
                    ›
                </button>
            </div>
            <div className={styles.slider__thumbnails}>
                {images.map((img, index) => (
                    <button
                        key={index}
                        className={`${styles.slider__thumbnail} ${index === currentIndex ? styles.slider__thumbnailActive : ''}`}
                        onClick={() => setCurrentIndex(index)}
                    >
                        <img src={img} alt={`Миниатюра ${index + 1}`} />
                    </button>
                ))}
            </div>
        </div>
    );
};