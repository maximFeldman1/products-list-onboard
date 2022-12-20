import { Suspense, lazy } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { URL } from "../../../shared";

const Products = lazy(() => import("../../../Pages/Products"));

const AppRouter = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Routes>
      <Route path={URL.PRODUCTS} element={<Products />} />
      <Route path="/*" element={<Navigate to={URL.PRODUCTS} />} />
    </Routes>
  </Suspense>
);

export default AppRouter;
