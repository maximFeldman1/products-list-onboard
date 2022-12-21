import { apiUrl } from "..";
import Api from "./API";

export class ProductService {
  static getAll() {
    return Api.get(apiUrl().products.getAll);
  }
}
