import { useNavigate } from "react-router-dom";
import { ProductForm } from "./components";
import { URL } from "../../constants";
import { useCallback } from "react";
import { ICreateProduct } from "models";
import { ProductService } from "../../services";
import { useMutation } from "react-query";

const createProduct = (product: ICreateProduct) =>
  ProductService.createProduct(product);

const CreateProduct = () => {
  const navigation = useNavigate();

  const { mutate: createMutate, isLoading } = useMutation(createProduct, {
    onSuccess: () => navigation(URL.PRODUCTS),
  });

  const onSubmit = useCallback(
    (data: ICreateProduct) => {
      createMutate(data);
    },
    [navigation]
  );

  return <ProductForm onSubmit={onSubmit} isLoading={isLoading} />;
};

export default CreateProduct;
