import { useNavigate } from "react-router-dom";
import { ProductForm } from "./components";
import { URL } from "../../constants";
import { useCallback } from "react";

const CreateProduct = () => {
  const navigation = useNavigate();

  const handleSuccess = useCallback(() => {
    navigation(URL.PRODUCTS);
  }, [navigation]);

  return <ProductForm handleSuccess={handleSuccess} />;
};

export default CreateProduct;
