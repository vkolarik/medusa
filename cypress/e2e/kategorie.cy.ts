describe("ProductCategoryComponent", () => {
  beforeEach(() => {
    cy.intercept("GET", "/api/category/test-category", { fixture: "category.json" });
    cy.intercept("GET", "/api/products/test-category", { fixture: "products.json" });
    cy.visit("/cz/kategorie");
  });

  it("renders category title and products", () => {
    cy.contains("Test Category").should("exist");
    cy.contains("Product 1").should("exist");
    cy.contains("Product 2").should("exist");
  });

  it("renders child categories if available", () => {
    cy.contains("Child Category 1").should("exist");
    cy.contains("Child Category 2").should("exist");
  });
});
