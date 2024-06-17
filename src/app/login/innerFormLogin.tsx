import { Form } from "formik";
import InputFormik from "./input";

export default function InnerFormLogin() {
  return (
    <>
      <Form className="max-w-sm mx-auto flex flex-col justify-center items-center h-screen ">
        <InputFormik type="email" id="email" label="Your email:" />
        <InputFormik type="password" id="password" label="Your password:" />

        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-20 py-2.5  text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button>
      </Form>
    </>
  );
}
