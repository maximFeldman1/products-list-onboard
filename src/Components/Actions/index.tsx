import React from "react";
import { CreateProductBtn } from "./CreateProductBtn";
import { SearchTable } from "./SearchTable";
import styled from "styled-components";
import { RefreshProducts } from "./RefreshProducts";

const Root = styled.div`
  display: flex;
  justify-content: space-around;
`;
const WrapperBtn = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Action = () => {
  return (
    <Root>
      <SearchTable />
      <WrapperBtn>
        <CreateProductBtn />
        <RefreshProducts />
      </WrapperBtn>
    </Root>
  );
};
