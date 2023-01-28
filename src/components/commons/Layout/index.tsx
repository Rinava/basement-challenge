import React, {createContext, useReducer} from "react";

import {ItemCheckout} from "../../../types";
import Cursor from "../../Cursor";

import Footer from "./components/Footer";
import Meta from "./components/Meta";
import NavBar from "./components/NavBar";
import Cart from "./../../Cart";

const reducer = (state: ItemCheckout[], action: any) => {
  switch (action.type) {
    case "add":
      return [...state, action.payload];
    case "remove":
      return state.filter((item) => item.id !== action.payload.id);
    case "update":
      return state.map((item) => {
        if (item.id === action.payload.id) {
          return action.payload;
        }

        return item;
      });
    default:
      return state;
  }
};

interface ICursorCtx {
  setCursorType: React.Dispatch<React.SetStateAction<string | null>>;
}
interface ICartCtx {
  setCartOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setAddToCartOpen: React.Dispatch<React.SetStateAction<boolean>>;
  checkout: React.Dispatch<any>;
  addToCart: (product: any) => void;
}
interface IDragCartCtx {
  dragState: string | null;
  setDragState: React.Dispatch<React.SetStateAction<string | null>>;
  positionClose: boolean;
  setPositionClose: React.Dispatch<React.SetStateAction<boolean>>;
}

export const CursorContext = createContext<ICursorCtx>({
  setCursorType: () => {},
});
export const CartContext = createContext<ICartCtx>({
  setCartOpen: () => {},
  setAddToCartOpen: () => {},
  checkout: () => {},
  addToCart: () => {},
});

export const DragCartContext = createContext<IDragCartCtx>({
  dragState: null,
  setDragState: () => {},
  positionClose: false,
  setPositionClose: () => {},
});
interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({children}: LayoutProps) => {
  const [items, itemsHandler] = useReducer<React.Reducer<ItemCheckout[], any>>(reducer, []);

  const [cursorType, setCursorType] = React.useState<string | null>(null);
  const [cartOpen, setCartOpen] = React.useState<boolean>(false);
  const [AddToCartOpen, setAddToCartOpen] = React.useState<boolean>(false);
  const [addToCartProduct, setAddToCartProduct] = React.useState<any>(null);

  const addToCart = (product: any) => {
    setAddToCartOpen(true);
    setAddToCartProduct(product);
  };

  const [dragState, setDragState] = React.useState<string | null>(null);
  const [positionClose, setPositionClose] = React.useState<boolean>(false);

  return (
    <CursorContext.Provider value={{setCursorType}}>
      <DragCartContext.Provider value={{dragState, setDragState, positionClose, setPositionClose}}>
        <CartContext.Provider
          value={{
            checkout: itemsHandler,
            setAddToCartOpen,
            setCartOpen,
            addToCart,
          }}
        >
          <Cursor cursorType={cursorType} />
          <Meta />
          <NavBar />
          <Cart
            addToCartOpen={AddToCartOpen}
            addToCartProduct={addToCartProduct}
            items={items}
            open={cartOpen}
          />
          {children}
          <Footer />
        </CartContext.Provider>
      </DragCartContext.Provider>
    </CursorContext.Provider>
  );
};

export default Layout;
