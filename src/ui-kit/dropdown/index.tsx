import { useRef, useState } from "react";
import { useModal } from "../../ui-kit/modal/";
import { Menu } from "primereact/menu";
import { Button } from "primereact/button";
import { useProductContext } from "../../context/contextProducts";
import { useTranslation } from "react-i18next";

interface IProps {
  productId: string;
}
export const DropdownSelector = ({ productId }: IProps) => {
  const { openModal, closeModal } = useModal();
  const { refetch } = useProductContext();
  const menu = useRef(null);
  const { t } = useTranslation();

  const items = [
    {
      label: t("modal.options"),
      items: [
        {
          label: t("modal.edit"),
          icon: "pi pi-refresh",
          command: () => {
            openModal("edit", { productId });
          },
        },
        {
          label: t("modal.delete"),
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
        data-testid="menu__button"
        icon="pi pi-ellipsis-v"
        onClick={(e) => menu?.current?.toggle(e)}
        aria-controls="popup_menu"
        aria-haspopup
      />
    </div>
  );
};
