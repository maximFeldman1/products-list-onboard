import React, { useCallback, useEffect, useRef, useState } from "react";
import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";
import { ProductService } from "../../../services/product-service";
import { useMutation, useQueryClient } from "react-query";
import { Toast } from "primereact/toast";
import { useProductContext } from "../../../context/contextProducts";

interface IProps {
  visible: boolean;
  onCancel: () => void;
  productId: string;
}

const deleteProduct = (id: string) => ProductService.deleteProduct(id);

export const DeleteModal = ({ visible, onCancel, productId }: IProps) => {
  const toast = useRef(null);
  const { products, refetch } = useProductContext();
  console.log("data get", products);

  const { mutate } = useMutation(deleteProduct, {
    onSuccess: () => refetch(),
  });

  const onHide = useCallback(() => {
    mutate(productId);
    onCancel();
    toast?.current?.show({
      severity: "success",
      summary: "Success Message",
      detail: "Delete Success",
      life: 3000,
    });
  }, []);

  const renderFooter = () => (
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
