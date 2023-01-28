import {Product} from "../types";

import products from "./products.json";

const getProducts = async () => {
  // Simulate a real API call
  await new Promise((resolve) => setTimeout(resolve, 250));

  return products as Product[];
};

export default getProducts;
