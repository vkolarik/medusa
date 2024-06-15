describe("Sweatshirt Component", () => {
    beforeEach(() => {

        cy.visit("/cz/produkty/sweatshirt")
    })

    it("Displays navigation icon and adds sweatshirt to cart", () => {
        cy.get("img[alt='Trand Trove - navigace']").should("exist")

        cy.contains("button", "Průvodce velikostmi").click()

        cy.get('button[aria-label="Select variant S"]').click()

        cy.contains("button", "Přidat do košíku").click()

        cy.contains("Produkt byl úspěšně přidán do košíku").should("be.visible")
    })
})
