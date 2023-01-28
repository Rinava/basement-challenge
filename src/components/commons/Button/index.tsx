import {ButtonHTMLAttributes, ReactNode, forwardRef} from "react";

import {useCursor} from "../../../contexts/CursorContext";
import {CursorVariant} from "../../../types";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  cursor?: CursorVariant | null;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

const Button = forwardRef(
  ({cursor, children, onMouseEnter, onMouseLeave, ...props}: ButtonProps, ref: any) => {
    const {setCursor} = useCursor();

    const handleMouseEnter = () => {
      setCursor(cursor || "hover");
      onMouseEnter && onMouseEnter();
    };

    const handleMouseLeave = () => {
      setCursor("default");
      onMouseLeave && onMouseLeave();
    };

    return (
      <button ref={ref} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} {...props}>
        {children}
      </button>
    );
  },
);

Button.displayName = "Button";

export default Button;
