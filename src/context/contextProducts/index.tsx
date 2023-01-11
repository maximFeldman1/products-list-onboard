import { products } from "../../mockserver/data/products";
import { createContext, useContext, useState } from "react";
import { IProduct } from "models";
import { ProductService } from "../../services/product-service";
import { useQuery } from "react-query";

interface IProps {
  products?: IProduct[];
  refetch?: any;
  text?: string;
  setText: (text: string) => void;
}

export const ProductContext = createContext<IProps>({ products });

export const ProductContextProvider = ({ children }: any) => {
  const [text, setText] = useState<string | "">("");

  const { data: products, refetch } = useQuery({
    queryKey: ["text", text],
    queryFn: () => ProductService.getAll({ search: text }),
  });

  const value = { products, refetch, setText, text };

  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
};

export const useProductContext = () => useContext(ProductContext);
