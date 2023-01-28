import clsx from "clsx";

import Button from "../commons/Button";
import {useCart} from "../../contexts/CartContext";

import Heading from "./components/Heading";
import Item from "./components/Item";
import Checkout from "./components/Checkout";
import AddToCartModal from "./components/AddToCartModal";

const Cart = () => {
  const {
    cart: {items, isOpen, setOpenState},
    addToCart: {isOpen: addToCartOpen, product: addToCartProduct},
  } = useCart();

  return (
    <>
      <AddToCartModal open={addToCartOpen} product={addToCartProduct} />
      <div
        className={clsx(
          "fixed top-0 w-full h-full px-4 bg-black z-50 flex flex-col justify-between",
          isOpen ? "block" : "hidden",
        )}
      >
        <div>
          <Button className="block ml-auto my-2" onClick={() => setOpenState(false)}>
            Close
          </Button>
          <Heading />
        </div>

        {items ? (
          <ul className="flex flex-col gap-4 py-7 flex-1 overflow-x-hidden">
            {items.map((item) => (
              <li key={item.id}>
                <Item item={item} />
              </li>
            ))}
          </ul>
        ) : (
          <p>There are no items in your cart.</p>
        )}

        <div>
          <p className="uppercase text-20 flex justify-between pb-4 border-b-2 border-white">
            <span>Total:</span> <span>$37,5</span>
          </p>
          <Checkout />
        </div>
      </div>
    </>
  );
};

export default Cart;
