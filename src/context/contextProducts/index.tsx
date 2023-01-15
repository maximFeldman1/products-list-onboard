import { products } from "../../mockServer/data/products";
import { createContext, useCallback, useContext, useState } from "react";
import { IProduct } from "models";
import { ProductService } from "../../services/product-service";
import { useQuery } from "react-query";
import debounce from "lodash.debounce";

interface IProps {
  products?: IProduct[];
  refetch?: any;
  search?: string;
  setSearch?: (text: string) => void;
  onSearchChange?: (e: any) => void;
}

export const ProductContext = createContext<IProps>({ products });

export const ProductContextProvider = ({ children }: any) => {
  const [search, setSearch] = useState<string>("");

  const handleSerachChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setSearch(e.target.value);
    },
    []
  );

  const onSearchChange = debounce(handleSerachChange, 1000);

  const { data: products, refetch } = useQuery({
    refetchOnWindowFocus: false,
    queryKey: ["text", search],
    queryFn: () => ProductService.getAll({ search: search }),
  });

  const value = {
    products,
    refetch,
    onSearchChange,
    search,
  };

  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
};

export const useProductContext = () => useContext(ProductContext);
