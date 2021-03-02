import { NextPage } from "next";
import { AppProps } from "next/app";

import "../styles/global.css";

const MyApp: NextPage<AppProps> = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

export default MyApp;
