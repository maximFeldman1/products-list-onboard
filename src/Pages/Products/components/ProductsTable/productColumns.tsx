import { ColDef, ColumnGroup } from "ag-grid-community";
import { ICreateProduct, IProduct } from "models";
import { DropdownSelector } from "../../../../ui-kit/dropdown";
import styled from "styled-components";
const Image = styled.img`
  width: 30%;
  height: 100%;
`;

export const productColumns = [
  { headerName: "ID", valueGetter: "node.id" },
  { field: "name" },
  { field: "brand" },
  { field: "price" },
  {
    field: "image",
    cellRenderer: ({ data }: any) => {
      return <Image src={data.image} alt="icon" />;
    },
  },
  {
    field: "menu",
    cellRenderer: ({ data }: any) => {
      return <DropdownSelector productId={data.id} productData={data} />;
    },
  },
];
