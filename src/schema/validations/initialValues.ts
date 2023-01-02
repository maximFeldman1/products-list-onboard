import { IProduct } from "models";
export const initialValues = {
  price: 0,
  name: "",
  brand: "",
  image: "",
};

export const initialProductValues = (product: IProduct) => ({
  price: product?.price,
  name: product?.name,
  brand: product?.brand,
  image: product?.image,
});
