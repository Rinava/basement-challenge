import {useState, useContext, useEffect, useRef} from "react";
import {motion} from "framer-motion";
import Image from "next/image";
import Link from "next/link";

import {CartContext} from "../..";
import {DragCartContext} from "../..";
const NavBar = () => {
  const cartButtonRef = useRef<HTMLButtonElement>(null);
  const {items, setCartOpen} = useContext(CartContext);
  const {setPositionClose} = useContext(DragCartContext);
  const [mousePosition, setMousePosition] = useState({x: 0, y: 0});
  const [cartBoundingBox, setCartBoundingBox] = useState({x: 0, y: 0, width: 0, height: 0});
  const handleMouseMove = (e: any) => {
    if (e.type === "touchmove") {
      setMousePosition({x: e.touches[0].clientX, y: e.touches[0].clientY});
    } else {
      setMousePosition({x: e.clientX, y: e.clientY});
    }
  };

  const getBoundingBox = () => {
    if (cartButtonRef.current) {
      const {x, y, width, height} = cartButtonRef.current.getBoundingClientRect();

      setCartBoundingBox({x, y, width, height});
    }
  };

  useEffect(() => {
    getBoundingBox();
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("touchmove", handleMouseMove);
    window.addEventListener("resize", getBoundingBox);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchmove", handleMouseMove);
      window.removeEventListener("resize", getBoundingBox);
    };
  }, []);
  const offset = 100;

  useEffect(() => {
    if (
      mousePosition.x > cartBoundingBox.x - offset &&
      mousePosition.x < cartBoundingBox.x + cartBoundingBox.width + offset
    ) {
      if (
        mousePosition.y > cartBoundingBox.y - offset &&
        mousePosition.y < cartBoundingBox.y + cartBoundingBox.height + offset
      ) {
        setPositionClose(true);
        console.log("inside");
      } else {
        setPositionClose(false);
      }
    } else {
      setPositionClose(false);
    }
  }, [mousePosition]);

  return (
    <>
      <nav className="bg-black py-6 md:py-8 fixed w-full top-0 z-50">
        <div className="flex justify-between items-end container">
          <Link href="/">
            <Image alt="" className="hidden md:block" height={29} src="/logo.svg" width={192} />
            <Image alt="" className="md:hidden" height={40} src="/icon-logo.svg" width={43} />
          </Link>
          <Image
            alt="HD 4k"
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/4 hidden md:block"
            height={24}
            src="/hd-4k.svg"
            width={284}
          />
          <motion.button
            ref={cartButtonRef}
            className="leading-none border px-5 py-3 rounded-full text-14 uppercase font-bold md:px-8 md:py-4 md:text-18"
            whileHover={{scale: 1.1, transition: {duration: 0.2}}}
            whileTap={{scale: 0.9}}
            onClick={() => setCartOpen(true)}
          >
            Cart (1)
          </motion.button>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
