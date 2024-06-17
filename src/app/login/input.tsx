import { ErrorMessage, Field } from "formik";

interface Props {
  label: string;
  type: string;
  id: string;
  classNameLabel?: string;
  classNameControl?: string;
}
export default function InputFormik(props: Props) {
  return (
    <div className="mb-5">
      <label
        htmlFor={props.id}
        className={`block mb-2 text-sm font-medium text-gray-900 dark:text-white ${props.classNameLabel}`}
      >
        {props.label}
      </label>
      <Field
        type={props.type}
        id={props.id}
        name={props.id}
        className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${props.classNameControl}`}
      />
      <ErrorMessage name={props.id} className="text-red-500" component={"div"}  />
    </div>
  );
}
