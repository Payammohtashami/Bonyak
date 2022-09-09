import Course from "container/Course";
import type { NextPage, GetServerSideProps } from "next";
import { Fragment } from "react";

const CoursePage: any = () => {
  return (
    <Fragment>
      <Course />
    </Fragment>
  );
};

CoursePage.dashboard = true;
export const getServerSideProps: GetServerSideProps = async (ctx) => {
  return {
    props: {},
  };
};

export default CoursePage;
