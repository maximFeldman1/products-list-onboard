import { RestRequest, RestContext, ResponseFunction } from "msw";
import { products } from "../data/products";

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
}
