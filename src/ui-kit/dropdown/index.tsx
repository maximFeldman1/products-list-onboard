import { useRef, useState } from "react";
import { useModal } from "../../ui-kit/modal/";
import { Menu } from "primereact/menu";
import { Button } from "primereact/button";
import { useProductContext } from "../../context/contextProducts";

interface IProps {
  productId: string;
}
export const DropdownSelector = ({ productId }: IProps) => {
  const { openModal, closeModal } = useModal();
  const { refetch } = useProductContext();
  const menu = useRef(null);

  const items = [
    {
      label: "Options",
      items: [
        {
          label: "Edit",
          icon: "pi pi-refresh",
          command: () => {
            openModal("edit", { productId });
          },
        },
        {
          label: "Delete",
          icon: "pi pi-times",
          command: () => {
            openModal("delete", { productId, onDone: refetch });
          },
        },
      ],
    },
  ];

  return (
    <div>
      <Menu model={items} popup ref={menu} id="popup_menu" />
      <Button
        icon="pi pi-ellipsis-v"
        onClick={(e) => menu?.current?.toggle(e)}
        aria-controls="popup_menu"
        aria-haspopup
      />
    </div>
  );
};