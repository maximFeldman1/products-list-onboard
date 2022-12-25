export const URL = {
  PRODUCTS: "/products",
  CREATE_PRODUCT: "/products/create",
};

export const apiUrl = () => ({
  products: {
    getAll: "/api/products",
    create: "/api/products/create",
  },
});
