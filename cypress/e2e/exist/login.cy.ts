describe('Login Form', () => {
  beforeEach(() => {
    cy.visit('/cz/prihlaseni')
  })

  it('successfully logs in with valid credentials', () => {
    cy.get('input[name="email"]').type('xproch40@mendelu.cz')
    cy.wait(1000)

    cy.get('input[name="password"]').type('123456789')
    cy.wait(1000)

    cy.get('button[type="submit"]').click()
    cy.wait(1000)

    cy.url().should('not.include', '/login')
  })

})
