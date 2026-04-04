// src/components/common/RequestForm/RequestForm.tsx
import React, { useState } from 'react';
import styles from './RequestForm.module.scss';
import type { RequestFormProps, RequestFormData, FormErrors } from './types';

const RequestForm: React.FC<RequestFormProps> = ({ 
  title, 
  buttonText, 
  variant = 'white',
  onSubmit,
  className 
}) => {
  const [formData, setFormData] = useState<RequestFormData>({
    name: '',
    phone: '',
    email: '',
    consent: false
  });
  
  const [errors, setErrors] = useState<FormErrors>({});

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Введите ваше имя';
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = 'Введите номер телефона';
    } else if (!/^[\d\s\+\(\)\-]{10,}$/.test(formData.phone)) {
      newErrors.phone = 'Введите корректный номер';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Введите email';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Введите корректный email';
    }
    
    if (!formData.consent) {
      newErrors.consent = 'Необходимо дать согласие';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      onSubmit(formData);
    }
  };

  const handleChange = (field: keyof RequestFormData, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  return (
    <div className={`${styles.requestForm} ${styles[`requestForm--${variant}`]} ${className || ''}`}>
      <h3 className={styles.requestForm__title}>{title}</h3>
      
      <form onSubmit={handleSubmit} className={styles.requestForm__form}>
        <div className={styles.requestForm__field}>
          <input
            type="text"
            placeholder="Ваше имя"
            value={formData.name}
            onChange={(e) => handleChange('name', e.target.value)}
            className={`${styles.requestForm__input} ${errors.name ? styles.requestForm__inputError : ''}`}
          />
          {errors.name && <span className={styles.requestForm__error}>{errors.name}</span>}
        </div>
        
        <div className={styles.requestForm__field}>
          <input
            type="tel"
            placeholder="Номер телефона"
            value={formData.phone}
            onChange={(e) => handleChange('phone', e.target.value)}
            className={`${styles.requestForm__input} ${errors.phone ? styles.requestForm__inputError : ''}`}
          />
          {errors.phone && <span className={styles.requestForm__error}>{errors.phone}</span>}
        </div>
        
        <div className={styles.requestForm__field}>
          <input
            type="email"
            placeholder="E-mail"
            value={formData.email}
            onChange={(e) => handleChange('email', e.target.value)}
            className={`${styles.requestForm__input} ${errors.email ? styles.requestForm__inputError : ''}`}
          />
          {errors.email && <span className={styles.requestForm__error}>{errors.email}</span>}
        </div>
        
        <label className={styles.requestForm__checkbox}>
          <input
            type="checkbox"
            checked={formData.consent}
            onChange={(e) => handleChange('consent', e.target.checked)}
          />
          <span></span> {/* Это кастомный чекбокс */}
          <span className={styles.requestForm__checkboxText}>
            Согласен на обработку персональных данных 
            в соответствии с <a href="/privacy">политикой конфиденциальности</a>
          </span>
        </label>
        {errors.consent && <span className={styles.requestForm__error}>{errors.consent}</span>}
        
        <button type="submit" className={styles.requestForm__button}>
          {buttonText}
        </button>
      </form>
    </div>
  );
};

export default RequestForm;