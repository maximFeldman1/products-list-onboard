import { Suspense, lazy } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { URL } from "../../../shared";

const Products = lazy(() => import("../../../Pages/Products"));

const AppRouter = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Routes>
      <Route path="/products" element={<Products />} />
      <Route
        path={URL.getProducts}
        element={<Navigate to={URL.getProducts} />}
      />
    </Routes>
  </Suspense>
);

export default AppRouter;
