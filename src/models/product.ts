export interface IProduct {
  id: string;
  price: number;
  name: string;
  brand: string;
  image: string;
}

export type ICreateProduct = Omit<IProduct, "id">;
