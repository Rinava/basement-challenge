import type {NextPage} from "next";
import {useState, useEffect} from "react";

import Products from "../components/Products";
import type {Product} from "../types/product";
import getProducts from "../lib/api";
import Header from "../components/Header";
import {Marquee} from "../components/commons/Marquee";

const Home: NextPage = () => {
  const [result, setResult] = useState<{products: Product[]; loading: boolean; error: boolean}>({
    products: [],
    loading: true,
    error: false,
  });

  useEffect(() => {
    getProducts()
      .then((products: Product[]) => {
        setResult({products, loading: false, error: false});
      })
      .catch(() => {
        setResult({products: [], loading: false, error: true});
      });
  }, []);

  return (
    <>
      <Header className="md:mt-3 mb-4 md:mb-14" />
      <Marquee
        className="py-4 border-y border-solid border-white gap-4 md:py-2.5 md:gap-8"
        items={["A man can’t have enough base­ment swag"]}
        textClassName="text-20 font-bold md:text-35"
      />
      <Products result={result} />;
    </>
  );
};

export default Home;
