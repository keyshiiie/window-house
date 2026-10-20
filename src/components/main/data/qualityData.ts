// data/advantagesData.ts
import type { Quality } from '../../../types/quality.types';

const base = import.meta.env.BASE_URL;

export const qualityData: Quality[] = [
  {
    id: 1,
    title: '',
    description: 'Современные окна и балконные конструкции по доступным ценам',
    icon: `${base}icons/main-advantages/01.svg`
  },
  {
    id: 2,
    title: '',
    description: 'Квалифицированный подход к решению задач любой сложности',
    icon: `${base}icons/main-advantages/02.svg`
  },
  {
    id: 3,
    title: '',
    description: 'Гарантия высочайшего качества нашей продукции',
    icon: `${base}icons/main-advantages/03.svg`
  }
];