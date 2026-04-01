// src/components/services/types/Services.ts
export interface Services {
    id: number;
    title: string;
    description: string;
    icon: string;
    backgroundImage: string;
    // Добавляем поля для детальной страницы
    fullDescription?: string;
    price?: string;
    images?: string[]; // массив изображений для слайдера
    features?: Feature[]; // дополнительные характеристики
}

export interface Feature {
    id: number;
    title: string;
    description: string;
    icon: string;
}