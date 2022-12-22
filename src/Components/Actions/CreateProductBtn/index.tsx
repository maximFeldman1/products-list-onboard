import React from "react";
import "primeicons/primeicons.css";
import { Link } from "react-router-dom";
import { URL } from "../../../shared";

export const CreateProductBtn = () => {
  return (
    <Link to={URL.CREATE}>
      <i className="pi pi-plus-circle m-2"></i>
    </Link>
  );
};
