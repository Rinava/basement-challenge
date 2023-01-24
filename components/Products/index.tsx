import React from "react";

import type {Result} from "../../types";

import Product from "./Product";

interface Props {
  result: Result;
}
const Products = ({result}: Props) => {
  if (result.loading) return <p>Loading...</p>;
  if (result.error) return <p>Error</p>;

  return (
    <ul className="products">
      {result.products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </ul>
  );
};

export default Products;
