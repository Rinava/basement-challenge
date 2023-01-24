import {Product} from "./product";

interface Result {
  products: Product[];
  loading: boolean;
  error: boolean;
}

export type {Result, Product};
