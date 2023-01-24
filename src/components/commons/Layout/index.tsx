import React from "react";
import Head from "next/head";

import Footer from "./components/Footer";
import NavBar from "./components/NavBar";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({children}: LayoutProps) => {
  return (
    <>
      <Head>
        <title>Basement Supply</title>
        <meta content="The store where to find real Basement swag" name="description" />
        <meta content="#000000" name="theme-color" />
        <meta charSet="utf-8" name="chartSet" />
        <meta content="IE=edge" httpEquiv="X-UA-Compatible" />
        <meta content="Basement supply, merchandise, swag, basement, store, shop" name="keywords" />
        <meta content="Basement Studio" name="author" />
        <meta content="Property of Basement Studio" name="copyright" />
        <meta content="width=device-width, initial-scale=1.0" name="viewport" />
        <link href="/manifest.json" rel="manifest" />
        <link href="/favicon.ico" rel="apple-touch-icon" />
        <link href="/favicon.ico" rel="icon" />
      </Head>
      <NavBar />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
