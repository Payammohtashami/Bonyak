import Dashboard from "container/Dashboard/Base";
import type { NextPage, GetServerSideProps } from "next";
import { Fragment } from "react";

const DashboardPage: any = () => {
  return (
    <Fragment>
      <Dashboard />
    </Fragment>
  );
};

DashboardPage.dashboard = true;
export const getServerSideProps: GetServerSideProps = async (ctx) => {
  return {
    props: {},
  };
};

export default DashboardPage;
