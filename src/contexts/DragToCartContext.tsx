import {useState, createContext, useContext, Dispatch, SetStateAction} from "react";

interface IDragToCartCtx {
  isGrabbing: {
    value: boolean;
    set: Dispatch<SetStateAction<boolean>>;
  };
  isMouseCloserToCart: {
    value: boolean;
    set: Dispatch<SetStateAction<boolean>>;
  };
}

export const DragToCartContext = createContext<IDragToCartCtx>({
  isGrabbing: {
    value: false,
    set: () => {},
  },
  isMouseCloserToCart: {
    value: false,
    set: () => {},
  },
});

const DragToCartProvider = ({children}: any) => {
  const [grabbing, setGrabbing] = useState<boolean>(false);
  const [positionClose, setPositionClose] = useState<boolean>(false);

  return (
    <DragToCartContext.Provider
      value={{
        isGrabbing: {
          value: grabbing,
          set: setGrabbing,
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
