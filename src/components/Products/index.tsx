import React from "react";

import type {Product as ProductType} from "../../types";

import Product from "./Product";

interface Props {
  products: ProductType[];
  className?: string;
}
const Products = ({products, className}: Props) => {
  return (
    <ul className="container grid grid-cols-1 xl:grid-cols-3 md:grid-cols-2 md:px-7 gap-8 mb-12 md:mb-14">
      {products.map((product) => (
        <Product key={product.id} className="w-full" product={product} />
      ))}
    </ul>
  );
};

export default Products;
