export enum Size {
  S = "S",
  M = "M",
  L = "L",
  XL = "XL",
}

export type SizeWithStock = {
  size: Size;
  quantity: number;
};

interface Product {
  id: number;
  image: string;
  title: string;
  description: string;
  price: number;
  stock: SizeWithStock[];
}

export type {Product};
