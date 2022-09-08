import { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import actionToast from "redux/store/toast/action";
import { useTranslation } from "next-i18next";

const WithErrorHandler = ({ children }: any) => {
  const dispatch = useDispatch();
  const [error, setError] = useState<any>(null);
  const { t } = useTranslation("global");

  const reqInterceptor = axios.interceptors.request.use((req) => {
    setError(null);
    return req;
  });

  const resInterceptor = axios.interceptors.response.use(
    (res) => {
      return res;
    },
    (err) => {
      setError(err);
      throw err;
    }
  );

  useEffect(() => {
    return () => {
      axios.interceptors.request.eject(reqInterceptor);
      axios.interceptors.response.eject(resInterceptor);
    };
  }, [reqInterceptor, resInterceptor]);

  useEffect(() => {
    if (error)
      if (error?.message === "Network Error") {
        dispatch(
          actionToast.request(
            {
              type: "warning",
              title: t("global:network-error.title"),
              message: t("global:network-error.message"),
            },
            () => {}
          )
        );
      }
  }, [error]);

  return children;
};
export default WithErrorHandler;
