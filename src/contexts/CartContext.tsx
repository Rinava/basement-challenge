import {
  useState,
  createContext,
  useReducer,
  Dispatch,
  SetStateAction,
  useContext,
  useEffect,
} from "react";

import {CartItem, Product} from "../types";

interface ICartCtx {
  cart: {
    items: CartItem[];
    manage: Dispatch<CartItem | any>;
    isOpen: boolean;
    setOpenState: Dispatch<SetStateAction<boolean>>;
  };
  addToCart: {
    open: (product: Product) => void;
    close: () => void;
    isOpen: boolean;
    product: Product | null;
  };
}

export const CartContext = createContext<ICartCtx>({
  cart: {
    items: [],
    manage: () => {},
    isOpen: false,
    setOpenState: () => {},
  },
  addToCart: {
    open: () => {},
    close: () => {},
    isOpen: false,
    product: null,
  },
});

const reducer = (state: CartItem[], action: any) => {
  switch (action.type) {
    case "add": {
      const alreadyInCart = state.find(
        (item) =>
          item.product.id === action.payload.product.id && item.size === action.payload.size,
      );

      if (alreadyInCart) {
        return state.map((item) => {
          if (item.product.id === action.payload.product.id && item.size === action.payload.size) {
            return {
              ...item,
              quantity: item.quantity + action.payload.quantity,
            };
          }

          return item;
        });
      } else {
        return [...state, action.payload];
      }
    }
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

const CartProvider = ({children}: any) => {
  const [cart, cartDispatch] = useReducer(reducer, []);
  const [cartState, setCartState] = useState<boolean>(false);

  const [addToCartState, setAddToCartState] = useState<boolean>(false);
  const [addToCartProduct, setAddToCartProduct] = useState<Product | null>(null);

  const handleAddToCart = (product: Product) => {
    setAddToCartProduct(product);
    setAddToCartState(true);
  };

  const handleAddToCartClose = () => {
    setAddToCartProduct(null);
    setAddToCartState(false);
  };

  useEffect(() => {
    // https://css-tricks.com/prevent-page-scrolling-when-a-modal-is-open/
    const body = document.querySelector("body");

    addToCartState || cartState
      ? body?.classList.add("modal-open")
      : body?.classList.remove("modal-open");
  }, [addToCartState, cartState]);

  return (
    <CartContext.Provider
      value={{
        cart: {
          items: cart,
          manage: cartDispatch,
          isOpen: cartState,
          setOpenState: setCartState,
        },
        addToCart: {
          open: handleAddToCart,
          close: handleAddToCartClose,
          isOpen: addToCartState,
          product: addToCartProduct,
        },
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const cart = useContext(CartContext);

  return cart;
};

export default CartProvider;
