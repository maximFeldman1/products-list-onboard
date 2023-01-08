import styled from "styled-components";
import { Action } from "../../components";
import { ProductsTable } from "./components";
import { ProductContextProvider } from "../../context/contextProducts";

const Root = styled.div`
  display: flex;
  flex-direction: column;
`;

const Products = () => (
  <ProductContextProvider>
    <Root>
      <Action />
      <ProductsTable />
    </Root>
  </ProductContextProvider>
);

export default Products;
