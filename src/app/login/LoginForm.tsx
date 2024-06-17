"use client";
import { withFormik } from "formik";
import InnerFormLogin from "./innerFormLogin";
import * as Yup from "yup";
import CallApi from "../helper/callApi";
import { AxiosError } from "axios";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
const LoginObjectSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required Email"),
  password: Yup.string().min(6, "Too Short!").required("Required password"),
});
interface FormValues {
  email: string;
  password: string;
}
interface InitialForm {
  initialEmail?: string;
  router?: AppRouterInstance;
}
const LoginForm = withFormik<InitialForm, FormValues>({
  validationSchema: LoginObjectSchema,
  mapPropsToValues: (props) => {
    return {
      email: props.initialEmail || "",
      password: "",
    };
  },
  handleSubmit: async (values, { props }) => {
    try {
      const res = await CallApi().post("login", values);
      const { data } = res;
      alert(data.message);
      props.router?.push("/dashboard");
    } catch (error) {
      const err = error as AxiosError;
      alert(err.message);
    }
  },
})(InnerFormLogin);

export default LoginForm;
