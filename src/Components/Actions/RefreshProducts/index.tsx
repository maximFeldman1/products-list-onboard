import { useProductContext } from "../../../context/contextProducts";
import React from "react";
import styled from "styled-components";

const Button = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

export const RefreshProducts = () => {
  const { refetch } = useProductContext();

  return (
    <Button onClick={refetch}>
      <i className="pi pi-refresh"></i>
    </Button>
  );
};
