import { ProductController } from "../controllers/products";
import { rest } from "msw";
import { apiUrl } from "../../constants";

export const productRoutes = [
  rest.get(apiUrl().products.getAll, ProductController.getAll),
  rest.post(apiUrl().products.create, ProductController.createProduct),
  rest.delete(
    apiUrl({ id: ":id" }).products.delete,
    ProductController.deleteProduct
  ),
  rest.put(apiUrl({ id: ":id" }).products.edit, ProductController.editProduct),
];
