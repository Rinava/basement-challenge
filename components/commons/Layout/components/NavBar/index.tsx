import React from "react";
import Image from "next/image";
import Link from "next/link";

const NavBar = () => {
  return (
    <nav className="flex justify-between w-full sticky top-0 bg-black">
      <Link passHref href="https://basement.studio">
        <Image alt="Basement" height={29} src="/logo.svg" width={192} />
      </Link>
      <Image alt="HD 4k" height={24} src="/hd-4k.svg" width={284} />
      <button>Cart (0)</button>
    </nav>
  );
};

export default NavBar;
