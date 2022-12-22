import { RestRequest, RestContext, ResponseFunction } from "msw";
import { products } from "../data/products";
import uuid from "react-uuid";

export class ProductController {
  static getAll(req: RestRequest, res: ResponseFunction, ctx: RestContext) {
    try {
      return res(ctx.status(200), ctx.json(products));
    } catch (err) {
      return res(
        ctx.status(400),
        ctx.json({ message: (err as Error).message })
      );
    }
  }
  static async addProduct(
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
}
