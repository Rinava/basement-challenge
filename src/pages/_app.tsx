import type {AppProps} from "next/app";

import Layout from "../components/commons/Layout";

import "../css/global.css";

function App({Component, pageProps}: AppProps) {
  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
export default App;
