import React, { useCallback, useEffect, useState } from "react";
import { InputText } from "primereact/inputtext";
import { useProductContext } from "../../../context/contextProducts";
import debounce from "lodash.debounce";

export const SearchTable = () => {
  const { text, setText } = useProductContext();

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const debouncedChangeHandler = debounce(changeHandler, 1000);

  return (
    <div>
      <InputText
        type="text"
        onChange={debouncedChangeHandler}
        placeholder="type..."
      />
    </div>
  );
};
