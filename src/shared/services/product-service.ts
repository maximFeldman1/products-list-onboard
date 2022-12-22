import { apiUrl } from "..";
import { IProduct } from "../../models";
import Api from "./API";

export class ProductService {
  static getAll() {
    return Api.get(apiUrl().products.getAll);
  }
  static addProduct(product: IProduct) {
    return Api.post<IProduct>(apiUrl().products.add, product);
  }
}
