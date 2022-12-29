import React, { useCallback, useEffect, useRef, useState } from "react";
import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";
import { ProductService } from "../../../services/product-service";
import { useMutation, useQueryClient } from "react-query";
import { Toast } from "primereact/toast";
import { useProductContext } from "../../../context/contextProducts";
import { useTranslation } from "react-i18next";

interface IProps {
  visible: boolean;
  onCancel: () => void;
  onDone: () => void;
  productId: string;
}

const deleteProduct = (id: string) => ProductService.deleteProduct(id);

export const DeleteModal = ({
  visible,
  onCancel,
  productId,
  onDone,
}: IProps) => {
  const toast = useRef(null);
  const { t } = useTranslation();
  const { mutate } = useMutation(deleteProduct, {
    onSuccess: () => {
      toast?.current?.show({
        severity: t("toast.delete.success"),
        summary: t("toast.delete.successMessage"),
        detail: t("toast.delete.deleteSuccess"),
        life: 3000,
      });
      onDone();
    },
    onError() {
      toast?.current?.show({
        severity: t("toast.dailed.error"),
        summary: t("mtoast.dailed.errorMessage"),
        detail: t("toast.dailed.faild"),
        life: 3000,
      });
    },
  });

  const onHide = useCallback(() => {
    mutate(productId);
    onCancel();
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
