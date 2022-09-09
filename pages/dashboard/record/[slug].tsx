import RecordDetail from "container/RecordDetail";
import type { NextPage, GetServerSideProps } from "next";
import { Fragment } from "react";

const recordDetailPage: any = () => {
  return (
    <Fragment>
      <RecordDetail />
    </Fragment>
  );
};

recordDetailPage.dashboard = true;
export const getServerSideProps: GetServerSideProps = async (ctx) => {
  return {
    props: {},
  };
};

export default recordDetailPage;
