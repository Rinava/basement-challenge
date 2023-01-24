import type {NextPage} from "next";
import {useState, useEffect} from "react";

import Layout from "../components/commons/Layout";
import Products from "../components/Products";
import type {Product} from "../types/product";
import getProducts from "../lib/api";

const Home: NextPage = () => {
  const [result, setResult] = useState({products: [], loading: true, error: false});

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
    <Layout>
      <main>
        <Products result={result} />
      </main>
    </Layout>
  );
};

export default Home;
