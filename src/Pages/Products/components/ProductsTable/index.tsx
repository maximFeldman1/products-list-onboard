import { useQuery } from "react-query";
import { AgGridReact } from "@ag-grid-community/react";
import styled from "styled-components";
import { ProductService } from "../../../../services";
import { productColumns } from "./productColumns";
import { ModuleRegistry } from "@ag-grid-community/core";
import { ClientSideRowModelModule } from "@ag-grid-community/client-side-row-model";
import { useEffect, useLayoutEffect, useState } from "react";
import { IProduct } from "models";

ModuleRegistry.registerModules([ClientSideRowModelModule]);
const Root = styled.div`
  width: 100vw;
  height: 100vh;
  margin-top: 30px;
`;

export const ProductsTable = () => {
  const { data: products, refetch } = useQuery(
    "getAllProducts",
    ProductService.getAll
  );
  // refetch("getAllProducts");
  return (
    <Root className="ag-theme-alpine">
      <AgGridReact rowData={products?.data} columnDefs={productColumns} />
    </Root>
  );
};
