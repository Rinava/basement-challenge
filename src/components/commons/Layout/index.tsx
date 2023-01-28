import Cursor from "../../Cursor";
import Cart from "../../Cart";

import Meta from "./components/Meta";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({children}: LayoutProps) => (
  <>
    <Cursor />
    <Meta />
    <NavBar />
    <Cart />
    {children}
    <Footer />
  </>
);

export default Layout;
