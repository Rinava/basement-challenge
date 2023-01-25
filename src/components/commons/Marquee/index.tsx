import {useMemo, Fragment} from "react";
import clsx from "clsx";

import styles from "./styles.module.css";

interface MarqueeProps {
  items: string[];
  className?: string;
  textClassName?: string;
  direction?: "left" | "right";
}

export const Marquee = ({items, className, textClassName, direction = "left"}: MarqueeProps) => {
  const renderedItems: string[] = useMemo(() => {
    return Array(12)
      .fill(items)
      .reduce((a, b) => a.concat(b));
  }, [items]);

  return (
    <div className="relative overflow-hidden">
      <div
        className={clsx(
          styles.marquee,
          "flex w-fit",
          direction === "left" ? styles.left : styles.right,
          className,
        )}
      >
        {renderedItems.map((item, i) => (
          <Fragment key={i}>
            <span className={clsx("relative whitespace-nowrap", styles.item, textClassName)}>
              {item}
            </span>
            <span className={clsx("relative whitespace-nowrap", styles.item, textClassName)}>
              —
            </span>
          </Fragment>
        ))}
      </div>
    </div>
  );
};
