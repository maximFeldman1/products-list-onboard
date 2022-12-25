import React, { useCallback } from "react";
import { useFormik } from "formik";
import { ICreateProduct, IProduct } from "../../../../models";
import { InputText } from "primereact/inputtext";
import styled from "styled-components";
import { Button } from "primereact/button";
import { useMutation } from "react-query";
import { URL } from "../../../../constants";
import { ProductService } from "../../../../services/product-service";
import { Link } from "react-router-dom";
import { InputField } from "../../../../components/UI/Forms/InputField";
import { validationYup } from "../../../../schema/validations/validationSchema";

const Root = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 30px;
`;

const createProduct = (product: ICreateProduct) =>
  ProductService.createProduct(product);

export const ProductForm = () => {
  const { mutate } = useMutation(createProduct, {});

  const handleSubmit = useCallback((data: ICreateProduct) => {
    mutate(data);
  }, []);

  const formik = useFormik({
    initialValues: { price: 0, name: " ", brand: " ", image: " " },
    onSubmit: handleSubmit,
    validationSchema: validationYup,
  });

  return (
    <Root>
      <form onSubmit={formik.handleSubmit}>
        <h1>Form Product</h1>
        <InputField
          name="price"
          type="number"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.price}
          errors={formik.errors.price}
          required
        />
        <InputField
          name="name"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.name}
          errors={formik.errors.name}
          required
        />

        <InputField
          name="brand"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.brand}
          errors={formik.errors.brand}
          required
        />
        <InputField
          name="image"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.image}
          errors={formik.errors.image}
          required
        />
        <Button type="submit" className="mt-2">
          Submit
        </Button>
        <Link to={URL.PRODUCTS}>back</Link>
      </form>
    </Root>
  );
};
