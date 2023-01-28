import {useState, useEffect, useRef} from "react";
import {motion} from "framer-motion";
import Image from "next/image";
import Link from "next/link";

import Button from "../../../../../components/commons/Button";
import {useCart} from "../../../../../contexts/CartContext";
import {useMouse} from "../../../../../contexts/MouseContext";
import {useDragToCart} from "../../../../../contexts/DragToCartContext";

const ButtonMotion = motion(Button);
const NavBar = () => {
  const cartButtonRef = useRef<HTMLButtonElement>(null);

  const {position: mousePosition} = useMouse();

  const {
    isMouseCloserToCart: {set: setMouseCloserToCart},
  } = useDragToCart();

  const [cartBoundingBox, setCartBoundingBox] = useState({
    x: 0,
    y: 0,
    width: 0,
    height: 0,
  });

  const getBoundingBox = () => {
    if (cartButtonRef.current) {
      const {x, y, width, height} = cartButtonRef.current.getBoundingClientRect();

      setCartBoundingBox({x, y, width, height});
    }
  };

  useEffect(() => {
    getBoundingBox();
    window.addEventListener("resize", getBoundingBox);

    return () => {
      window.removeEventListener("resize", getBoundingBox);
    };
  }, []);

  useEffect(() => {
    const offset = 100;

    const condition =
      mousePosition.x > cartBoundingBox.x - offset &&
      mousePosition.x < cartBoundingBox.x + cartBoundingBox.width + offset &&
      mousePosition.y > cartBoundingBox.y - offset &&
      mousePosition.y < cartBoundingBox.y + cartBoundingBox.height + offset;

    setMouseCloserToCart(condition);
  }, [cartBoundingBox, mousePosition, setMouseCloserToCart]);

  const {
    cart: {items, setOpenState},
  } = useCart();

  return (
    <>
      <nav className="bg-black py-6 md:py-8 fixed w-full top-0 z-50">
        <div className="flex justify-between items-end container">
          <Link href="/">
            <Image
              alt=""
              className="hidden md:block"
              height={29}
              src="images/logo.svg"
              width={192}
            />
            <Image alt="" className="md:hidden" height={40} src="images/icon-logo.svg" width={43} />
          </Link>
          <Image
            alt="HD 4k"
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/4 hidden md:block"
            height={24}
            src="images/hd-4k.svg"
            width={284}
          />
          <ButtonMotion
            ref={cartButtonRef}
            className="leading-none border px-5 py-3 rounded-full text-14 uppercase md:px-8 md:py-4 md:text-18"
            whileHover={{scale: 1.1, transition: {duration: 0.2}}}
            whileTap={{scale: 0.9}}
            onClick={() => setOpenState(true)}
          >
            Cart ({items.length})
          </ButtonMotion>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
