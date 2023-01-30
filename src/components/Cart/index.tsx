import {useMemo, useRef} from "react";
import clsx from "clsx";

import useConfetti from "../../hooks/useConfetti";
import Actionable from "../commons/Actionable";
import {useCart} from "../../contexts/CartContext";
import parsePrice from "../../utils/parsePrice";

import Heading from "./components/Heading";
import Item from "./components/Item";
import Checkout from "./components/Checkout";
import AddToCartModal from "./components/AddToCartModal";

const Cart = () => {
  const {cart, addToCart} = useCart();

  const confettiRef = useRef<HTMLCanvasElement>(null);
  const fireConfetti = useConfetti(confettiRef);

  const totalPrice = useMemo(
    () =>
      parsePrice(cart.items?.reduce((acc, item) => acc + item.product.price * item.quantity, 0)),
    [cart.items],
  );

  return (
    <>
      <canvas
        ref={confettiRef}
        className="pointer-events-none fixed inset-0 z-confetti w-full h-full"
      />
      {addToCart.product && <AddToCartModal open={addToCart.isOpen} product={addToCart.product} />}
      <div
        className={clsx(
          "fixed inset-0 bg-black bg-opacity-75 transition-opacity z-modal",
          !cart.isOpen && "hidden",
        )}
      />
      <div
        className={clsx(
          "fixed top-0 right-0 w-full h-full flex flex-col justify-between bg-black z-modal md:max-w-[824px] md:max-h-[821px] md:border-l-2 md:border-b-2",
          cart.isOpen ? "block" : "hidden",
        )}
      >
        <div className="px-4 flex flex-col overflow-hidden md:px-8">
          <div>
            <Actionable
              action={() => cart.setOpenState(false)}
              className="uppercase block text-14 ml-auto my-2 md:mt-11 md:mb-6 md:text-24"
            >
              Close
            </Actionable>
            <Heading />
          </div>

          {cart.items?.length ? (
            <ul className="flex flex-col gap-4 my-7 flex-1 overflow-x-hidden scrollbar-hide">
              {cart.items.map((item) => (
                <li key={item.id}>
                  <Item
                    handleChanges={(newItem) => cart.manage({type: "update", payload: newItem})}
                    item={item}
                    onRemove={() => cart.manage({type: "remove", payload: item})}
                  />
                </li>
              ))}
            </ul>
          ) : (
            <p className="py-16 text-center md:text-24">
              No items in your cart, let&apos;s add some!
            </p>
          )}
        </div>

        <div className="px-4 flex flex-col items-center md:px-0 md:flex-row md:border-t-2">
          <p
            className={clsx(
              "w-full pb-4 uppercase h-full flex items-center leading-none text-20 justify-between border-b-2 border-white",
              "md:w-auto md:pb-0 md:px-8 md:text-35 md:justify-start md:border-r-2 md:border-b-0 md:flex-1",
            )}
          >
            <span className="md:pr-3">Total:</span> <span>{totalPrice}</span>
          </p>
          <Checkout action={() => fireConfetti()} disabled={!cart.items?.length} />
        </div>
      </div>
    </>
  );
};

export default Cart;
