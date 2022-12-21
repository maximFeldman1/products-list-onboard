import { ProductService } from "../../shared/services/product-service";
import { useQuery } from "react-query";
import React, { useCallback, useMemo, useRef, useState } from "react";
import { render } from "react-dom";
import { AgGridReact } from "@ag-grid-community/react";
// import "@ag-grid-community/styles/ag-grid.css";
// import "@ag-grid-community/styles/ag-theme-alpine.css";
import {
  ColDef,
  ColGroupDef,
  GetRowIdFunc,
  GetRowIdParams,
  Grid,
  GridOptions,
} from "@ag-grid-community/core";
import { ModuleRegistry } from "@ag-grid-community/core";
import { ClientSideRowModelModule } from "@ag-grid-community/client-side-row-model";
import styled from "styled-components";
import { Action } from "../../components/Actions";
import ProductList from "../../components/ProductsList";
ModuleRegistry.registerModules([ClientSideRowModelModule]);

const Root = styled.div`
  display: flex;
  flex-direction: column;
`;

const Products = () => {
  return (
    <Root>
      <Action />
      <ProductList />
    </Root>
  );
};

export default Products;
