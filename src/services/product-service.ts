import { products } from "../mockserver/data/products";
import { apiUrl } from "../constants";
import { ICreateProduct, IProduct } from "../models";
import Api from "./API";

export interface IGetAllProductsRequest {
  search?: string;
}

export class ProductService {
  static getAll(params?: IGetAllProductsRequest) {
    return Api.get<IProduct[]>(apiUrl().products.getAll, {
      params,
    });
  }
  static createProduct(newProduct: ICreateProduct) {
    return Api.post<IProduct>(apiUrl({}).products.create, newProduct);
  }
  static deleteProduct(id: string) {
    return Api.delete<IProduct>(apiUrl({ id }).products.delete);
  }
  static editProduct(id: string, newProduct: ICreateProduct) {
    return Api.put<IProduct>(apiUrl({ id }).products.edit, newProduct);
  }
}
