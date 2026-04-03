// src/components/products/types/product.types.ts
export type ProductType = 'Стандарт' | 'Бизнес' | 'Премиум' | 'Эксклюзив';

export interface Characteristic {
  name: string;
  value: string;
}

export interface Product {
  id: number;
  name: string;
  description: string;
  image: string; // путь к изображению
  type: ProductType;
  characteristics: Characteristic[];
}