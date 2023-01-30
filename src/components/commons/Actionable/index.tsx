import {ReactNode, forwardRef} from "react";
import Link from "next/link";

import {useCursor} from "../../../contexts/CursorContext";
import {CursorVariant} from "../../../types";

interface ActionableProps {
  children: ReactNode;
  cursor?: CursorVariant | null;
  className?: string;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  disabled?: boolean;
  action: (() => void) | string;
}

const Actionable = forwardRef(
  ({children, cursor, onMouseEnter, onMouseLeave, action, ...props}: ActionableProps, ref: any) => {
    const {setCursor} = useCursor();

    const handleMouseEnter = () => {
      setCursor(cursor || "hover");
      onMouseEnter && onMouseEnter();
    };

    const handleMouseLeave = () => {
      setCursor("default");
      onMouseLeave && onMouseLeave();
    };

    return typeof action === "string" ? (
      <Link
        ref={ref}
        href={action}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        {...props}
      >
        {children}
      </Link>
    ) : (
      <button
        ref={ref}
        onClick={action as () => void}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        {...props}
      >
        {children}
      </button>
    );
  },
);

Actionable.displayName = "Actionable";

export default Actionable;
