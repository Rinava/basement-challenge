import type {NextPage} from "next";
import {useRef} from "react";

import Products from "../components/Products";
import type {Product as ProductType} from "../types";
import getProducts from "../lib/api";
import Header from "../components/Header";
import {Marquee} from "../components/commons/Marquee";
import FloatingShit from "../components/FloatingShit";

interface HomeProps {
  products: ProductType[];
}

const Home: NextPage<HomeProps> = ({products}) => {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <main ref={ref} className="relative w-full h-full overflow-hidden pt-32">
      <Header className="md:mt-6 mb-4 md:mb-14" />
      <FloatingShit reference={ref} />
      <FloatingShit reference={ref} variant="two" />
      <Marquee
        className="py-1.5 border-y border-solid border-white gap-4 mb-12 md:py-2.5 md:gap-8 md:mb-24"
        items={["A man can't have enough base­ment swag"]}
        textClassName="text-20 font-bold md:text-35"
      />
      <Products products={products} />
    </main>
  );
};

export const getStaticProps = async () => {
  const products = await getProducts();

  return {
    props: {
      products: products,
    },
  };
};

export default Home;
