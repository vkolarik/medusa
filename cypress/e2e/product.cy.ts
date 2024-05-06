describe("Product Detail Page", () => {
  beforeEach(() => {
    cy.visit("/cz/produkt")
  })

  it("renders correct title", () => {
    cy.get("h1").should("contain.text", "Test Product")
  })

  it("displays correct description", () => {
    cy.get(".product-description").should("exist")
  })

  it("displays correct price", () => {
    cy.get(".product-price").should("contain.text", "100 Kč")
  })

  it("displays product images", () => {
    cy.get(".product-gallery").should("exist")
    cy.get(".product-gallery img").should("have.length.greaterThan", 0)
  })

  it("verifies 'Add to Cart' button", () => {
    cy.get(".add-to-cart-button").should("exist")
    cy.get(".add-to-cart-button").click()

  })
})
