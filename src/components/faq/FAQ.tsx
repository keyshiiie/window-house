// src/components/faq/FAQ.tsx
import React, { useState } from 'react';
import FAQItem from './components/FAQItem';
import type { FAQItem as FAQItemType } from './types/faq.types';
import { faqData } from './data/faq.data';
import styles from './FAQ.module.scss';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className={styles.faq} id='faq'>
      <div className={"container"}>
        <div className={styles.faq__content}>
          <h2 className={styles.faq__title}>Вопрос-ответ</h2>
          
          <div className={styles.faq__list}>
            {faqData.map((item, index) => (
              <FAQItem
                key={index}
                question={item.question}
                answer={item.answer}
                isOpen={openIndex === index}
                onToggle={() => toggleItem(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;