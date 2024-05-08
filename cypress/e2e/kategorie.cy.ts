describe("ProductCategoryComponent", () => {
  beforeEach(() => {

    cy.visit("/cz/kategorie/mikiny");
  });

  it("Existuje ikona navigace ?", () => {
    cy.get("img[alt='Trand Trove - navigace']").should("exist")
  })

  it("Existuje nadpis Domů ? ", () => {
    cy.contains("Domů").should("exist")
  })

  it("Existuje nadpis ?", () => {
    cy.get("h1").should("exist")

  })

  it("Existuje tlačítko pro filtrování ?", () => {
    cy.contains("Filtrovat").should("exist").click({force: true})
  })

  it("Existuje obrázek ", () => {
    cy.get("img[alt='Trend Trove - filtr']").should("exist")
  })
  it("Existuje nadpis H2 'Nadpis 1'", () => {
    cy.contains("Medusa Sweatshirt").should("exist")
  })

});
