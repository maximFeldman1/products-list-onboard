import styled from "styled-components";
import { Action } from "../../components";
import { ProductsTable } from "./components";

const Root = styled.div`
  display: flex;
  flex-direction: column;
`;

const Products = () => (
  <Root>
    <Action />
    <ProductsTable />
  </Root>
);
export default Products;
