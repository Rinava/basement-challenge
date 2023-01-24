import {Product} from "../types";

import products from "./products.json";

const getProducts = async () => {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return products as Product[];
};

export default getProducts;
