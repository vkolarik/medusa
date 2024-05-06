describe("Header component tests", () => {
  beforeEach(() => {
    cy.visit("/")
  })



  it("renders the logo correctly", () => {
    cy.get(".logo-container").should("exist")
  })

  it("clicking on logo redirects to home page", () => {
    cy.get(".logo-container").click()
    cy.url().should("include", Cypress.config().baseUrl)
  })

  it("opens user dropdown on click", function () {
    cy.get(".dropdown").first().click({ force: true })
    cy.get(".dropdown__content").first().should("be.hidden")
  })

  it("navigates to spcefied route on link click", function () {
    cy.get(".dropdown__text").first().click({ force: true })
    cy.get(".dropdown__content").first().should("be.hidden")
  })

  it("opens main links dropdowns on click", function () {
    cy.get(".dropdown__text").first().click({ force: true })
    cy.get(".dropdown__content").first().should("be.hidden")
  })
})
