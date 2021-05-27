describe('intro flow', () => {
  it('should show our landing page', () => {
    cy.visit('nl/Opstart Eenmanszaak');

    cy.get('.xer-heading-xxl').should('be.visible');
  });
});
