import React from "react";

import Footer from "./components/Footer";
import Meta from "./components/Meta";
import NavBar from "./components/NavBar";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({children}: LayoutProps) => {
  return (
    <>
      <Meta />
      <NavBar />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
