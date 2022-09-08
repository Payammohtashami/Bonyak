import Register from "container/Register/index";
import type { NextPage, GetServerSideProps } from "next";
import { Fragment } from "react";

const RegisterPage: NextPage = () => {
  return (
    <Fragment>
      <Register />
    </Fragment>
  );
};
export const getServerSideProps: GetServerSideProps = async (ctx) => {
  return {
    props: {},
  };
};

export default RegisterPage;
