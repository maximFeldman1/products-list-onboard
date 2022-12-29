describe("home page", () => {
  it("create new product", () => {
    cy.visit("http://127.0.0.1:3000/products");

    cy.findByTestId("create-product__link").click();
    cy.findByTestId("product-price__input").type(123);
    cy.findByTestId("product-name__input").type("nike");
    cy.findByTestId("product-brand__input").type("Nike");
    cy.findByTestId("product-image__input").type("fdsd");
    cy.findByTestId("submit__button").click();
  });

  it("delete product", () => {
    cy.visit("http://127.0.0.1:3000/products");

    cy.wait(1000);
    cy.get(
      "#root > div.Root-sc-ktahde-0.fVzYgt > div > div.Root-sc-qv9mpy-0.byYsWa.ag-theme-alpine > div > div > div.ag-root-wrapper-body.ag-focus-managed.ag-layout-normal > div.ag-root.ag-unselectable.ag-layout-normal > div.ag-body-viewport.ag-row-no-animation.ag-layout-normal > div.ag-center-cols-clipper > div > div > div.ag-row-odd.ag-row-no-focus.ag-row.ag-row-level-0.ag-row-position-absolute.ag-row-last > div:nth-child(6) > div > button"
    ).click();
    cy.findByText("Delete").click();
    cy.findByTestId("yes__button").click();
  });

  it("doesn`t delete product", () => {
    cy.visit("http://127.0.0.1:3000/products");

    cy.wait(1000);
    cy.get(
      "#root > div.Root-sc-ktahde-0.fVzYgt > div > div.Root-sc-qv9mpy-0.byYsWa.ag-theme-alpine > div > div > div.ag-root-wrapper-body.ag-focus-managed.ag-layout-normal > div.ag-root.ag-unselectable.ag-layout-normal > div.ag-body-viewport.ag-row-no-animation.ag-layout-normal > div.ag-center-cols-clipper > div > div > div.ag-row-odd.ag-row-no-focus.ag-row.ag-row-level-0.ag-row-position-absolute.ag-row-last > div:nth-child(6) > div > button"
    ).click();
    cy.findByText("Delete").click();
    cy.findByTestId("no__button").click();
  });
});