import React, { useState, useCallback } from "react";
import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";
import { ProductForm } from "../../../Pages/CreateProduct/components/ProductForm";
import { IProduct } from "models";

interface IProps {
  visible: boolean;
  onCancel: () => void;
  productId: string;
  productData: IProduct;
  closeModal: () => void;
  onDone: () => void;
}

export const EditModal = ({
  visible,
  onCancel,
  productId,
  productData,
  closeModal,
  onDone,
}: IProps) => {
  const onHide = useCallback(() => {
    onCancel();
  }, []);

  const handleSuccess = useCallback(() => {
    closeModal();
  }, []);

  return (
    <Dialog visible={visible} onHide={onCancel} header="Edit Product">
      <ProductForm
        productData={productData}
        handleSuccess={handleSuccess}
        onCancel={onCancel}
        onDone={onDone}
      />
    </Dialog>
  );
};
