// src/components/faq/types/faq.types.ts
export interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

export interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}