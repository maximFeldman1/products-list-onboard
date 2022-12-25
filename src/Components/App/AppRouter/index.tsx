import { Suspense, lazy } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import styled from "styled-components";
import { CreateProduct } from "../../../pages/CreateProduct";
import { URL } from "../../../shared";

const Products = lazy(() => import("../../../pages/Products"));

const Root = styled.div`
  margin-top: 30px;
`;

const AppRouter = () => (
  <Root>
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path={URL.PRODUCTS} element={<Products />} />
        <Route path={URL.CREATE_PRODUCT} element={<CreateProduct />} />
        <Route path="/*" element={<Navigate to={URL.PRODUCTS} />} />
      </Routes>
    </Suspense>
  </Root>
);

export default AppRouter;
