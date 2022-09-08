import Home from "container/Home/index";
import type { NextPage, GetServerSideProps } from "next";
import { Fragment } from "react";

const HomePage: NextPage = () => {
  return (
    <Fragment>
      <Home />
    </Fragment>
  );
};
export const getServerSideProps: GetServerSideProps = async (ctx) => {
  return {
    props: {},
  };
};

export default HomePage;
