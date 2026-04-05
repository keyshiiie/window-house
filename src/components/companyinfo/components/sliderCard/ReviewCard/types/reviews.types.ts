export interface Review {
  id: number;
  name: string;
  date: string;
  contractNumber: string;
  text: string;
  rating?: number;
}