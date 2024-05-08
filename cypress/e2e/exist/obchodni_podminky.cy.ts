describe("VOP Page", () => {
  beforeEach(() => {
    cy.visit("/cz/obchodni-podminky")
  })

  it("renders correct title", () => {
    cy.get("h1").should("contain.text", "Obchodní podmínky")
  })

  it("displays correct delivery information", () => {
    cy.contains("Doručování")
      .parent()
      .within(() => {
        cy.contains(
          "Kupujícímu může být doručováno na elektronickou adresu kupujícího."
        )
      })
  })

  it("displays correct final provisions", () => {
    cy.contains("Závěrečná ustanovení")
      .parent()
      .within(() => {
        cy.contains(
          "Je-li některé ustanovení obchodních podmínek neplatné nebo neúčinné"
        )
        cy.contains(
          "Kontaktní údaje prodávajícího: adresa elektronické pošty info@trandtrove.cz"
        )
      })
  })

  it('verifies "Domů" link leads to home page', () => {
    cy.contains("Domů").should("exist")
    cy.contains("Domů").click()
    cy.url().should("include", Cypress.config().baseUrl)
  })
})
