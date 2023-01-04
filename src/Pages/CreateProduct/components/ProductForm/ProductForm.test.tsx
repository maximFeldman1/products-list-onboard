import { describe, test, expect } from "vitest";
import { fireEvent, render, screen } from "../../../../react-testing-library";
import userEvent from "@testing-library/user-event";
import { ProductForm } from ".";

test("click button", async () => {
  render(<ProductForm />);

  const formTitle = screen.getByTestId("form-title__title");
  expect(formTitle).toHaveTextContent(/form product/i);

  expect(screen.getByTestId("product-price__input")).toBeRequired();
  expect(screen.getByTestId("product-name__input")).toBeRequired();
  expect(screen.getByTestId("product-brand__input")).toBeRequired();
  expect(screen.getByTestId("product-image__input")).toBeRequired();
});
