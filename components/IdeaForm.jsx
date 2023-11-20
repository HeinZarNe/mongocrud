"use client";
import { Formik } from "formik";

export default function IdeaForm({ submitForm, defaultValues }) {
  return (
    <Formik
      initialValues={{
        title: defaultValues?.title || "",
        description: defaultValues?.description || "",
      }}
      validate={(values) => {
        const errors = {};
        if (!values.title) {
          errors.title = "Required";
        } else if (typeof values.title != "string") {
          errors.title = "Invalid Title";
        }
        if (!values.description) {
          errors.description = "Required";
        } else if (typeof values.description != "string") {
          errors.description = "Invalid description";
        }
        return errors;
      }}
      onSubmit={submitForm}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        isValid,
        /* and other goodies */
      }) => (
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <div className="w-full">
            {" "}
            <p className="text-sm text-red-500">
              {errors.title && touched.title && errors.title}
            </p>
            <input
              type="text"
              name="title"
              className="border border-slate-500 px-5 py-3 w-full"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.title}
              placeholder="Title"
            />
          </div>
          <div className="w-full">
            {" "}
            <p className="text-sm text-red-500">
              {errors.description && touched.description && errors.description}
            </p>
            <input
              type="text"
              className="border border-slate-500 px-5 py-3 w-full"
              name="description"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.description}
              placeholder="Description"
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className={` ${
              isValid ? "bg-green-600" : "bg-green-800 "
            }  rounded font-bold  text-white px-6 py-3 w-fit  cursor-pointer `}
          >
            {defaultValues ? "Update" : "Add iDea"}
          </button>
        </form>
      )}
    </Formik>
  );
}
