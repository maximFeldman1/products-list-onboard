import { products } from "../../mockserver/data/products";
import { createContext, useContext } from "react";
import { IProduct } from "models";
import { ProductService } from "../../services/product-service";
import { useQuery } from "react-query";

interface IProps {
  products?: IProduct[];
  refetch?: any;
}

export const ProductContext = createContext<IProps>({ products });

export const ProductContextProvider = ({ children }: any) => {
  const { data: products, refetch } = useQuery(
    "getAllProducts",
    ProductService.getAll
  );
  // const { data: products, refetch } = useQuery(
  //   "getAllProducts",
  //   ProductService.getAll
  // );

  const value = { products, refetch };
  console.log("products context", products?.data);

  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
};

export const useProductContext = () => useContext(ProductContext);
