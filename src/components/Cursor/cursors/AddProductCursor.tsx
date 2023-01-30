import {motion} from "framer-motion";

const AddProductCursor = () => (
  <div className="-translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center">
    <motion.p
      animate={{
        scale: [0, 1.2, 1],
        color: ["#000", "#000", "#ff4d00"],
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
      <path d="M63.9941 125.661c34.6058 0 62.6589-27.906 62.6589-62.3303S98.5999 1 63.9941 1C29.3884 1 1.33484 28.9064 1.33484 63.3307S29.3884 125.661 63.9941 125.661Z" />
      <path d="M63.9939 125.661c24.5249 0 44.4061-27.906 44.4061-62.3303S88.5188 1 63.9939 1C39.469 1 19.5876 28.9064 19.5876 63.3307S39.469 125.661 63.9939 125.661Z" />
      <path d="M63.9938 125.661c14.4598 0 26.1818-27.906 26.1818-62.3303S78.4536 1 63.9938 1C49.5341 1 37.8121 28.9064 37.8121 63.3307s11.722 62.3303 26.1817 62.3303Z" />
      <path d="M63.9942 125.661c4.3789 0 7.9287-27.906 7.9287-62.3303S68.3731 1 63.9942 1s-7.9286 27.9064-7.9286 62.3307 3.5497 62.3303 7.9286 62.3303ZM28.9141 11.7806h70.3027M9.5199 32.406H118.439M9.57629 94.2264H118.382M28.7428 114.852h70.4739" />
    </svg>
  </div>
);

export default AddProductCursor;
