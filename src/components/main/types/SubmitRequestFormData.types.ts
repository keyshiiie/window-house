// src/components/main/types/SubmitRequestFormData.ts
export interface SubmitRequestFormData {
    name: string;
    phone: string;
    email: string;
    requestType?: 'measure' | 'calculation'; // добавляем тип заявки
}