import {Product, Size} from "./product";

export interface CartItem {
  id: string;
  product: Product;
  quantity: number;
  size: Size;
}
