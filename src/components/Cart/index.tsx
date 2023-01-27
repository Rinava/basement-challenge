import {useContext} from "react";
import clsx from "clsx";

import {CartContext} from "./../commons/Layout";
import Heading from "./components/Heading";
import Item from "./components/Item";
import Checkout from "./components/Checkout";
import AddToCart from "./components/AddToCart";

const Cart = ({open, addToCartOpen, addToCartProduct}) => {
  const {items, setCartOpen} = useContext(CartContext);

  return (
    <>
      <AddToCart open={addToCartOpen} product={addToCartProduct} />
      <div
        className={clsx(
          "fixed top-0 w-full h-full px-4 bg-black z-50 flex flex-col h-full justify-between",
          open ? "block" : "hidden",
        )}
      >
        <div>
          <button className="block ml-auto my-2" onClick={() => setCartOpen(false)}>
            Close
          </button>
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
