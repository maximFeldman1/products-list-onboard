import React from "react";
import styled from "styled-components";

const Root = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  background-color: grey;
`;

export const Header = () => {
  return (
    <Root>
      <h1>Products List</h1>
    </Root>
  );
};
