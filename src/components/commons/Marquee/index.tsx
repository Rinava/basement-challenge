import {useMemo, Fragment} from "react";
import clsx from "clsx";

import styles from "./styles.module.css";

interface MarqueeProps {
  items: string[];
  className?: string;
  textClassName?: string;
  direction?: "left" | "right";
}

const Marquee = ({items, className, textClassName, direction = "left"}: MarqueeProps) => {
  const renderedItems: string[] = useMemo(() => {
    return Array(12)
      .fill(items)
      .reduce((a, b) => a.concat(b));
  }, [items]);

  return (
    <div className="overflow-hidden">
      <div
        className={clsx(
          styles.marquee,
          "flex w-fit select-none",
          direction === "left" ? styles.left : styles.right,
          className,
        )}
      >
        {renderedItems.map((item, i) => (
          <Fragment key={i}>
            <span className={clsx("whitespace-nowrap", textClassName)}>{item}</span>
            <span className={clsx("whitespace-nowrap", textClassName)}>—</span>
          </Fragment>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
