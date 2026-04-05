// src/components/common/RequestForm/RequestForm.tsx
import React, { useState } from 'react';
import styles from './RequestForm.module.scss';
import type { RequestFormProps, RequestFormData, FormErrors } from './types';

const RequestForm: React.FC<RequestFormProps> = ({ 
  title, 
  buttonText, 
  variant = 'white',
  onSubmit,
  className,
  showPhone = true,
  showComment = false,
  commentPlaceholder = 'Ваш комментарий',
  consentText = 'Согласен на обработку персональных данных в соответствии с политикой конфиденциальности',
  requiredFields = ['name', 'phone', 'email', 'consent']
}) => {
  const [formData, setFormData] = useState<RequestFormData>({
    name: '',
    phone: '',
    email: '',
    comment: '',
    consent: false
  });
  
  const [errors, setErrors] = useState<FormErrors>({});

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    
    if (requiredFields.includes('name') && !formData.name.trim()) {
      newErrors.name = 'Введите ваше имя';
    }
    
    if (requiredFields.includes('phone') && !formData.phone?.trim()) {
      newErrors.phone = 'Введите номер телефона';
    } else if (requiredFields.includes('phone') && formData.phone && !/^[\d\s\+\(\)\-]{10,}$/.test(formData.phone)) {
      newErrors.phone = 'Введите корректный номер';
    }
    
    if (requiredFields.includes('email') && !formData.email.trim()) {
      newErrors.email = 'Введите email';
    } else if (requiredFields.includes('email') && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Введите корректный email';
    }
    
    if (requiredFields.includes('comment') && !formData.comment?.trim()) {
      newErrors.comment = 'Введите комментарий';
    }
    
    if (requiredFields.includes('consent') && !formData.consent) {
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
        
        {showPhone && (
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
        )}
        
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
        
        {showComment && (
          <div className={styles.requestForm__field}>
            <textarea
              placeholder={commentPlaceholder}
              value={formData.comment}
              onChange={(e) => handleChange('comment', e.target.value)}
              className={`${styles.requestForm__textarea} ${errors.comment ? styles.requestForm__inputError : ''}`}
              rows={4}
            />
            {errors.comment && <span className={styles.requestForm__error}>{errors.comment}</span>}
          </div>
        )}
        
        <label className={styles.requestForm__checkbox}>
          <input
            type="checkbox"
            checked={formData.consent}
            onChange={(e) => handleChange('consent', e.target.checked)}
          />
          <span></span>
          <span className={styles.requestForm__checkboxText}>
            {consentText}
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