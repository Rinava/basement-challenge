import {useState, createContext, useContext, useEffect} from "react";

interface IMouseCtx {
  position: {
    x: number;
    y: number;
  };
}

export const MouseContext = createContext<IMouseCtx>({
  position: {
    x: 0,
    y: 0,
  },
});

const MouseProvider = ({children}: any) => {
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  const handleMove = (e: any) => {
    if (e.type === "touchmove") {
      setPosition({x: e.touches[0].clientX, y: e.touches[0].clientY});
    } else {
      setPosition({x: e.clientX, y: e.clientY});
    }
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMove);
    window.addEventListener("touchmove", handleMove);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("touchmove", handleMove);
    };
  }, []);

  return (
    <MouseContext.Provider
      value={{
        position,
      }}
    >
      {children}
    </MouseContext.Provider>
  );
};

export const useMouse = () => {
  const mouse = useContext(MouseContext);

  return mouse;
};

export default MouseProvider;
