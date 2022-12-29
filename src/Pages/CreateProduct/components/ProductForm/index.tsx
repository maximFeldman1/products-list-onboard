import React, { useCallback } from "react";
import { useFormik } from "formik";
import { ICreateProduct, IProduct } from "../../../../models";
import { InputText } from "primereact/inputtext";
import styled from "styled-components";
import { Button } from "primereact/button";
import { useMutation } from "react-query";
import { URL } from "../../../../constants";
import { ProductService } from "../../../../services/product-service";
import { useNavigate } from "react-router-dom";
import { InputField } from "../../../../components/UI/Forms/InputField";
import { validationYup } from "../../../../schema/validations/validationSchema";
import { useTranslation } from "react-i18next";

const Root = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 30px;
`;

const createProduct = (product: ICreateProduct) =>
  ProductService.createProduct(product);

export const ProductForm = () => {
  const { t } = useTranslation();
  const navigation = useNavigate();
  const { mutate, isLoading } = useMutation(createProduct, {
    onSuccess: () => navigation(URL.PRODUCTS),
  });

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
        <h1>{t("form.title")}</h1>
        <InputField
          name={t("form.inputs.price")}
          type="number"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.price}
          errors={formik.errors.price}
          required
        />
        <InputField
          name={t("form.inputs.name")}
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.name}
          errors={formik.errors.name}
          required
        />

        <InputField
          name={t("form.inputs.brand")}
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.brand}
          errors={formik.errors.brand}
          required
        />
        <InputField
          name={t("form.inputs.image")}
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.image}
          errors={formik.errors.image}
          required
        />
        <div className="mt-2">
          <Button type="submit" disabled={isLoading ? true : false}>
            {t("form.buttons.submit")}
          </Button>
          <Button
            onClick={() => navigation(URL.PRODUCTS)}
            style={{ marginLeft: "55px" }}
          >
            {t("form.buttons.back")}
          </Button>
        </div>
      </form>
    </Root>
  );
};
