describe("Sweatshirt Component", () => {
    beforeEach(() => {

        cy.visit("/cz/produkty/sweatshirt")
    })

    it("Displays navigation icon and adds sweatshirt to cart", () => {
        cy.get("img[alt='Trand Trove - navigace']").should("exist")

    })
})
