import React, { useCallback } from "react";
import { useFormik } from "formik";
import { ICreateProduct, IProduct } from "../../../../models";
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
          data-testid="product-price__input"
          name={t("form.input.price")}
          type="number"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.price}
          errors={formik.errors.price}
          required
        />
        <InputField
          data-testid="product-name__input"
          name={t("form.input.name")}
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.name}
          errors={formik.errors.name}
          required
        />

        <InputField
          data-testid="product-brand__input"
          name={t("form.input.brand")}
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.brand}
          errors={formik.errors.brand}
          required
        />
        <InputField
          data-testid="product-image__input"
          name={t("form.input.image")}
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.image}
          errors={formik.errors.image}
          required
        />
        <div className="mt-2">
          <Button
            data-testid="submit__button"
            type="submit"
            disabled={isLoading ? true : false}
          >
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
