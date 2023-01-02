import { ColDef, ColumnGroup } from "ag-grid-community";
import { ICreateProduct, IProduct } from "models";
import { DropdownSelector } from "../../../../ui-kit/dropdown";

export const productColumns = [
  { headerName: "ID", valueGetter: "node.id" },
  { field: "name" },
  { field: "brand" },
  { field: "price" },
  { field: "image" },
  {
    cellRenderer: ({ data }: any) => {
      return <DropdownSelector productId={data.id} productData={data} />;
    },
  },
];
