import React from "react";
import { CreateProductBtn } from "./CreateProductBtn";
import { SearchTable } from "./SearchTable";
import styled from "styled-components";

const Root = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const Action = () => {
  return (
    <Root>
      <SearchTable />
      <CreateProductBtn />
    </Root>
  );
};
