import type {AppProps} from "next/app";
import Head from "next/head";

import Layout from "../components/commons/Layout";

import "../css/global.css";

function App({Component, pageProps}: AppProps) {
  return (
    <>
      <Head>
        <title>Basement Supply</title>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
export default App;
