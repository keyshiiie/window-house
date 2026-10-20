// src/components/companyinfo/data/quality.data.ts
import type { Quality } from '../../../../../types/quality.types';

const base = import.meta.env.BASE_URL;

export const qualityData: Quality[] = [
    {
        id: 1,
        title: 'Бесплатно приедем',
        description: 'Выезжаем бесплатно во все города Московской области',
        icon: `${base}icons/quality/howwework/01.svg`
    },
    {
        id: 2,
        title: 'Выезжаем ежедневно',
        description: 'С 9 до 21 без выходных и праздников',
        icon: `${base}icons/quality/howwework/02.svg`
    },
    {
        id: 3,
        title: 'Образцы с собой',
        description: 'Покажем образцы профильных систем и материалов отделки',
        icon: `${base}icons/quality/howwework/03.svg`
    },
    {
        id: 4,
        title: 'Стоимость',
        description: 'Называем точную стоимость заказа на месте',
        icon: `${base}icons/quality/howwework/04.svg`
    }
];