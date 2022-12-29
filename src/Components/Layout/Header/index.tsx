import React from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";

const Root = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  background-color: grey;
`;

export const Header = () => {
  const { t } = useTranslation();
  return (
    <Root>
      <h1>{t("title")}</h1>
    </Root>
  );
};
