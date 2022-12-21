import React, { useEffect } from "react";
import { apiUrl } from "../../shared";
import { ProductService } from "../../shared/services/product-service";
import { useQuery } from "react-query";

const Products = () => {
  const { data } = useQuery("allProducts", ProductService.getAll);

  return <div>Products</div>;
};

export default Products;
