import {ReactNode, useMemo} from "react";
import clsx from "clsx";
import {motion} from "framer-motion";

import {useCursor} from "../../contexts/CursorContext";
import {useMouse} from "../../contexts/MouseContext";

import DefaultCursor from "./cursors/DefaultCursor";
import AddProductCursor from "./cursors/AddProductCursor";
import GrabCursor from "./cursors/GrabCursor";
import HoverCursor from "./cursors/HoverCursor";

interface VariantsProps {
  [key: string]: {
    element: ReactNode;
    className: string;
  };
}

const variants: VariantsProps = {
  default: {element: <DefaultCursor />, className: "mix-blend-difference"},
  addProduct: {element: <AddProductCursor />, className: ""},
  grab: {element: <GrabCursor />, className: ""},
  hover: {element: <HoverCursor />, className: ""},
};

const Cursor = () => {
  const {cursor} = useCursor();
  const {position} = useMouse();

  const style = useMemo(() => {
    return {
      x: position.x,
      y: position.y + (typeof window !== "undefined" ? window.scrollY : 0),
    };
  }, [position]);

  return (
    <motion.div
      animate={{scale: 1}}
      className={clsx(
        "absolute z-[20000] pointer-events-none",
        variants[cursor || "default"].className,
      )}
      initial={{scale: 0}}
      style={style}
      transition={{duration: 0.1}}
    >
      {variants[cursor || "default"].element}
    </motion.div>
  );
};

export default Cursor;
