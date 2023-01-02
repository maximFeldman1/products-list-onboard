import React from "react";
import "primeicons/primeicons.css";
import { Link } from "react-router-dom";
import { URL } from "../../../constants";

export const CreateProductBtn = () => {
  return (
    <Link to={URL.CREATE_PRODUCT}>
      <i className="pi pi-plus-circle m-2" data-testid="create-product__link" />
    </Link>
  );
};
