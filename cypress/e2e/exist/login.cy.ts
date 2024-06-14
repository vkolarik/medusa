describe('Login Form', () => {
  beforeEach(() => {
    cy.visit('/cz/prihlaseni')
  })

  it('successfully logs in with valid credentials', () => {
    cy.get('input[name="email"]').type('xproch40@mendelu.cz')
    cy.get('input[name="password"]').type('123456789')

    cy.get('button[type="submit"]').click()


    cy.url().should('not.include', '/login')
  })

  it('displays error with invalid credentials', () => {
    cy.get('input[name="email"]').type('invalid@example.com')
    cy.get('input[name="password"]').type('invalidpassword')

    cy.get('button[type="submit"]').click()

    cy.contains('Invalid email or password').should('be.visible')
  })
})
