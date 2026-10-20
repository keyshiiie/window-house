// src/components/companyinfo/data/companyinfo.data.ts
import type { Companyinfo } from '../types/companyinfo.types';

const base = import.meta.env.BASE_URL;

export const companyinfo: Companyinfo[] = [
  {
    id: 1,
    image: `${base}icons/slider-mock.jpg`,
    type: 'Описание'
  },
  {
    id: 2,
    image: `${base}icons/slider-mock.jpg`,
    type: 'Как мы работаем'
  },
  {
    id: 3,
    image: `${base}icons/slider-mock.jpg`,
    type: 'Отзывы'
  },
  {
    id: 4,
    image: `${base}icons/slider-mock.jpg`,
    type: 'Сертификаты'
  }
];