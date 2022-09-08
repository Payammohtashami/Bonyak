import Login from "container/Login/index";
import type { NextPage, GetServerSideProps } from "next";
import { Fragment } from "react";

const LoginPage: any = () => {
  return (
    <Fragment>
      <Login />
    </Fragment>
  );
};

LoginPage.headerHide = true;
export const getServerSideProps: GetServerSideProps = async (ctx) => {
  return {
    props: {},
  };
};

export default LoginPage;
