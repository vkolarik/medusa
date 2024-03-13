describe('GDPR Stránka', () => {
  beforeEach(() => {
    cy.visit('/gdpr')
  })

  it('Zobrazuje se text ?', () => {
    cy.contains('Základní ustanovení').should('exist')
    cy.contains('Zdroje a kategorie zpracovávaných osobních údajů').should('exist')

  })
})
