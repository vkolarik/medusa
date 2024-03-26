describe("GDPR Stránka", () => {
  beforeEach(() => {
    cy.visit("/gdpr")
  })

  it("Zobrazuje se text ?", () => {
    cy.contains("Základní ustanovení").should("exist")
    cy.contains("Zdroje a kategorie zpracovávaných osobních údajů").should(
      "exist"
    )
  })

  //Odkaz na hlavní stránku OK ???
  it('verifies "Domů" link leads to home page', () => {
    cy.contains("Domů").should("exist")
    cy.contains("Domů").click()
    cy.url().should("include", Cypress.config().baseUrl)
  })
})
