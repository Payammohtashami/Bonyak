import React from "react";
import styles from "./PagesLayout.module.sass";
import WithErrorHandler from "../WithErrorHandler";
import Header from "components/Header";
import Footer from "components/Footer";
import DashboardLayout from "./DashboardLayout";

type LayoutComponentType = {
  pageProps: Object,
  Component: any
}

const PagesLayout: React.FC<LayoutComponentType> = ({ Component, pageProps }) => {

  return (
    <WithErrorHandler>
      <div>
        {!Component.headerHide ? <Header /> : ""}
        {Component.dashboard ? (
          <DashboardLayout>
            <div className={[styles.inner].join(" ")}>
              <Component {...pageProps} />
            </div>
          </DashboardLayout>
        ) : (
          <>
            <div className={[styles.inner, !Component.headerHide && styles["mr-top"]].join(" ")}>
              <Component {...pageProps} />
            </div>
          </>
        )}
        <Footer />
      </div>
    </WithErrorHandler>
  );
};

export default PagesLayout;
