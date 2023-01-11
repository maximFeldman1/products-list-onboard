import React, { useEffect, useState } from "react";
import { InputText } from "primereact/inputtext";
import { useMutation } from "react-query";
import { IGetAllProductsRequest, ProductService } from "../../../services";
import { useProductContext } from "../../../context/contextProducts";

// const searchProduct = (params: IGetAllProductsRequest) =>
//   ProductService.getAll(params);

export const SearchTable = () => {
  const [text, setText] = useState<string | "">();
  const { refetch } = useProductContext();

  // const { mutate: searchMutate } = useMutation(searchProduct, {
  //   // onSuccess: refetch
  // });

  useEffect(() => {
    const timeout = setTimeout(() => {
      // searchMutate({ search: text });
      refetch({ search: text });
    }, 1000);
    return () => clearTimeout(timeout);
  }, [text]);

  return (
    <div>
      <InputText
        type="text"
        onChange={(e) => setText(e.target.value)}
        placeholder="type..."
      />
    </div>
  );
};
