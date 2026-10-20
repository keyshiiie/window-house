// src/components/products/data/quality.data.ts
import type { Quality } from '../../../types/quality.types';

const base = import.meta.env.BASE_URL;

export const qualityData: Quality[] = [
    {
        id: 1,
        title: 'Сертифицированный производитель Rehau',
        icon: `${base}icons/quality/01.svg`
    },
    {
        id: 2,
        title: 'Инновационный оконный завод',
        icon: `${base}icons/quality/02.svg`
    },
    {
        id: 3,
        title: 'Лидер по переработке профилей Rehau в России',
        icon: `${base}icons/quality/03.svg`
    },
    {
        id: 4,
        title: 'Высокотехнологичное автоматизированное оборудование',
        icon: `${base}icons/quality/04.svg`
    },
    {
        id: 5,
        title: 'Широкий ассортимент продукции',
        icon: `${base}icons/quality/05.svg`
    }
];