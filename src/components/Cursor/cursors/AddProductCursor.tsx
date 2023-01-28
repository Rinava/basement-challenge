import {motion} from "framer-motion";

const AddProductCursor = () => (
  <div className="-translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center">
    <motion.p
      animate={{
        scale: [0, 1.2, 1],
        color: ["#000000", "#000000", "#ff4d00"],
        rotate: [360, 10, 0],
      }}
      className="uppercase text-[1.9rem] text-black whitespace-nowrap absolute text-stroke"
      transition={{duration: 0.5, times: [0, 0.7, 1], loop: Infinity, ease: "easeInOut"}}
    >
      Grab to cart
    </motion.p>

    <svg
      fill="none"
      height="127"
      stroke="white"
      strokeWidth="1.51786"
      viewBox="0 0 128 127"
      width="128"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M63.9941 125.661C98.5999 125.661 126.653 97.755 126.653 63.3307C126.653 28.9064 98.5999 1 63.9941 1C29.3884 1 1.33484 28.9064 1.33484 63.3307C1.33484 97.755 29.3884 125.661 63.9941 125.661Z" />
      <path d="M63.9939 125.661C88.5188 125.661 108.4 97.755 108.4 63.3307C108.4 28.9064 88.5188 1 63.9939 1C39.469 1 19.5876 28.9064 19.5876 63.3307C19.5876 97.755 39.469 125.661 63.9939 125.661Z" />
      <path d="M63.9938 125.661C78.4536 125.661 90.1756 97.755 90.1756 63.3307C90.1756 28.9064 78.4536 1 63.9938 1C49.5341 1 37.8121 28.9064 37.8121 63.3307C37.8121 97.755 49.5341 125.661 63.9938 125.661Z" />
      <path d="M63.9942 125.661C68.3731 125.661 71.9229 97.755 71.9229 63.3307C71.9229 28.9064 68.3731 1 63.9942 1C59.6153 1 56.0656 28.9064 56.0656 63.3307C56.0656 97.755 59.6153 125.661 63.9942 125.661Z" />
      <path d="M28.9141 11.7806H99.2168" />
      <path d="M9.5199 32.406H118.439" />
      <path d="M9.57629 94.2264H118.382" />
      <path d="M28.7428 114.852H99.2167" />
    </svg>
  </div>
);

export default AddProductCursor;
