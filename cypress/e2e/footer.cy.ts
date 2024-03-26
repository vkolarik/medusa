import { socialsLinks } from "@data/links"

describe("Footer", () => {
  beforeEach(() => {
    cy.visit("/")
  })

  it("renders logo", () => {
    cy.get(".footer__logo").should("exist")
  })

  it("clicking on logo redirects to home page", () => {
    cy.get(".logo-container").click()
    cy.url().should("include", Cypress.config().baseUrl)
  })

  it("verifies links lead to correct pages", function () {
    cy.contains("Domů").click()
    cy.url().should("include", Cypress.config().baseUrl)
  })

  it("displays correct footer text", () => {
    cy.contains("Děkujeme Vám za Vaši důvěru!").should("exist")
  })

  it("displays correct footer authors", () => {
    cy.contains(
      "© 2024 | Vojtěch Kolařík | Jakub Procházka | Libuše Babičková"
    ).should("exist")
  })
})
