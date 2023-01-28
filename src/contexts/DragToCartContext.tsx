import {useState, createContext, useContext, Dispatch, SetStateAction} from "react";

interface IDragToCartCtx {
  drag: {
    state: string | null;
    set: Dispatch<SetStateAction<string | null>>;
  };
  isMouseCloserToCart: {
    value: boolean;
    set: Dispatch<SetStateAction<boolean>>;
  };
}

export const DragToCartContext = createContext<IDragToCartCtx>({
  drag: {
    state: null,
    set: () => {},
  },
  isMouseCloserToCart: {
    value: false,
    set: () => {},
  },
});

const DragToCartProvider = ({children}: any) => {
  const [dragState, setDragState] = useState<string | null>(null);
  const [positionClose, setPositionClose] = useState<boolean>(false);

  return (
    <DragToCartContext.Provider
      value={{
        drag: {
          state: dragState,
          set: setDragState,
        },
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
