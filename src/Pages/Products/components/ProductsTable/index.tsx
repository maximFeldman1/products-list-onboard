import { useQuery } from "react-query";
import { AgGridReact } from "@ag-grid-community/react";
import styled from "styled-components";
import { ProductService } from "../../../../services";
import { productColumns } from "./productColumns";
import { ModuleRegistry } from "@ag-grid-community/core";
import { ClientSideRowModelModule } from "@ag-grid-community/client-side-row-model";
import {
  useContext,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import {
  ProductContextProvider,
  useProductContext,
} from "../../../../context/contextProducts";

ModuleRegistry.registerModules([ClientSideRowModelModule]);

const Root = styled.div`
  width: 100vw;
  height: 100vh;
  margin-top: 30px;
`;

export const ProductsTable = () => {
  const { products, refetch } = useProductContext();
  console.log("1", refetch);

  return (
    <ProductContextProvider value={products}>
      <Root className="ag-theme-alpine">
        <AgGridReact rowData={products} columnDefs={productColumns} />
      </Root>
    </ProductContextProvider>
  );
};
