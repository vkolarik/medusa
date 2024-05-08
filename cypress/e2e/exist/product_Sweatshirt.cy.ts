describe("Sweatshirt Component", () => {
    beforeEach(() => {
      cy.visit("/cz/produkty/sweatshirt")
    })
    it("Existuje ikona navigace ?", () => {
        cy.get("img[alt='Trand Trove - navigace']").should("exist")

        //TODO doddělat 
    })

  })




