import React from "react";
import { InputText } from "primereact/inputtext";
import { ErrorMessage } from "formik";

export const InputField = ({
  value,
  type,
  name,
  errors,
  ...defaultProps
}: any) => {
  return (
    <span className="p-float-label mt-4">
      <InputText name={name} type={type} value={value} {...defaultProps} />
      <label htmlFor={name}>{name}</label>
      <div>{errors}</div>
    </span>
  );
};
