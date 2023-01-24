import Image from "next/image";

import NavBar from "../NavBar";
const Header = ({}) => {
  return (
    <header className="flex flex-col items-center">
      <NavBar />
      <Image alt="Basement Supply" height={365} src="/header.svg" width={1376} />
      <p className="text-4xl py-3.5 border-y border-solid border-white font-bold overflow-hidden whitespace-nowrap w-full">
        A man can&rsquo;t have enough basement. swag &#8201;&mdash;&#8201; A man can&rsquo;t have
        enough basement. swag &#8201;&mdash;&#8201; A man can&rsquo;t have enough basement. swag
        &#8201;&mdash;&#8201; A man can&rsquo;t have enough basement. swag
      </p>
    </header>
  );
};

export default Header;
