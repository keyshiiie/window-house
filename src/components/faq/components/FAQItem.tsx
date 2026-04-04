// src/components/faq/components/FAQItem.tsx
import React from 'react';
import styles from './FAQItem.module.scss';

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer, isOpen, onToggle }) => {
  return (
    <div className={`${styles['faq-item']} ${isOpen ? styles['faq-item--open'] : ''}`}>
      <button 
        className={styles['faq-item__header']}
        onClick={onToggle}
        aria-expanded={isOpen}
      >
        <span className={styles['faq-item__question']}>{question}</span>
        <span className={`${styles['faq-item__arrow']} ${isOpen ? styles['faq-item__arrow--open'] : ''}`}>
          <svg 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              d="M6 9L12 15L18 9" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </button>
      
      <div className={styles['faq-item__answer-wrapper']}>
        <div className={styles['faq-item__answer']}>
          <p>{answer}</p>
        </div>
      </div>
    </div>
  );
};

export default FAQItem;