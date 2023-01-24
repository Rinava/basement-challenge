import React from "react";

import Header from "./components/Header";
import Footer from "./components/Footer";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({children}: LayoutProps) => {
  return (
    <div className="h-full flex flex-col justify-between bg-black">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
