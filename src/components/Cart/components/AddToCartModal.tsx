import clsx from "clsx";
import {useState} from "react";
import {v4 as uuid} from "uuid";

import {useCart} from "../../../contexts/CartContext";
import {Product} from "../../../types";
import Actionable from "../../commons/Actionable";
import {CartItem} from "../../../types";

import Item from "./Item";

interface AddToCartModalProps {
  product: Product;
  open: boolean;
}

const AddToCartModal = ({product, open}: AddToCartModalProps) => {
  const {addToCart, cart} = useCart();
  const [cartItem, setCartItem] = useState<CartItem>({
    product,
    quantity: 1,
    size: product?.stock[0].size,
    id: uuid(),
  });

  return product ? (
    <div
      //aria-labelledby="modal-title"
      aria-modal="true"
      className={clsx("relative z-modal", !open && "hidden")}
      role="dialog"
    >
      <div className="fixed inset-0 bg-black bg-opacity-75 transition-opacity" />

      <div className="fixed inset-0 z-[10] overflow-y-auto flex justify-center items-center m-auto max-w-lg md:max-w-3xl px-4">
        <div className="w-full">
          <Item
            className="w-full"
            handleChanges={(cartItem) => setCartItem(cartItem)}
            item={cartItem}
          />
          <div className="flex justify-end">
            <Actionable
              action={() => addToCart.close()}
              className="uppercase bg-black py-4 px-4 border-x border-b"
            >
              Cancel
            </Actionable>
            <Actionable
              action={() => {
                cart.manage({type: "add", payload: cartItem});
                addToCart.close();
                cart.setOpenState(true);
              }}
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
