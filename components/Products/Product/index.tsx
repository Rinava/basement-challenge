import Image from "next/image";

import type {Product} from "../../../types/product";

interface Props {
  product: Product;
}

const Product = ({product}: Props) => {
  return (
    <li className="">
      <button>
        <Image
          alt=""
          className="border-b border-solid border-white"
          height={300}
          src={product.image}
          width={300}
        />
        <div className="flex justify-between">
          <h3 className="font-bold ">{product.title}</h3>
          <p>${product.price}</p>
        </div>
      </button>
    </li>
  );
};

export default Product;
