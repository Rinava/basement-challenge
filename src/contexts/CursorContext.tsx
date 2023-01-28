import {useState, createContext, useContext} from "react";

import {CursorVariant} from "../types";

interface ICursorCtx {
  setCursor: (cursorType: CursorVariant | null) => void;
  cursor: string | null;
}

export const CursorContext = createContext<ICursorCtx>({
  setCursor: () => {},
  cursor: null,
});

const CursorProvider = ({children}: any) => {
  const [cursor, setCursor] = useState<string | null>(null);

  const handleChangeCursor = (cursorType: CursorVariant | null) => {
    setCursor(cursorType);
  };

  return (
    <CursorContext.Provider
      value={{
        cursor,
        setCursor: handleChangeCursor,
      }}
    >
      {children}
    </CursorContext.Provider>
  );
};

export const useCursor = () => {
  const cursor = useContext(CursorContext);

  return cursor;
};

export default CursorProvider;
