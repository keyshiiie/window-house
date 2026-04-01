// components/SubmitRequestForm.tsx
import React, { useState } from 'react';
import type { SubmitRequestFormData } from '../types/SubmitRequestFormData';
import styles from '../main.module.scss';

interface SubmitRequestFormProps {
    onSubmit?: (data: SubmitRequestFormData) => void;
    title?: string;
    buttonText?: string;
}

const SubmitRequestForm: React.FC<SubmitRequestFormProps> = ({ 
    onSubmit,
    title = "Вызвать замерщика на дом",
    buttonText = "Отправить заявку"
}) => {
    const [formData, setFormData] = useState<SubmitRequestFormData>({
        name: '',
        phone: '',
        email: ''
    });
    
    const [isAgreed, setIsAgreed] = useState(false);
    const [errors, setErrors] = useState<Partial<SubmitRequestFormData>>({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        if (errors[name as keyof SubmitRequestFormData]) {
            setErrors(prev => ({ ...prev, [name]: '' }));
        }
    };

    const validate = (): boolean => {
        const newErrors: Partial<SubmitRequestFormData> = {};
        
        if (!formData.name.trim()) {
            newErrors.name = 'Введите ваше имя';
        }
        
        if (!formData.phone.trim()) {
            newErrors.phone = 'Введите номер телефона';
        } else if (!/^[\d\s\+\(\)\-]+$/.test(formData.phone)) {
            newErrors.phone = 'Введите корректный номер телефона';
        }
        
        if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = 'Введите корректный email';
        }
        
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        
        // Проверка согласия
        if (!isAgreed) {
            alert('Необходимо согласие на обработку персональных данных');
            return;
        }
        
        if (!validate()) return;
        
        setIsSubmitting(true);
        
        try {
            console.log('Отправка формы:', formData);
            await new Promise(resolve => setTimeout(resolve, 1000));
            
            // Отправляем только данные формы, без isAgreed
            onSubmit?.(formData);
            
            // Очищаем форму
            setFormData({
                name: '',
                phone: '',
                email: ''
            });
            setIsAgreed(false);
            
            alert('Заявка успешно отправлена!');
        } catch (error) {
            console.error('Ошибка отправки:', error);
            alert('Произошла ошибка. Попробуйте позже.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className={styles.requestForm}>
            <h3 className={styles.requestForm__title}>{title}</h3>
            <form onSubmit={handleSubmit} className={styles.requestForm__form}>
                <div className={styles.requestForm__field}>
                    <input
                        type="text"
                        name="name"
                        placeholder="Ваше имя*"
                        value={formData.name}
                        onChange={handleChange}
                        className={`${styles.requestForm__input} ${errors.name ? styles.requestForm__inputError : ''}`}
                        disabled={isSubmitting}
                    />
                    {errors.name && (
                        <span className={styles.requestForm__error}>{errors.name}</span>
                    )}
                </div>
                
                <div className={styles.requestForm__field}>
                    <input
                        type="tel"
                        name="phone"
                        placeholder="Телефон*"
                        value={formData.phone}
                        onChange={handleChange}
                        className={`${styles.requestForm__input} ${errors.phone ? styles.requestForm__inputError : ''}`}
                        disabled={isSubmitting}
                    />
                    {errors.phone && (
                        <span className={styles.requestForm__error}>{errors.phone}</span>
                    )}
                </div>
                
                <div className={styles.requestForm__field}>
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`${styles.requestForm__input} ${errors.email ? styles.requestForm__inputError : ''}`}
                        disabled={isSubmitting}
                    />
                    {errors.email && (
                        <span className={styles.requestForm__error}>{errors.email}</span>
                    )}
                </div>
                
                {/* Согласие на обработку персональных данных */}
                <div className={styles.requestForm__agreement}>
                    <label className={styles.requestForm__checkbox}>
                        <input
                            type="checkbox"
                            checked={isAgreed}
                            onChange={(e) => setIsAgreed(e.target.checked)}
                            disabled={isSubmitting}
                        />
                        <span></span> {/* Это span нужен для кастомного чекбокса */}
                        <p className={styles.requestForm__checkboxText}>
                            Согласен на обработку персональных данных 
                            в соответствии с <a href="/privacy-policy" target="_blank" rel="noopener noreferrer">политикой конфиденциальности</a>
                        </p>
                    </label>
                </div>
                
                <button 
                    type="submit" 
                    className={styles.requestForm__button}
                    disabled={isSubmitting}
                >
                    {isSubmitting ? 'Отправка...' : buttonText}
                </button>
            </form>
        </div>
    );
};

export default SubmitRequestForm;