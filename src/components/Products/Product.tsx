import Image from "next/image";

import type {Product} from "../../types/product";

interface Props {
  product: Product;
}

const Product = ({product}: Props) => {
  return (
    <li className="w-full group">
      <button className="w-full">
        <div className="relative overflow-hidden mb-2 md:mb-4">
          <div className="z-10 absolute w-full h-full bg-gradient-to-b from-black to-[#1D1D1D] transition-transform group-hover:scale-y-125 origin-bottom-left duration-500" />
          <Image
            alt=""
            className="relative z-20 border-b-2 border-solid border-white w-full aspect-[343/392] md:aspect-[440/578] object-cover"
            height={392}
            src={product.image}
            width={343}
          />
        </div>
        <div className="flex justify-between group-hover:text-orange duration-500 transition-colors">
          <h3 className="text-20 font-bold md:text-21">{product.title}</h3>
          <p className="text-20 font-bold md:text-21">${product.price}</p>
        </div>
      </button>
    </li>
  );
};

export default Product;
