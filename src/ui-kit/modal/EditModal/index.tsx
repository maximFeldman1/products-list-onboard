import { useCallback } from "react";
import { Dialog } from "primereact/dialog";
import { ProductForm } from "../../../Pages/CreateProduct/components/ProductForm";
import { ICreateProduct, IProduct } from "models";
import { ProductService } from "../../../services/product-service";
import { useMutation } from "react-query";

interface IProps {
  visible: boolean;
  onCancel: () => void;
  productId: string;
  productData: IProduct;
  onDone: () => void;
}

export const EditModal = ({
  visible,
  onCancel,
  productId,
  productData,
  onDone,
}: IProps) => {
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
    <Dialog visible={visible} onHide={onCancel} header="Edit Product">
      <ProductForm
        initialValues={productData}
        onCancel={onCancel}
        onDone={onDone}
        onSubmit={onSubmit}
      />
    </Dialog>
  );
};
