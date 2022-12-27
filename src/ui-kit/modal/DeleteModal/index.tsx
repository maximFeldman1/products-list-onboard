import React, { useRef, useState } from "react";
import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";
import { ProductService } from "../../../services/product-service";
import { useMutation } from "react-query";
import { Toast } from "primereact/toast";

interface IProps {
  visible: boolean;
  onCancel: () => void;
  productId: string;
}

const deleteProduct = (id: string) => ProductService.deleteProduct(id);

export const DeleteModal = ({ visible, onCancel, productId }: IProps) => {
  const toast = useRef(null);

  const { mutate } = useMutation(deleteProduct, {
    onSuccess: () => ProductService.getAll(),
  });
  const onHide = () => {
    mutate(productId);
    onCancel();
    toast?.current?.show({
      severity: "success",
      summary: "Success Message",
      detail: "Delete Success",
      life: 3000,
    });
  };

  const renderFooter = () => {
    return (
      <div>
        <Button
          label="No"
          icon="pi pi-times"
          onClick={onCancel}
          className="p-button-text"
        />
        <Button label="Yes" icon="pi pi-check" onClick={onHide} />
      </div>
    );
  };

  return (
    <div>
      <Toast ref={toast} />
      <Dialog
        visible={visible}
        onHide={onCancel}
        footer={renderFooter()}
        header="Delete Product"
      >
        <p>Are you sure that you want to delete product?</p>
      </Dialog>
    </div>
  );
};
