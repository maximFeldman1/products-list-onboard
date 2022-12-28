interface Params {
  id?: string;
}

export const URL = {
  PRODUCTS: "/products",
  CREATE_PRODUCT: "/products/create",
};

export const apiUrl = ({ id }: Params = {}) => ({
  products: {
    getAll: "/api/products",
    create: "/api/products/create",
    delete: `/api/products/${id}`,
  },
});
