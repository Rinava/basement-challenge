import clsx from "clsx";
import {useContext} from "react";

import {CartContext} from "../../commons/Layout";

import Item from "./Item";

const AddToCart = ({product, open}) => {
  const context = useContext(CartContext);
  const {setAddToCartOpen} = context;

  return (
    <div
      aria-labelledby="modal-title"
      aria-modal="true"
      className={clsx("relative z-[100]", !open && "hidden")}
      role="dialog"
    >
      <div className="fixed inset-0 bg-black bg-opacity-75 transition-opacity" />

      <div className="fixed inset-0 z-[10] overflow-y-auto flex justify-center items-center m-auto max-w-lg x-4">
        <div className="w-full">
          <Item className="w-full" product={product} />
          <div className="flex justify-end">
            <button
              className="uppercase bg-black py-4 px-4 border-x border-b"
              onClick={() => setAddToCartOpen(false)}
            >
              Cancel
            </button>
            <button className="uppercase bg-black px-4 border-r border-b text-orange border-white">
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddToCart;
