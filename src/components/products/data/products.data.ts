// src/components/products/data/productsData.ts
import type { Product } from '../types/product.types';

export const products: Product[] = [
  {
    id: 1,
    name: 'Rehau Blitz New',
    description: 'Сохраняют тепло в доме, защищают от шума и вписываются в любой интерьер. Практичный выбор',
    image: '/images/window-standart.jpg',
    type: 'Стандарт',
    characteristics: [
      { name: 'Системная глубина', value: '60/60 мм' },
      { name: 'Ширина стеклопакета', value: '24/31 мм' },
      { name: 'Воздушные камеры', value: '3' },
      { name: 'Теплосопротивление', value: '0,70 м2С/Вт' },
    ],
  },
  {
    id: 2,
    name: 'Rehau Geneo',
    description: 'Инновационная система с максимальной энергоэффективностью и современным дизайном',
    image: '/images/window-standart.jpg',
    type: 'Бизнес',
    characteristics: [
      { name: 'Системная глубина', value: '76/76 мм' },
      { name: 'Ширина стеклопакета', value: '36/44 мм' },
      { name: 'Воздушные камеры', value: '5' },
      { name: 'Теплосопротивление', value: '0,95 м2С/Вт' },
    ],
  },
  {
    id: 3,
    name: 'Rehau Brilliant',
    description: 'Превосходная звукоизоляция и стильный дизайн для требовательных клиентов',
    image: '/images/window-standart.jpg',
    type: 'Премиум',
    characteristics: [
      { name: 'Системная глубина', value: '70/70 мм' },
      { name: 'Ширина стеклопакета', value: '30/42 мм' },
      { name: 'Воздушные камеры', value: '4' },
      { name: 'Теплосопротивление', value: '0,82 м2С/Вт' },
    ],
  },
  {
    id: 4,
    name: 'Rehau Edge',
    description: 'Эксклюзивная серия с уникальными решениями и материалами премиум-класса',
    image: '/images/window-standart.jpg',
    type: 'Эксклюзив',
    characteristics: [
      { name: 'Системная глубина', value: '86/86 мм' },
      { name: 'Ширина стеклопакета', value: '42/50 мм' },
      { name: 'Воздушные камеры', value: '6' },
      { name: 'Теплосопротивление', value: '1,12 м2С/Вт' },
    ],
  },
];