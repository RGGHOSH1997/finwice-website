export interface Product {
  id: number;
  title: string;
  price: number;
  oldPrice: number | null | undefined;
  imgSrc: string;
  delay?: string;
  categories?: string[];
}
