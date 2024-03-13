describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:8000/cz/cookies')

    cy.contains("Webové stránky lze používat i v režimu, který neumožňuje sbírání údajů o chování návštěvníků webu.").should("exist");

    cy.contains("statistické").click();
    cy.contains("_ga").should("exist");
    cy.contains("trendtrove.cz").should("exist");

    cy.contains("marketingové").click();
    cy.contains("_fbp").should("exist");
    cy.contains("trendtrove.cz").should("exist");


  })
})