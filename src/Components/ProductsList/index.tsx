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
import { columnDefs } from "../../utils";
ModuleRegistry.registerModules([ClientSideRowModelModule]);

const Root = styled.div`
  margin-top: 30px;
`;

const ProductList = () => {
  const { data } = useQuery("allProducts", ProductService.getAll);

  const containerStyle = useMemo(
    () => ({ width: "100vw", height: "100vh" }),
    []
  );
  const gridStyle = useMemo(() => ({ height: "100vh", width: "100vw" }), []);

  const getRowId = useMemo<GetRowIdFunc>(() => {
    return (params: GetRowIdParams) => params.data.id;
  }, []);

  return (
    <Root>
      <div style={containerStyle}>
        <div style={gridStyle} className="ag-theme-alpine">
          <AgGridReact
            rowData={data?.data}
            columnDefs={columnDefs}
            getRowId={getRowId}
          ></AgGridReact>
        </div>
      </div>
    </Root>
  );
};

export default ProductList;
