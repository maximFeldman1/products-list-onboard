import React from "react";
import { Dropdown } from "primereact/dropdown";

interface IProps {
  value: string;
  name: string;
  errors: string | undefined;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void | undefined;
  options: string[];
  placeholder: string | undefined;
}

export const DropdownField = ({
  value,
  name,
  errors,
  options,
  ...defaultProps
}: IProps) => {
  return (
    <>
      <span className="p-float-label mt-4">
        <Dropdown
          name={name}
          value={value}
          options={options}
          {...defaultProps}
        />
        <label htmlFor={name}>{name}</label>
        {<div>{errors}</div>}
      </span>
    </>
  );
};
