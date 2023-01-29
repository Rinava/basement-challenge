import clsx from "clsx";

import {useCart} from "../../../contexts/CartContext";
import {Product} from "../../../types";
import Actionable from "../../commons/Actionable";

import Item from "./Item";

interface AddToCartModalProps {
  product: Product | null;
  open: boolean;
}

const AddToCartModal = ({product, open}: AddToCartModalProps) => {
  const {
    addToCart: {close},
  } = useCart();

  return product ? (
    <div
      aria-labelledby="modal-title"
      aria-modal="true"
      className={clsx("relative z-modal", !open && "hidden")}
      role="dialog"
    >
      <div className="fixed inset-0 bg-black bg-opacity-75 transition-opacity" />

      <div className="fixed inset-0 z-[10] overflow-y-auto flex justify-center items-center m-auto max-w-lg x-4">
        <div className="w-full">
          <Item
            className="w-full"
            item={{
              product,
            }}
          />
          <div className="flex justify-end">
            <Actionable
              action={() => close()}
              className="uppercase bg-black py-4 px-4 border-x border-b"
            >
              Cancel
            </Actionable>
            <Actionable
              action={() => {}}
              className="uppercase bg-black px-4 border-r border-b text-orange border-white"
            >
              Add To Cart
            </Actionable>
          </div>
        </div>
      </div>
    </div>
  ) : null;
};

export default AddToCartModal;
