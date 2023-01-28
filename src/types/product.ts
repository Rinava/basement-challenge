export enum Size {
  S = "S",
  M = "M",
  L = "L",
  XL = "XL",
}

export interface Product {
  id: number;
  image: string;
  title: string;
  description: string;
  price: number;
  stock: {
    size: Size;
    quantity: number;
  }[];
}
