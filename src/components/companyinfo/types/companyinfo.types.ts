// src/components/companyinfo/types/companyinfo.types.ts
export type CompanyinfoTypes = 'Описание' | 'Как мы работаем' | 'Отзывы' | 'Сертификаты';

export interface Companyinfo {
  id: number;
  image: string;
  type: CompanyinfoTypes;
}