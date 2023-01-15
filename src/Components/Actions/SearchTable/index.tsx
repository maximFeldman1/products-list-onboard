import React, { useCallback, useEffect, useState } from "react";
import { InputText } from "primereact/inputtext";
import { useProductContext } from "../../../context/contextProducts";

import { useTranslation } from "react-i18next";

export const SearchTable = () => {
  const { onSearchChange } = useProductContext();
  const { t } = useTranslation();

  return (
    <div>
      <InputText
        type="text"
        onChange={onSearchChange}
        placeholder={t("search.placeholder") || ""}
      />
    </div>
  );
};
