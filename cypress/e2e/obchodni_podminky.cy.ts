

describe('VOP Page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:8000/cz/obchodni-podminky');
  });

  it('Spravny title', () => {
    cy.get('h1').should('contain.text', 'Obchodní podmínky');
  });




});
