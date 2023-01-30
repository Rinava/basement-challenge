import {useState} from "react";
import Image from "next/image";
import {motion} from "framer-motion";
import clsx from "clsx";

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
  const [grabbing, setGrabbing] = useState(false);
  const {cursor, setCursor} = useCursor();
  const {isMouseCloserToCart} = useDragToCart();
  const {addToCart} = useCart();

  const handleDragStart = () => {
    setCursor("grab");
    setGrabbing(true);
  };
  const handleDragEnd = () => {
    isMouseCloserToCart.value && addToCart.open(product);

    setCursor("default");
    setGrabbing(false);
  };
  const handleMouseEnter = () => cursor !== "grab" && setCursor("addProduct");
  const handleMouseLeave = () => cursor !== "grab" && setCursor("default");

  return (
    <li className={clsx("group", className)}>
      <div className="relative drop-shadow-orange">
        <div className="absolute z-10 w-full h-full bg-gradient-to-b from-black to-[#1D1D1D]" />
        <MotionImage
          drag
          dragSnapToOrigin
          alt={product.title}
          className="relative z-20 w-full object-cover group-hover:drop-shadow-[0_0px_0.25rem_#fff] aspect-[343/392] md:aspect-[440/578]"
          dragTransition={{bounceStiffness: 200, bounceDamping: 20}}
          height={392}
          src={product.image}
          whileDrag={{
            scale: isMouseCloserToCart.value ? 0.3 : 0.5,
            zIndex: 201,
          }}
          width={343}
          onDragEnd={handleDragEnd}
          onDragStart={handleDragStart}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        />
        <Image
          alt={product.title}
          className={clsx(
            "absolute inset-0 z-10 w-full h-full object-cover brightness-0 transition",
            grabbing && "drop-shadow-[0_0px_0.25rem_#fff]",
          )}
          height={392}
          src={product.image}
          width={343}
        />
      </div>
      <div className="flex border-t-2 border-solid border-white justify-between group-hover:text-orange transition-colors pt-2 md:pt-4">
        <h3 className="text-20 md:text-21">{product.title}</h3>
        <p className="text-20 md:text-21">${product.price}</p>
      </div>
    </li>
  );
};

export default Product;
