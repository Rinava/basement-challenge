import clsx from "clsx";
import Image from "next/image";

interface HeaderProps {
  className?: string;
}

const Header = ({className}: HeaderProps) => {
  return (
    <header className={clsx("container flex flex-col items-center", className)}>
      <Image alt="Basement Supply" height={365} src="/header.svg" width={1376} />
    </header>
  );
};

export default Header;
