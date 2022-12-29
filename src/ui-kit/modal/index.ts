import { DeleteModal } from "./DeleteModal";
import { EditModal } from "./EditModal";
import { createModalProvider } from "./provider";

export const modals = {
  delete: DeleteModal,
  edit: EditModal,
};

export const { ModalProvider, useModal } = createModalProvider(modals);
