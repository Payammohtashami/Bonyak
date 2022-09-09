import Record from "container/Record";
import type { NextPage, GetServerSideProps } from "next";
import { Fragment } from "react";

const RecordPage: any = () => {
  return (
    <Fragment>
      <Record />
    </Fragment>
  );
};

RecordPage.dashboard = true;
export const getServerSideProps: GetServerSideProps = async (ctx) => {
  return {
    props: {},
  };
};

export default RecordPage;
