import styled from "styled-components";
import { Action } from "../../components";
import { ProductsTable } from "./components";
import { ProductContextProvider } from "../../context/contextProducts";
import { Header } from "../../Components/Layout/Header";

const Root = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 20px;
`;

const Products = () => (
  <ProductContextProvider>
    <Header />
    <Root>
      <Action />
      <ProductsTable />
    </Root>
  </ProductContextProvider>
);

export default Products;
