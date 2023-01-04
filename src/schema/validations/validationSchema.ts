import * as Yup from "yup";

export const validationYup = Yup.object({
  name: Yup.string()
    .min(3, "Must be 3 characters or more")
    .required("Required"),
  price: Yup.number().required("Required").integer(),
  brand: Yup.string()
    .matches(/(Nike|Adidas|Puma)/, {
      message: "Name of brand doesnt match to input",
    })
    .required("Required"),
  image: Yup.string()
    .max(400, "Must be 120 characters or less")
    .required("Required"),
});
