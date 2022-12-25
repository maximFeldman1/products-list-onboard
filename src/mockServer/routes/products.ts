import { ProductController } from "../controllers/products";
import { rest } from "msw";
import { apiUrl } from "../../shared";

export const productRoutes = [
  rest.get(apiUrl().products.getAll, ProductController.getAll),
  rest.post(apiUrl().products.create, ProductController.createProduct),
];
