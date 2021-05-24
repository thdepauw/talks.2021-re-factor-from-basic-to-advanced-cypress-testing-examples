describe('intro flow', () => {
  it('It should show our landing page', () => {
    cy.visit('nl/Opstart Eenmanszaak');

    cy.get('.xer-heading-xxl').should('be.visible');
  });
});
