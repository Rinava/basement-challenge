import {useRef} from "react";
import type {NextPage} from "next";

import getProducts from "../lib/api";
import {Product as ProductType} from "../types";
import Header from "../components/Header";
import FloatingShit from "../components/FloatingShit";
import Marquee from "../components/commons/Marquee";
import Products from "../components/Products";

interface HomeProps {
  products: ProductType[];
}

const Home: NextPage<HomeProps> = ({products}) => {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <main ref={ref} className="pt-24 md:pt-32">
      <Header className="mb-4 md:mb-14" />
      <FloatingShit className="top-96 left-4 md:left-24" reference={ref} />
      <FloatingShit className="top-64 right-4 md:top-96 md:right-2" reference={ref} variant="two" />
      <Marquee
        className="border-y border-solid border-white gap-4 py-1.5 mb-12 md:gap-8 md:py-2.5 md:mb-24"
        items={["A man can't have enough basement swag"]}
        textClassName="text-20 md:text-35"
      />
      <Products products={products} />
    </main>
  );
};

export const getStaticProps = async () => {
  const products = await getProducts();

  return {
    props: {
      products,
    },
  };
};

export default Home;
