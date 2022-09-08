import React from "react";
import styles from "./PagesLayout.module.sass";
import WithErrorHandler from "../WithErrorHandler";
import Header from "components/Header";
import Footer from "components/Footer";

type LayoutComponentType = {
  Component: Function,
  pageProps: Object,
}

interface ComponentManageType {
  headerHide?: boolean,
  footerHide?: boolean,
}

const PagesLayout: React.FC<LayoutComponentType> = ({ Component, pageProps }) => {

  return (
    <WithErrorHandler>
      <div>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </div>
    </WithErrorHandler>
  );
};

export default PagesLayout;
