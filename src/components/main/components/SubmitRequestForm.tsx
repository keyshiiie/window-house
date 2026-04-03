// src/components/main/components/SubmitRequestForm.tsx
import React, { useState } from 'react';
import type { SubmitRequestFormData } from '../types/SubmitRequestFormData.types';
import styles from '../main.module.scss';
import serviceStyles from '../../services/serviceDetail.module.scss';

interface SubmitRequestFormProps {
    onSubmit?: (data: SubmitRequestFormData) => void;
    onClose?: () => void; // ← добавляем обратно onClose
    title?: string;
    buttonText?: string;
    requestType?: 'measure' | 'calculation';
    variant?: 'default' | 'measure' | 'calculation';
}

const SubmitRequestForm: React.FC<SubmitRequestFormProps> = ({ 
    onSubmit,
    onClose, // ← добавляем в параметры
    title = "Вызвать замерщика на дом",
    buttonText = "Отправить заявку",
    requestType,
    variant = 'default'
}) => {
    const [formData, setFormData] = useState<SubmitRequestFormData>({
        name: '',
        phone: '',
        email: '',
        requestType: requestType
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
        
        if (!isAgreed) {
            alert('Необходимо согласие на обработку персональных данных');
            return;
        }
        
        if (!validate()) return;
        
        setIsSubmitting(true);
        
        try {
            console.log('Отправка формы:', { ...formData, requestType });
            await new Promise(resolve => setTimeout(resolve, 1000));
            
            onSubmit?.({ ...formData, requestType });
            
            setFormData({
                name: '',
                phone: '',
                email: '',
                requestType: requestType
            });
            setIsAgreed(false);
            
            alert(`Заявка на ${requestType === 'measure' ? 'замер' : 'расчет'} успешно отправлена!`);
            onClose?.(); // ← закрываем форму после отправки
        } catch (error) {
            console.error('Ошибка отправки:', error);
            alert('Произошла ошибка. Попробуйте позже.');
        } finally {
            setIsSubmitting(false);
        }
    };

    // Выбираем стили в зависимости от варианта
    const getStyles = () => {
        if (variant === 'measure') {
            return {
                container: serviceStyles.formModalMeasure,
                title: serviceStyles.formModalMeasure__title,
                form: serviceStyles.formModalMeasure__form,
                input: serviceStyles.formModalMeasure__input,
                inputError: serviceStyles.formModalMeasure__inputError,
                error: serviceStyles.formModalMeasure__error,
                checkbox: serviceStyles.formModalMeasure__checkbox,
                checkboxText: serviceStyles.formModalMeasure__checkboxText,
                button: serviceStyles.formModalMeasure__button
            };
        }
        
        if (variant === 'calculation') {
            return {
                container: serviceStyles.formModalCalculation,
                title: serviceStyles.formModalCalculation__title,
                form: serviceStyles.formModalCalculation__form,
                input: serviceStyles.formModalCalculation__input,
                inputError: serviceStyles.formModalCalculation__inputError,
                error: serviceStyles.formModalCalculation__error,
                checkbox: serviceStyles.formModalCalculation__checkbox,
                checkboxText: serviceStyles.formModalCalculation__checkboxText,
                button: serviceStyles.formModalCalculation__button
            };
        }
        
        // default (для главной страницы)
        return {
            container: styles.requestForm,
            title: styles.requestForm__title,
            form: styles.requestForm__form,
            input: styles.requestForm__input,
            inputError: styles.requestForm__inputError,
            error: styles.requestForm__error,
            checkbox: styles.requestForm__checkbox,
            checkboxText: styles.requestForm__checkboxText,
            button: styles.requestForm__button
        };
    };

    const currentStyles = getStyles();

    return (
        <div className={currentStyles.container}>
            <h3 className={currentStyles.title}>{title}</h3>
            <form onSubmit={handleSubmit} className={currentStyles.form}>
                <div className={styles.requestForm__field}>
                    <input
                        type="text"
                        name="name"
                        placeholder="Ваше имя*"
                        value={formData.name}
                        onChange={handleChange}
                        className={`${currentStyles.input} ${errors.name ? currentStyles.inputError : ''}`}
                        disabled={isSubmitting}
                    />
                    {errors.name && (
                        <span className={currentStyles.error}>{errors.name}</span>
                    )}
                </div>
                
                <div className={styles.requestForm__field}>
                    <input
                        type="tel"
                        name="phone"
                        placeholder="Телефон*"
                        value={formData.phone}
                        onChange={handleChange}
                        className={`${currentStyles.input} ${errors.phone ? currentStyles.inputError : ''}`}
                        disabled={isSubmitting}
                    />
                    {errors.phone && (
                        <span className={currentStyles.error}>{errors.phone}</span>
                    )}
                </div>
                
                <div className={styles.requestForm__field}>
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`${currentStyles.input} ${errors.email ? currentStyles.inputError : ''}`}
                        disabled={isSubmitting}
                    />
                    {errors.email && (
                        <span className={currentStyles.error}>{errors.email}</span>
                    )}
                </div>
                
                <div className={styles.requestForm__agreement}>
                    <label className={currentStyles.checkbox}>
                        <input
                            type="checkbox"
                            checked={isAgreed}
                            onChange={(e) => setIsAgreed(e.target.checked)}
                            disabled={isSubmitting}
                        />
                        <span></span>
                        <p className={currentStyles.checkboxText}>
                            Согласен на обработку персональных данных 
                            в соответствии с <a href="/privacy-policy" target="_blank" rel="noopener noreferrer">политикой конфиденциальности</a>
                        </p>
                    </label>
                </div>
                
                <button 
                    type="submit" 
                    className={currentStyles.button}
                    disabled={isSubmitting}
                >
                    {isSubmitting ? 'Отправка...' : buttonText}
                </button>
            </form>
        </div>
    );
};

export default SubmitRequestForm;