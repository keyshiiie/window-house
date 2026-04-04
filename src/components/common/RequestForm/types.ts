// src/components/common/RequestForm/types.ts
export interface RequestFormProps {
  title: string;
  buttonText: string;
  variant?: 'orange' | 'white' | 'main';
  onSubmit: (data: RequestFormData) => void;
  className?: string;
}

export interface RequestFormData {
  name: string;
  phone: string;
  email: string;
  consent: boolean;
}

export interface FormErrors {
  name?: string;
  phone?: string;
  email?: string;
  consent?: string;
}