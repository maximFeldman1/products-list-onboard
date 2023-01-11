import React, { useCallback, useEffect, useState } from "react";
import { InputText } from "primereact/inputtext";
import { useProductContext } from "../../../context/contextProducts";
import debounce from "lodash.debounce";
import { useTranslation } from "react-i18next";

export const SearchTable = () => {
  const { text, setText } = useProductContext();
  const { t } = useTranslation();

  const changeHandler = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setText(e.target.value);
    },
    []
  );

  const onChangeHandler = debounce(changeHandler, 1000);

  return (
    <div>
      <InputText
        type="text"
        onChange={onChangeHandler}
        placeholder={t("search.placeholder") || ""}
      />
    </div>
  );
};
