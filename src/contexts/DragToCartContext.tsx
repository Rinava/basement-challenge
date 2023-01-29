import {useState, createContext, useContext, Dispatch, SetStateAction} from "react";

interface IDragToCartCtx {
  isMouseCloserToCart: {
    value: boolean;
    set: Dispatch<SetStateAction<boolean>>;
  };
}

export const DragToCartContext = createContext<IDragToCartCtx>({
  isMouseCloserToCart: {
    value: false,
    set: () => {},
  },
});

const DragToCartProvider = ({children}: any) => {
  const [positionClose, setPositionClose] = useState<boolean>(false);

  return (
    <DragToCartContext.Provider
      value={{
        isMouseCloserToCart: {
          value: positionClose,
          set: setPositionClose,
        },
      }}
    >
      {children}
    </DragToCartContext.Provider>
  );
};

export const useDragToCart = () => {
  const state = useContext(DragToCartContext);

  return state;
};

export default DragToCartProvider;
