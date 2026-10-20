// src/components/companyinfo/data/quality.data.ts
import type { Quality } from '../../../types/quality.types';

const base = import.meta.env.BASE_URL;

export const qualityData: Quality[] = [
    {
        id: 1,
        title: 'профессионализм',
        description: 'Бригада профессиональных мастеров по монтажу и обслуживанию',
        icon: `${base}icons/companyinfo/01.svg`
    },
    {
        id: 2,
        title: 'Ценообразование',
        description: 'Лучшие цены на рынке пластиковых окон',
        icon: `${base}icons/companyinfo/02.svg`
    },
    {
        id: 3,
        title: 'Мобильность',
        description: 'Заключение договора на дому',
        icon: `${base}icons/companyinfo/03.svg`
    },
    {
        id: 4,
        title: 'Лояльность',
        description: '99% клиентов рекомендуют нас своим друзьям',
        icon: `${base}icons/companyinfo/04.svg`
    },
    {
        id: 5,
        title: 'Скорость',
        description: 'Короткие сроки установки изделий',
        icon: `${base}icons/companyinfo/05.svg`
    },
    {
        id: 6,
        title: 'Служба качества',
        description: 'Безупречное качество и контроль изделий ПВХ',
        icon: `${base}icons/companyinfo/06.svg`
    }
];