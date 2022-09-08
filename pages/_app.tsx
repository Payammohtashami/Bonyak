import React from "react";
import PagesLayout from "components/PagesLayout";
import { wrapper } from "redux/store";
import type { AppProps } from "next/app";
import 'styles/app.sass';
function MyApp({ Component, pageProps, ...MyAppProps }: AppProps) {

  return (
    <>
        <PagesLayout Component={Component} pageProps={pageProps} />
    </>
  );
}

export default wrapper.withRedux(MyApp)
