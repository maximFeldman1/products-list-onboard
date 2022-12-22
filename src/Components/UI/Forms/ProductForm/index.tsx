import React, { useCallback } from "react";
import { useFormik, FormikValues } from "formik";
import { IProduct } from "../../../../models";
import { InputText } from "primereact/inputtext";
import styled from "styled-components";
import { Button } from "primereact/button";
import uuid from "react-uuid";
import { QueryClient, useMutation } from "react-query";
import { apiUrl, URL } from "../../../../shared";
import { ProductService } from "../../../../shared/services/product-service";
import { Link } from "react-router-dom";

const Root = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 30px;
`;

const createProduct = (product: Partial<IProduct>) =>
  ProductService.addProduct(product as IProduct);

export const ProductForm = () => {
  const { mutate } = useMutation(createProduct, {});

  const handleFormSubmit = useCallback((data: Partial<IProduct>) => {
    console.log(data, "dsd");
    mutate(data);
  }, []);

  const formik = useFormik({
    initialValues: {
      name: " ",
      brand: " ",
      image: " ",
    },

    onSubmit: handleFormSubmit,
  });
  return (
    <Root>
      <form onSubmit={formik.handleSubmit}>
        <h1>Form Product</h1>
        <span className="p-float-label mt-4">
          <InputText
            id="price"
            name="price"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.price || " "}
          />
          <label htmlFor="price">Price</label>
        </span>
        <span className="p-float-label mt-2">
          <InputText
            id="name"
            name="name"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.name}
          />
          <label htmlFor="name">Name</label>
        </span>
        <span className="p-float-label  mt-2">
          <InputText
            id="brand"
            name="brand"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.brand}
          />
          <label htmlFor="brand">Brand</label>
        </span>
        <span className="p-float-label mt-2">
          <InputText
            id="image"
            name="image"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.image}
          />
          <label htmlFor="image">Image</label>
        </span>
        <Button type="submit" className="mt-2">
          Submit
        </Button>
        <Link to={URL.PRODUCTS}>back</Link>
      </form>
    </Root>
  );
};
