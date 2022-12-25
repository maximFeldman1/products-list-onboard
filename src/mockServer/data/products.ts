import { Product } from "../../models";

export const productImages = {
  adidas:
    "https://1000logos.net/wp-content/uploads/2019/06/Adidas-Logo-1991.jpg",
  nike: "https://static.nike.com/a/images/f_jpg,q_auto:eco/61b4738b-e1e1-4786-8f6c-26aa0008e80b/swoosh-logo-black.png",
  puma: "https://1000logos.net/wp-content/uploads/2017/05/PUMA-logo.jpg",
};

export const products: Product[] = [
  {
    id: "1",
    price: 100,
    name: "Air Force",
    brand: "Nike",
    image: productImages["nike"],
  },
  {
    id: "2",
    price: 500,
    name: "adidas porche",
    brand: "Adidas",
    image: productImages["adidas"],
  },
];
