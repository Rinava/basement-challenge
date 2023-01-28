import type {NextPage} from "next";
import {useRef} from "react";

import {Product as ProductType} from "../types";
import Header from "../components/Header";
import FloatingShit from "../components/FloatingShit";
import Marquee from "../components/commons/Marquee";
import Products from "../components/Products";
import getProducts from "../lib/api";

interface HomeProps {
  products: ProductType[];
}

const Home: NextPage<HomeProps> = ({products}) => {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <main ref={ref} className="pt-24 md:pt-32">
      <Header className="mb-4 md:mb-14" />
      <FloatingShit reference={ref} />
      <FloatingShit reference={ref} variant="two" />
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
