import {useState, useEffect, useRef} from "react";
import Image from "next/image";
import {motion} from "framer-motion";

import {useCart} from "../../../../../contexts/CartContext";
import {useMouse} from "../../../../../contexts/MouseContext";
import {useDragToCart} from "../../../../../contexts/DragToCartContext";
import Actionable from "../../../Actionable";

const MotionActionable = motion(Actionable);

const NavBar = () => {
  const cartButtonRef = useRef<HTMLButtonElement>(null);

  const {position: mousePosition} = useMouse();
  const {isMouseCloserToCart} = useDragToCart();
  const {cart} = useCart();

  const [cartButtonBB, setCartButtonBB] = useState({
    x: 0,
    y: 0,
    width: 0,
    height: 0,
  });

  const getBoundingBox = () => {
    if (cartButtonRef.current) {
      const {x, y, width, height} = cartButtonRef.current.getBoundingClientRect();

      setCartButtonBB({x, y, width, height});
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

    const conditions =
      mousePosition.x > cartButtonBB.x - offset &&
      mousePosition.x < cartButtonBB.x + cartButtonBB.width + offset &&
      mousePosition.y > cartButtonBB.y - offset &&
      mousePosition.y < cartButtonBB.y + cartButtonBB.height + offset;

    isMouseCloserToCart.set(conditions);
  }, [cartButtonBB, mousePosition, isMouseCloserToCart]);

  return (
    <>
      <nav className="bg-black fixed w-full top-0 z-navbar py-6 md:py-8">
        <div className="select-none container flex justify-between items-center">
          <Actionable action="/">
            <Image
              alt="go to home page"
              className="hidden md:block"
              height={29}
              src="images/logo.svg"
              width={192}
            />
            <Image
              alt="go to home page"
              className="md:hidden"
              height={40}
              src="images/icon-logo.svg"
              width={43}
            />
          </Actionable>
          <Image
            alt=""
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 hidden md:block"
            height={24}
            src="images/hd-4k.svg"
            width={284}
          />
          <MotionActionable
            ref={cartButtonRef}
            action={() => cart.setOpenState(true)}
            className="leading-none border rounded-full uppercase w-28 h-10 text-14 md:w-40 md:h-12 md:text-18"
            whileHover={{scale: 1.1, transition: {duration: 0.2}}}
            whileTap={{scale: 0.95}}
          >
            Cart ({cart.items.length})
          </MotionActionable>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
