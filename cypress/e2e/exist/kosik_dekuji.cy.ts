const ROUTES = {
  HOME: '/',
};

describe('Thank You Page', () => {
  beforeEach(() => {
    cy.visit('/kosik/dekujeme');
  });

  it('should display the thank you message', () => {
    cy.contains('Děkujeme za objednávku!').should('be.visible');
  });

  it('should display the delivery message', () => {
    cy.contains('Všechno pro Vás nachystáme a doručíme co nejdříve.').should('be.visible');
  });

  it('should have a link to continue shopping', () => {
    cy.get('a.button')
        .should('have.attr', 'href', ROUTES.HOME)
        .and('contain', 'Pokračovat v nákupech');
  });
});
