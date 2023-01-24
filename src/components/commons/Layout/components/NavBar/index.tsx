import React from "react";
import Image from "next/image";
import Link from "next/link";

const NavBar = () => (
  <nav className="container flex justify-between items-end bg-black py-6 md:py-8 sticky top-0 z-50">
    <Link href="/">
      <Image alt="Basement" className="hidden md:block" height={29} src="/logo.svg" width={192} />
      <Image alt="Basement" className="md:hidden" height={40} src="/icon-logo.svg" width={43} />
    </Link>
    <Image
      alt="HD 4k"
      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/4 hidden md:block"
      height={24}
      src="/hd-4k.svg"
      width={284}
    />
    <button className="leading-none border px-6 py-3 rounded-full text-14 uppercase font-bold md:px-8 md:text-18">
      Cart (0)
    </button>
  </nav>
);

export default NavBar;
