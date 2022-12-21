import styled from "styled-components";
import { Action } from "../../components/Actions";
import ProductList from "../../components/ProductsList";

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
