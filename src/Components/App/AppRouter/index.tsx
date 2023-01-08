import { Suspense, lazy } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { URL } from "../../../constants";
import { useTranslation } from "react-i18next";

const Products = lazy(() => import("../../../pages/Products"));
const CreateProduct = lazy(() => import("../../../pages/CreateProduct"));

const AppRouter = () => {
  const { t } = useTranslation();

  return (
    <Suspense fallback={<div>{t("loading")}</div>}>
      <Routes>
        <Route path={URL.PRODUCTS} element={<Products />} />
        <Route path={URL.CREATE_PRODUCT} element={<CreateProduct />} />
        <Route path="/*" element={<Navigate to={URL.PRODUCTS} />} />
      </Routes>
    </Suspense>
  );
};

export default AppRouter;
