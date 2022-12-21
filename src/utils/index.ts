import { ColDef } from "ag-grid-community";
import { useState } from "react";

export const columnDefs = [
  { headerName: "ID", valueGetter: "node.id" },
  { field: "name" },
  { field: "brand" },
  { field: "price" },
  { field: "image" },
];
