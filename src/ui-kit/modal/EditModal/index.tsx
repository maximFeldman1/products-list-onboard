import React, { useState } from "react";
import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";

interface IProps {
  visible: boolean;
  onCancel: () => void;
}

export const EditModal = ({ visible, onCancel }: IProps) => {
  const [choose, setChoose] = useState(false);

  const onHide = () => {
    onCancel();
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
        <Button label="Yes" icon="pi pi-check" onClick={onHide} autoFocus />
      </div>
    );
  };

  return (
    <Dialog
      visible={visible}
      onHide={onCancel}
      footer={renderFooter()}
      header="Edit Product"
    >
      <p>Edit form</p>
    </Dialog>
  );
};
