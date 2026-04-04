// src/components/portfolio/types/portfolio.types.ts
export interface PortfolioImage {
  id: number;
  src: string;
  alt: string;
  title?: string;
  location?: string;
}

export interface PortfolioSliderProps {
  images?: PortfolioImage[];
  autoPlay?: boolean;
  autoPlayInterval?: number;
}