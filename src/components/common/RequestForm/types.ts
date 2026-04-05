// src/components/common/RequestForm/types.ts
export interface RequestFormProps {
  title: string;
  buttonText: string;
  variant?: 'orange' | 'white' | 'main';
  onSubmit: (data: RequestFormData) => void;
  className?: string;
  // Новые опциональные пропсы
  showPhone?: boolean; // показывать поле телефона
  showComment?: boolean; // показывать поле комментария
  commentPlaceholder?: string; // плейсхолдер для комментария
  consentText?: string; // текст согласия
  requiredFields?: ('name' | 'phone' | 'email' | 'consent' | 'comment')[]; // обязательные поля
}

export interface RequestFormData {
  name: string;
  phone?: string; // теперь опционально
  email: string;
  comment?: string; // новое поле
  consent: boolean;
}

export interface FormErrors {
  name?: string;
  phone?: string;
  email?: string;
  comment?: string;
  consent?: string;
}