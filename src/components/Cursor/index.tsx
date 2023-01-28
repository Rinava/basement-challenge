import {useState, useEffect} from "react";
import {motion} from "framer-motion";
import clsx from "clsx";

import DefaultCursor from "./DefaultCursor";
import AddProductCursor from "./AddProductCursor";
import GrabCursor from "./GrabCursor";
import HoverCursor from "./HoverCursor";

interface CursorProps {
  cursorType: string | null;
}

const cursorVariants: IcursorVariants = {
  default: {element: <DefaultCursor />, className: "mix-blend-difference"},
  addProduct: {element: <AddProductCursor />, className: ""},
  grab: {element: <GrabCursor />, className: ""},
  hover: {element: <HoverCursor />, className: ""},
};

interface IcursorVariants extends Record<string, {element: React.ReactNode; className: string}> {}

const Cursor = ({cursorType}: CursorProps) => {
  const [position, setPosition] = useState({x: 0, y: 0});

  const onMouseMove = (e: any) => {
    setPosition({x: e.clientX, y: e.clientY + window.scrollY});
  };

  useEffect(() => {
    document.addEventListener("mousemove", onMouseMove);

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return (
    <motion.div
      animate={{scale: 1}}
      className={clsx(
        " absolute z-[20000] pointer-events-none ",
        cursorVariants[cursorType || "default"].className,
      )}
      initial={{scale: 0}}
      style={{x: position.x, y: position.y}}
      transition={{duration: 0.1}}
    >
      {cursorVariants[cursorType || "default"].element}
    </motion.div>
  );
};

export default Cursor;
