import Image from "next/image";

import NavBar from "../NavBar";
const Header = ({}) => {
  return (
    <header>
      <NavBar />
      <Image alt="Basement Supply" height={365} src="/header.svg" width={1376} />
      <p className="text-4xl py-3.5 border-y border-solid border-white ">
        A man can’t have enough base­ment swag  —  A man can’t have enough base­ment swag
      </p>
    </header>
  );
};

export default Header;
