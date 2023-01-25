import React from "react";
import Image from "next/image";
import Link from "next/link";

const NavBar = () => (
  <nav className=" bg-black py-6 md:py-8 sticky top-0 z-50">
    <div className="flex justify-between items-end container">
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
      <button className="leading-none border px-5 py-3 rounded-full text-14 uppercase font-bold md:px-8 md:py-4 md:text-18">
        Cart (1)
      </button>
    </div>
  </nav>
);

export default NavBar;
