import React from "react";
import { InputText } from "primereact/inputtext";
interface IProps {
  value: number | string;
  type: string;
  name: string;
  errors: string | undefined;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
  required: boolean;
}

export const InputField = ({
  value,
  type,
  name,
  errors,
  ...defaultProps
}: IProps) => {
  return (
    <>
      <span className="p-float-label mt-4">
        <InputText name={name} type={type} value={value} {...defaultProps} />
        <label htmlFor={name}>{name}</label>
        {<div>{errors}</div>}
      </span>
    </>
  );
};
