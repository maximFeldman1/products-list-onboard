import React, { useEffect } from "react";
import { apiUrl } from "../../shared";
import { ProductService } from "../../shared/services/product-service";
import { useQuery } from "react-query";

const getData = () => ProductService.getAll();

const Products = () => {
  const { data } = useQuery("allProducts", getData);

  return <div>Products</div>;
};

export default Products;
