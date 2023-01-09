import { useNavigate } from "react-router-dom";
import { ProductForm } from "./components";
import { URL } from "../../constants";
import { useCallback } from "react";
import { ICreateProduct } from "models";
import { ProductService } from "../../services";
import { useMutation } from "react-query";
import styled from "styled-components";

const Root = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 140px;
`;

const createProduct = (product: ICreateProduct) =>
  ProductService.createProduct(product);

const CreateProduct = () => {
  const navigation = useNavigate();

  const { mutate: createMutate } = useMutation(createProduct, {
    onSuccess: () => navigation(URL.PRODUCTS),
  });

  const onSubmit = useCallback(
    (data: ICreateProduct) => {
      createMutate(data);
    },
    [navigation]
  );

  const onClickBack = useCallback(() => {
    navigation(URL.PRODUCTS);
  }, []);

  return (
    <Root>
      <ProductForm onSubmit={onSubmit} onClickBack={onClickBack} />
    </Root>
  );
};

export default CreateProduct;
