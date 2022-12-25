import { apiUrl } from "../constants";
import { ICreateProduct, IProduct } from "../models";
import Api from "./API";

export class ProductService {
  static getAll() {
    return Api.get<IProduct[]>(apiUrl().products.getAll);
  }
  static createProduct(newProduct: ICreateProduct) {
    return Api.post<IProduct>(apiUrl().products.create, newProduct);
  }
}
