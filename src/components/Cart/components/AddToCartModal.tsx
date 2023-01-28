import clsx from "clsx";

import {useCart} from "../../../contexts/CartContext";
import {Product} from "../../../types";
import Button from "../../commons/Button";

import Item from "./Item";

interface AddToCartModalProps {
  product: Product;
  open: boolean;
}

const AddToCartModal = ({product, open}: AddToCartModalProps) => {
  const {
    addToCart: {close},
  } = useCart();

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
            <Button
              className="uppercase bg-black py-4 px-4 border-x border-b"
              onClick={() => close()}
            >
              Cancel
            </Button>
            <Button
              className="uppercase bg-black px-4 border-r border-b text-orange border-white"
              onClick={() => {}}
            >
              Add To Cart
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddToCartModal;
