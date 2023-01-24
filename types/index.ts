import {Product} from "./product";

interface Result {
  products: Product[];
  loading: boolean;
  error: boolean;
}

interface ItemCheckout {
  id: number;
  product: Product;
  quantity: number;
  total: number;
}

export type {Result, Product};
