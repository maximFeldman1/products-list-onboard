import { test, expect } from "vitest";
import { render, screen } from "../../react-testing-library";
import userEvent from "@testing-library/user-event";
import { DropdownSelector } from ".";
import { products } from "../../mockServer/data/products";

test("click button", async () => {
  render(<DropdownSelector productId={"1"} productData={products} />);

  const menuBtn = screen.getByTestId("menu__button");
  userEvent.click(menuBtn);
  expect(menuBtn).toBeEnabled();
});
