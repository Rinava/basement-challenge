import {useContext} from "react";
import {motion, useMotionValue, useVelocity, useSpring, useTransform} from "framer-motion";
import clsx from "clsx";

import {CursorContext} from "../commons/Layout";

interface FloatingShitProps {
  reference: React.RefObject<HTMLDivElement>;
  variant?: "default" | "two";
}

const ShitOne = () => (
  <svg
    fill="none"
    height="100%"
    viewBox="0 0 163 200"
    width="100%"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="m33.933 102.568-24.145 23.63 11.584 24.648 21.657 2.119 31.797-31.133 21.402 45.608 21.679 2.12 18.385-18.015-19.171-40.86 26.057 2.564 18.385-18.014-11.562-24.648-20.808-2.035 24.145-23.63-11.584-24.648-21.679-2.12L88.3 49.288 66.898 3.678 45.218 1.56 26.835 19.574l19.171 40.84-26.057-2.543L1.563 75.885l11.562 24.648 20.808 2.035Z"
      fill="#000"
    />
    <path
      className="group-hover:stroke-orange transition-colors"
      d="m45.219 1.56 69.394 147.866M131.658 42.802 21.372 150.846M161.563 95.234 31.51 82.52M136.292 151.546l-28.927-61.61M96.228 167.44l-28.905-61.609M74.124 63.169l45.951-45.015M107.365 89.937l45.972-45.015M19.948 57.87l54.176 5.3M13.125 100.533l54.198 5.299M88.3 49.288 66.899 3.679M96.228 167.441l-21.402-45.608M46.005 60.435l-19.171-40.86M136.292 151.545l-19.171-40.86M88.3 49.287l31.775-31.133M43.03 152.966l31.795-31.133M9.788 126.198l24.145-23.63M129.193 68.552l24.145-23.63M31.51 82.519 19.947 57.87M153.338 44.922l-11.584-24.648M120.075 18.154l11.583 24.648M1.563 75.885l11.562 24.648M150.001 70.587l11.562 24.648M21.372 150.846 9.788 126.198M19.948 57.87l26.057 2.565M117.121 110.685l26.057 2.564M117.907 169.56l18.385-18.015M114.613 149.426 96.228 167.44M19.948 57.87 1.563 75.886M13.125 100.533 31.51 82.519M161.563 95.235l-18.385 18.014M26.834 19.574 45.219 1.56M43.03 152.965l-21.658-2.119M96.228 167.441l21.679 2.119M45.219 1.56l21.679 2.12M136.292 151.545l-21.679-2.119M141.754 20.274l-21.679-2.12M131.658 42.802l21.68 2.12M13.125 100.533l20.808 2.035M129.193 68.552l20.808 2.035"
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
    />
  </svg>
);

const ShitTwo = () => (
  <svg
    fill="none"
    height="100%"
    viewBox="0 0 163 200"
    width="100%"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="m66.582 106.146 1.917 4.684 19.367 16.727 10.7-10.286 25.49 22.016 19.954-19.205-4.89-12.043-39.262-33.92 45.6-43.876-4.891-12.062-19.386-16.726-40.847 39.308-1.897-4.665L59.05 19.352l-10.7 10.305L22.86 7.622 2.905 26.827l4.91 12.043 39.242 33.92-45.6 43.896 4.89 12.042 19.387 16.726 40.847-39.308Z"
      fill="#000"
    />
    <path
      className="group-hover:stroke-orange transition-colors"
      d="m20.825 133.412 119.742-115.23M2.906 26.827l116.26 100.417M58.483 55.284l29.383 72.273M25.735 145.454 75.62 97.441M51.342 68.673 1.458 116.686M75.62 97.441l48.437 41.846M139.119 108.039 90.683 66.194M99.857 74.118l45.601-43.875M47.058 72.791l-45.6 43.895M25.735 145.454l40.847-39.308M121.181 1.455 80.334 40.763M7.816 38.87l39.242 33.92M139.119 108.039 99.857 74.118M48.35 29.657 22.86 7.622M98.567 117.271l25.49 22.016M78.437 36.098l12.246 30.096M39.096 38.557l12.247 30.116M124.056 139.287l19.954-19.205M59.05 19.352 39.096 38.557M139.119 108.039l-19.953 19.206M2.906 26.827 22.859 7.622M58.483 55.284l19.953-19.186M87.866 127.557l-19.367-16.726M78.436 36.098 59.05 19.352M121.181 1.455l19.386 16.726M39.096 38.557l19.387 16.727M20.825 133.412 1.458 116.686M6.349 128.728l19.386 16.727M59.05 19.352l-10.7 10.305M98.566 117.271l-10.7 10.286M144.01 120.082l-4.89-12.043M25.735 145.454l-4.91-12.042M1.458 116.686l4.89 12.042M140.567 18.181l4.891 12.062M7.816 38.87l-4.91-12.043M119.166 127.245l4.89 12.042M78.437 36.098l1.897 4.665M66.582 106.146l1.917 4.684"
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
    />
  </svg>
);

const variations = {
  default: {
    component: <ShitOne />,
    className: "top-15 left-0  md:top-50 md:left-3",
  },
  two: {
    component: <ShitTwo />,
    className: "top-14 right-0 md:top-44 md:right-2",
  },
};

const FloatingShit = ({reference, variant = "default"}: FloatingShitProps) => {
  const cursorContext = useContext(CursorContext);
  const {setCursorType} = cursorContext;

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const xSmooth = useSpring(x, {damping: 50, stiffness: 400});
  const ySmooth = useSpring(y, {damping: 50, stiffness: 400});

  const xVelocity = useVelocity(xSmooth);
  const yVelocity = useVelocity(ySmooth);

  const scaleX = useTransform(xVelocity, [-3000, 0, 3000], [0.5, 1, 0.5], {
    clamp: false,
  });

  const scaleY = useTransform(yVelocity, [-3000, 0, 3000], [0.5, 1, 0.5], {
    clamp: false,
  });

  return (
    <motion.div
      drag
      aria-hidden="true"
      className={clsx(
        "z-[90] absolute w-20 h-20 opacity-75 cursor-pointer hover:opacity-80 md:w-48 md:h-48 group",
        variations[variant].className,
      )}
      dragConstraints={reference}
      dragTransition={{bounceStiffness: 150, bounceDamping: 10}}
      style={{x, y, scaleX, scaleY}}
      whileDrag={{scale: 1.25, opacity: 0.85}}
      onDragEnd={() => setCursorType("hover")}
      onDragStart={() => setCursorType("grab")}
      onHoverEnd={() => setCursorType("default")}
      onHoverStart={() => setCursorType("hover")}
    >
      {variations[variant].component}
    </motion.div>
  );
};

export default FloatingShit;
