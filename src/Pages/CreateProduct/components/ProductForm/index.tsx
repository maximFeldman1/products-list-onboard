import React, { useCallback, useState } from "react";
import { useFormik } from "formik";
import { ICreateProduct, IProduct } from "../../../../models";
import styled from "styled-components";
import { Button } from "primereact/button";
import { InputField } from "../../../../Components/UI/Forms/InputField";
import { validationYup } from "../../../../schema/validations/validationSchema";
import { useTranslation } from "react-i18next";
import { DropdownField } from "../../../../Components/UI/Forms/DropdownField";

interface IProps {
  initialValues?: IProduct;
  onCancel?: () => void;
  onDone?: () => void;
  onSubmit: (data: ICreateProduct | IProduct) => void;
  onClickBack?: () => void;
}

export const ProductForm = ({
  initialValues,
  onCancel,
  onSubmit,
  onClickBack,
}: IProps) => {
  const { t } = useTranslation();
  const formik = useFormik({
    initialValues: initialValues || {
      price: 1,
      name: "",
      brand: "",
      image: "",
    },
    onSubmit,
    validationSchema: validationYup,
  });
  const isSubmit =
    formik.values.price &&
    formik.values.brand &&
    formik.values.image &&
    formik.values.name;

  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <h1 data-testid="form-title__title">{t("form.title")}</h1>
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
        <DropdownField
          name={t("form.input.brand") || ""}
          value={formik.values.brand}
          options={["Nike", "Adidas", "Puma"]}
          onChange={formik.handleChange}
          placeholder="Select a Brand"
          errors={formik.errors.brand}
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
            disabled={!isSubmit}
          >
            {t("form.buttons.submit")}
          </Button>
          <Button
            className="ml-7"
            onClick={onCancel ? onCancel : onClickBack}
            type="button"
          >
            {t("form.buttons.back")}
          </Button>
        </div>
      </form>
    </>
  );
};
