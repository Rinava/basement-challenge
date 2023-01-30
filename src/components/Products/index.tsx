import React from "react";

import {Product as ProductType} from "../../types";

import Product from "./Product";

interface ProductProps {
  products: ProductType[];
}

const Products = ({products}: ProductProps) => {
  return (
    <ul className="container grid grid-cols-1 gap-8 mb-12 md:grid-cols-2 md:px-7 md:mb-14 xl:grid-cols-3">
      {products.map((product) => (
        <Product key={product.id} className="w-full" product={product} />
      ))}
    </ul>
  );
};

export default Products;
