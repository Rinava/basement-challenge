import Image from "next/image";

import type {Product} from "../../types/product";

interface Props {
  product: Product;
}

const Product = ({product}: Props) => {
  return (
    <li className="w-full">
      <button className="w-full">
        <Image
          alt=""
          className="border-b border-solid border-white w-full"
          height={300}
          src={product.image}
          style={{
            background: "linear-gradient(180deg, #000 0%, #1D1D1D 100%)",
          }}
          width={300}
        />
        <div className="flex justify-between">
          <h3 className="">{product.title}</h3>
          <p>${product.price}</p>
        </div>
      </button>
    </li>
  );
};

export default Product;
