import React from "react";
import Image from "next/image";

const Footer = ({}) => {
  return (
    <footer className="container flex justify-center">
      <Image alt="Basement Supply" height={486} src="/footer.svg" width={1376} />
    </footer>
  );
};

export default Footer;
