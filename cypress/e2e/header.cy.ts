describe('Header component tests', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('renders the logo correctly', () => {
    cy.get('.logo-container').should('exist');
  });

  // TADY MI PROSTĚ NEFUNGOVALI TESTRY PRO HEADER JESTE UPRAVIT XD  
});
