import { RestRequest, RestContext, ResponseFunction } from "msw";
import { products } from "../data/products";
import uuid from "react-uuid";
import { IProduct } from "models";

export class ProductController {
  static getAll(req: RestRequest, res: ResponseFunction, ctx: RestContext) {
    try {
      const searchText: string | null = req.url.searchParams.get("search");
      console.log("after context", searchText);

      let filterProducts;
      if (searchText !== null) {
        filterProducts = products.filter((product) =>
          product.name.toLowerCase().includes(searchText?.toLowerCase())
        );
      } else {
        filterProducts = products;
      }
      console.log("filterProducts", filterProducts);
      console.log("products", products);

      return res(ctx.status(200), ctx.json(filterProducts));
    } catch (err) {
      return res(
        ctx.status(400),
        ctx.json({ message: (err as Error).message })
      );
    }
  }
  static async createProduct(
    req: RestRequest,
    res: ResponseFunction,
    ctx: RestContext
  ) {
    try {
      const product = await req.json();
      product.id = uuid();
      products.push(product);
      return res(ctx.status(200), ctx.json(product));
    } catch (err) {
      return res(
        ctx.status(400),
        ctx.json({ message: (err as Error).message })
      );
    }
  }
  static deleteProduct(
    req: RestRequest<IProduct>,
    res: ResponseFunction<IProduct>,
    ctx: RestContext
  ) {
    try {
      const idParams = req.params.id;
      const product = products.find((p) => p.id === idParams);

      if (!product) throw new Error("Product not found");
      products.splice(
        products.findIndex((p) => p.id === idParams),
        1
      );

      return res(ctx.status(200));
    } catch (err) {
      ctx.json({ message: (err as Error).message });
    }
  }
  static async editProduct(
    req: RestRequest<IProduct>,
    res: ResponseFunction<IProduct>,
    ctx: RestContext
  ) {
    try {
      const id = req.params["id"].toString();
      const oldProduct: IProduct = await req.json();
      const newProduct = products.find((p) => p.id === id);

      if (!newProduct) throw new Error("Product not found");

      Object.assign(newProduct, {
        ...oldProduct,
      });

      return res(ctx.status(200));
    } catch (err) {
      ctx.json({ message: (err as Error).message });
    }
  }
}
