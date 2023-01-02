import React, { useCallback } from "react";
import { useFormik } from "formik";
import { ICreateProduct, IProduct } from "../../../../models";
import styled from "styled-components";
import { Button } from "primereact/button";
import { useMutation } from "react-query";
import { URL } from "../../../../constants";
import { ProductService } from "../../../../services/product-service";
import { InputField } from "../../../../Components/UI/Forms/InputField";
import { validationYup } from "../../../../schema/validations/validationSchema";
import { useTranslation } from "react-i18next";

interface IProps {
  initialValues?: IProduct;
  onCancel?: () => void;
  onDone?: () => void;
  onSubmit: (data: ICreateProduct) => void;
  isLoading?: boolean;
}

const Root = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 30px;
`;

export const ProductForm = ({
  initialValues,
  onCancel,
  onSubmit,
  isLoading,
}: IProps) => {
  const { t } = useTranslation();

  const handleSubmit = useCallback((data: ICreateProduct) => {
    initialValues ? onSubmit(data) : onSubmit(data);
  }, []);

  const formik = useFormik({
    initialValues: initialValues || {
      price: 0,
      name: "",
      brand: "",
      image: "",
    },

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
        <div className="mt-2 ml-1">
          <Button
            data-testid="submit__button"
            type="submit"
            disabled={isLoading ? true : false}
          >
            {t("form.buttons.submit")}
          </Button>
          <Button className="ml-7" onClick={onCancel}>
            {t("form.buttons.back")}
          </Button>
        </div>
      </form>
    </Root>
  );
};
