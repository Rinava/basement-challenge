import type {AppProps} from "next/app";

import CartProvider from "../contexts/CartContext";
import CursorProvider from "../contexts/CursorContext";
import DragToCartProvider from "../contexts/DragToCartContext";
import MouseProvider from "../contexts/MouseContext";
import Layout from "../components/commons/Layout";

import "../css/global.css";

function App({Component, pageProps}: AppProps) {
  return (
    <MouseProvider>
      <DragToCartProvider>
        <CursorProvider>
          <CartProvider>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </CartProvider>
        </CursorProvider>
      </DragToCartProvider>
    </MouseProvider>
  );
}
export default App;
