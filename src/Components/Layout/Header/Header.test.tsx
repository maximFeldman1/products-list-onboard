import { test, expect } from "vitest";
import { render, screen } from "../../../react-testing-library";
import { Header } from ".";

test("heading title", () => {
  render(<Header />);
  const heading = screen.getByTestId("heading");
  expect(heading).toHaveTextContent("Product List");
});
