import { useCallback } from "react";
import { Dialog } from "primereact/dialog";
import { ProductForm } from "../../../Pages/CreateProduct/components/ProductForm";
import { ICreateProduct, IProduct } from "models";
import { ProductService } from "../../../services/product-service";
import { useMutation } from "react-query";
import styled from "styled-components";
import { useTranslation } from "react-i18next";

interface IProps {
  visible: boolean;
  onCancel: () => void;
  productId: string;
  productData: IProduct;
  onDone: () => void;
}

const Root = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const EditModal = ({
  visible,
  onCancel,
  productId,
  productData,
  onDone,
}: IProps) => {
  const { t } = useTranslation();
  const editProduct = (product: ICreateProduct) =>
    ProductService.editProduct(productId || "", product);

  const { mutate: editMutate } = useMutation(editProduct, {
    onSuccess: () => {
      onDone();
    },
  });

  const onSubmit = useCallback((data: ICreateProduct) => {
    editMutate(data);
    onCancel();
  }, []);

  return (
    <Root>
      <Dialog
        visible={visible}
        onHide={onCancel}
        header={t("modal.editProduct")}
      >
        <ProductForm
          initialValues={productData}
          onCancel={onCancel}
          onDone={onDone}
          onSubmit={onSubmit}
        />
      </Dialog>
    </Root>
  );
};
