import { useQuery } from "react-query";
import { AgGridReact } from "@ag-grid-community/react";
import styled from "styled-components";
import { ProductService } from "../../../../services";
import { productColumns } from "./productColumns";

const Root = styled.div`
  width: 100vw;
  height: 100vh;
  margin-top: 30px;
`;

export const ProductsTable = () => {
  const { data: products } = useQuery("getAllProducts", ProductService.getAll);

  return (
    <Root className="ag-theme-alpine">
      <AgGridReact rowData={products?.data} columnDefs={productColumns} />
    </Root>
  );
};
