import {useEffect, useRef, useState} from "react";
import {motion, useSpring, useTransform, useInView} from "framer-motion";

const Footer = () => {
  const footerRef = useRef(null);
  const isInView = useInView(footerRef);
  const [wasInView, setWasInView] = useState(false);

  const dryValue = useSpring(0, {stiffness: 10, damping: 2, mass: 0.5, velocity: 1});
  const dryPercentage = useTransform(dryValue, (value) => `${value}%`);

  const wetValue = useSpring(0, {stiffness: 30, damping: 10, mass: 0.5});
  const wetPercentage = useTransform(wetValue, (value) => `${value}%`);

  useEffect(() => {
    if (!wasInView && isInView) {
      setWasInView(true);

      setTimeout(() => {
        dryValue.set(40);
        setTimeout(() => {
          dryValue.set(100);
        }, 1500);
        setTimeout(() => {
          wetValue.set(100);
        }, 2200);
      }, 500);
    }
  }, [isInView, wasInView, dryValue, wetValue]);

  return (
    <footer
      ref={footerRef}
      className="container flex gap-4 flex-col justify-center pb-5 md:pb-14 md:gap-14"
    >
      <svg fill="none" viewBox="0 0 1173 177" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <mask id="dry-footer">
            <motion.rect fill="#fff" height="100%" style={{y: dryPercentage}} width="100%" x="0" />
          </mask>
        </defs>
        <path
          d="M416.98 1.06h-53.52L396.24 175h75.82l17.62-136.03h1.78L513.54 175h75.82L615.45 1.06h-49.06l-15.16 136.03h-1.79L530.71 1.06h-75.82l-18.73 136.03h-1.79L416.98 1.06Zm215.43 0V175h142.5v-40.14h-95.67v-28.99h84.29V67.96h-84.3V41.2h95.67V1.06H632.4Zm295.28 0h-75.82L791.88 175h51.29l9.59-33.9h69.8l10.93 33.9h53.52L927.69 1.06Zm-64 102.13L888 36.74h1.78l22.3 66.45h-48.39ZM1107.91 1.06h-103.92V175h46.83v-56.86h45.94c14.94 0 19.62 4.9 19.62 24.52 0 15.62.89 24.98 4.69 32.34h51.29v-2c-7.14-8.03-8.92-23.2-8.92-40.82 0-21.18-10.04-28.1-29.66-32.55 23.63-5.36 32.11-15.17 32.11-35.9v-6.7c0-47.27-8.7-55.97-57.98-55.97Zm-57.09 81.4v-43.5h45.05c19.62 0 23.19 3.8 23.19 21.4 0 18.3-3.57 22.09-23.19 22.09h-45.05Z"
          fill="#fff"
          mask="url(#dry-footer)"
        />
        <path
          d="M416.98 1.06h-53.52L396.24 175h75.82l17.62-136.03h1.78L513.54 175h75.82L615.45 1.06h-49.06l-15.16 136.03h-1.79L530.71 1.06h-75.82l-18.73 136.03h-1.79L416.98 1.06Zm215.43 0V175h142.5v-40.14h-95.67v-28.99h84.29V67.96h-84.3V41.2h95.67V1.06H632.4Zm295.28 0h-75.82L791.88 175h51.29l9.59-33.9h69.8l10.93 33.9h53.52L927.69 1.06Zm-64 102.13L888 36.74h1.78l22.3 66.45h-48.39ZM1107.91 1.06h-103.92V175h46.83v-56.86h45.94c14.94 0 19.62 4.9 19.62 24.52 0 15.62.89 24.98 4.69 32.34h51.29v-2c-7.14-8.03-8.92-23.2-8.92-40.82 0-21.18-10.04-28.1-29.66-32.55 23.63-5.36 32.11-15.17 32.11-35.9v-6.7c0-47.27-8.7-55.97-57.98-55.97Zm-57.09 81.4v-43.5h45.05c19.62 0 23.19 3.8 23.19 21.4 0 18.3-3.57 22.09-23.19 22.09h-45.05Z"
          stroke="#fff"
          strokeWidth="3"
        />
        <path
          d="M156 18.29v115.46M311.25 18.49c0 .4-.17.87-.62 1.4a8.41 8.41 0 0 1-2.17 1.66c-2 1.16-5 2.3-8.92 3.39-7.84 2.19-19.22 4.17-33.32 5.83-28.2 3.34-67.16 5.4-110.22 5.4s-82.03-2.06-110.22-5.4c-14.1-1.66-25.48-3.64-33.32-5.83-3.92-1.1-6.92-2.23-8.92-3.39a8.41 8.41 0 0 1-2.17-1.67c-.45-.52-.62-.98-.62-1.4 0-.4.17-.86.62-1.39a8.4 8.4 0 0 1 2.17-1.67c2-1.15 5-2.29 8.92-3.38 7.84-2.2 19.22-4.17 33.32-5.84C73.98 2.87 112.94.81 156 .81s82.03 2.06 110.22 5.4c14.1 1.66 25.48 3.64 33.32 5.83 3.92 1.1 6.92 2.23 8.92 3.38a8.4 8.4 0 0 1 2.17 1.67c.45.53.62 1 .62 1.4Zm0 45.76c0 1.57-.9 3.22-2.9 4.94-2 1.7-4.98 3.38-8.9 5-7.82 3.24-19.18 6.17-33.27 8.64-28.18 4.94-67.13 8-110.18 8-43.05 0-82-3.06-110.18-8-14.1-2.47-25.45-5.4-33.27-8.64-3.92-1.62-6.9-3.3-8.9-5-2-1.72-2.9-3.37-2.9-4.94 0-1.58.9-3.23 2.9-4.94 2-1.7 4.98-3.39 8.9-5 7.82-3.25 19.18-6.18 33.27-8.65 28.18-4.93 67.13-8 110.18-8 43.05 0 82 3.07 110.18 8 14.1 2.47 25.45 5.4 33.27 8.64 3.92 1.62 6.9 3.3 8.9 5 2 1.72 2.9 3.37 2.9 4.95Zm0 69.73c0 5.46-4.08 10.84-11.92 15.88-7.8 5.01-19.14 9.56-33.22 13.38-28.15 7.66-67.08 12.4-110.11 12.4s-81.96-4.74-110.11-12.4c-14.08-3.82-25.42-8.37-33.23-13.38C4.83 144.82.75 139.44.75 133.98c0-5.45 4.08-10.84 11.91-15.87 7.8-5.02 19.15-9.56 33.23-13.4C74.04 97.08 112.97 92.34 156 92.34s81.96 4.74 110.11 12.39c14.08 3.83 25.42 8.37 33.22 13.39 7.84 5.03 11.92 10.42 11.92 15.87Z"
          stroke="#fff"
          strokeWidth="1.5"
        />
      </svg>

      <svg fill="none" viewBox="0 0 339 44" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M.75.88V43h34.5v-9.72H12.1v-7.02h20.4v-9.18H12.1V10.6h23.16V.88H.76Zm80.49 0H68.82l-8.37 32.4h-.43L51.43.88H38.47L50.95 43H69.3L81.24.88Zm3.22 0V43h34.5v-9.72H95.8v-7.02h20.41v-9.18H95.8V10.6h23.17V.88H84.46Zm64.78 0h-25.17V43h11.34V29.23h11.13c3.61 0 4.75 1.19 4.75 5.94 0 3.78.21 6.05 1.13 7.83h12.42v-.49c-1.73-1.94-2.16-5.61-2.16-9.88 0-5.13-2.43-6.8-7.18-7.88 5.72-1.3 7.78-3.67 7.78-8.7v-1.62C163.28 3 161.16.88 149.24.88ZM135.4 20.59V10.06h10.9c4.76 0 5.63.92 5.63 5.18 0 4.43-.87 5.35-5.62 5.35h-10.9ZM208.8.88h-12.42l-7.99 15.66h-.32L180.24.88h-12.96l15.23 27.1V43h11.34V27.99L208.8.88Zm14.59 9.72h9.23c7.3 0 8.54 1.35 8.54 11.34 0 9.88-1.25 11.34-8.54 11.34h-9.23l-.05-11.34.05-11.34ZM212.05 43h21.76c16.15 0 19.23-2.86 19.23-21.06S249.96.88 233.8.88h-21.76V43ZM288.62.88h-18.36L255.73 43h12.42l2.32-8.2h16.9l2.65 8.2h12.96L288.62.88Zm-15.5 24.73 5.89-16.09h.43l5.4 16.1h-11.72ZM337.71.88H325.3l-7.99 15.66h-.32L309.15.88h-12.96l15.23 27.1V43h11.34V27.99L337.7.88Z"
          stroke="#fff"
        />
        <path
          d="M.75.88V43h34.5v-9.72H12.1v-7.02h20.4v-9.18H12.1V10.6h23.16V.88H.76Zm80.49 0H68.82l-8.37 32.4h-.43L51.43.88H38.47L50.95 43H69.3L81.24.88Zm3.22 0V43h34.5v-9.72H95.8v-7.02h20.41v-9.18H95.8V10.6h23.17V.88H84.46Zm64.78 0h-25.17V43h11.34V29.23h11.13c3.61 0 4.75 1.19 4.75 5.94 0 3.78.21 6.05 1.13 7.83h12.42v-.49c-1.73-1.94-2.16-5.61-2.16-9.88 0-5.13-2.43-6.8-7.18-7.88 5.72-1.3 7.78-3.67 7.78-8.7v-1.62C163.28 3 161.16.88 149.24.88ZM135.4 20.59V10.06h10.9c4.76 0 5.63.92 5.63 5.18 0 4.43-.87 5.35-5.62 5.35h-10.9ZM208.8.88h-12.42l-7.99 15.66h-.32L180.24.88h-12.96l15.23 27.1V43h11.34V27.99L208.8.88Zm14.59 9.72h9.23c7.3 0 8.54 1.35 8.54 11.34 0 9.88-1.25 11.34-8.54 11.34h-9.23l-.05-11.34.05-11.34ZM212.05 43h21.76c16.15 0 19.23-2.86 19.23-21.06S249.96.88 233.8.88h-21.76V43ZM288.62.88h-18.36L255.73 43h12.42l2.32-8.2h16.9l2.65 8.2h12.96L288.62.88Zm-15.5 24.73 5.89-16.09h.43l5.4 16.1h-11.72ZM337.71.88H325.3l-7.99 15.66h-.32L309.15.88h-12.96l15.23 27.1V43h11.34V27.99L337.7.88Z"
          fill="#fff"
          mask="url(#wet-footer)"
          stroke="#fff"
        />
        <defs>
          <mask id="wet-footer">
            <motion.rect fill="#fff" style={{height: wetPercentage}} width="100%" x="0" y="0" />
          </mask>
        </defs>
      </svg>
    </footer>
  );
};

export default Footer;
