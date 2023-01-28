import Image from "next/image";
import clsx from "clsx";
import {motion} from "framer-motion";

import {Product} from "../../types/product";
import {useCart} from "../../contexts/CartContext";
import {useCursor} from "../../contexts/CursorContext";
import {useDragToCart} from "../../contexts/DragToCartContext";

interface Props {
  product: Product;
  className: string;
}
const MotionImage = motion(Image);
const Product = ({product, className}: Props) => {
  const {
    drag: {state: dragState, set: setDragState},
    isMouseCloserToCart,
  } = useDragToCart();
  const {
    addToCart: {open: openAddToCart},
  } = useCart();
  const {setCursor} = useCursor();

  return (
    <li className={clsx("group", className)}>
      <div className="relative drop-shadow-orange">
        <div className="z-10 absolute w-full h-full bg-gradient-to-b from-black to-[#1D1D1D] transition-transform asdgroup-hover:scale-y-125 origin-bottom-left duration-500" />
        <MotionImage
          drag
          dragSnapToOrigin
          alt={product.title}
          className="relative z-20 w-full aspect-[343/392] md:aspect-[440/578] object-cover bg-opacity-0  group-hover:drop-shadow-[0_0px_0.25rem_#fff]"
          dragTransition={{bounceStiffness: 200, bounceDamping: 20}}
          height={392}
          src={product.image}
          whileDrag={{
            scale: isMouseCloserToCart.value ? 0.3 : 0.5,
            zIndex: 100,
          }}
          width={343}
          onAnimationComplete={() => {
            if (dragState === "releasing") {
              setDragState(null);
            }
          }}
          onDragEnd={() => {
            setDragState("releasing");
            if (isMouseCloserToCart.value) {
              openAddToCart(product);
            }
          }}
          onDragStart={() => {
            setCursor("grab");
            setDragState("grabbing");
          }}
          onMouseEnter={() => setCursor("addProduct")}
          onMouseLeave={() => setCursor("default")}
        />
        <Image
          alt={product.title}
          className="absolute left-0 top-0 z-10 w-full aspect-[343/392] md:aspect-[440/578] object-cover bg-opacity-0  drop-shadow-[0_0px_0.25rem_#fff] brightness-0 "
          height={392}
          src={product.image}
          width={343}
        />
      </div>
      <div className=" pt-2 md:pt-4 flex  border-t-2 border-solid border-white justify-between group-hover:text-orange duration-500 transition-colors">
        <h3 className="text-20 md:text-21">{product.title}</h3>
        <p className="text-20  md:text-21">${product.price}</p>
      </div>
    </li>
  );
};

export default Product;
