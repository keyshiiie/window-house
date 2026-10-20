// src/components/certificates/data/certificates.data.ts
import type { Certificate } from '../types/certificates.types';

const base = import.meta.env.BASE_URL;

export const certificates: Certificate[] = [
  { id: 1, src: `${base}images/certificate/01.jpg`, alt: 'Сертификат 1' },
  { id: 2, src: `${base}images/certificate/02.jpg`, alt: 'Сертификат 2' },
  { id: 3, src: `${base}images/certificate/03.jpg`, alt: 'Сертификат 3' },
  { id: 4, src: `${base}images/certificate/04.jpg`, alt: 'Сертификат 4' },
  { id: 5, src: `${base}images/certificate/05.jpg`, alt: 'Сертификат 5' },
  { id: 6, src: `${base}images/certificate/6.jpg`, alt: 'Сертификат 6' },
  { id: 7, src: `${base}images/certificate/7.jpg`, alt: 'Сертификат 7' },
  { id: 8, src: `${base}images/certificate/8.jpg`, alt: 'Сертификат 8' },
  { id: 9, src: `${base}images/certificate/9.jpg`, alt: 'Сертификат 9' },
  { id: 10, src: `${base}images/certificate/10.jpg`, alt: 'Сертификат 10' },
];