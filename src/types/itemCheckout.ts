import {Product} from "./product";
import type {Size} from "./product";

interface ItemCheckout {
  id: string;
  product: Product;
  quantity: number;
  size: Size;
}

export type {ItemCheckout};
