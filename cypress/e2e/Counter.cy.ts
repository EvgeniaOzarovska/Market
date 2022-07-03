export {};
describe('Item Card', () => {
  before(() => {
    cy.visit('http://localhost:3000/category/smartphone');
    cy.get('[data-testid="buy-btn"]').contains('Buy').click();
    cy.get('[data-testid="redirect-btn"]').contains('Go to Cart').click();
  });

  it('should render counter', () => {
    cy.get('[data-testid="add-product"]').should('be.visible');
    cy.get('[data-testid="decrease"]').should('be.visible');
    cy.get('[data-testid="increase"]').should('be.visible');
    cy.get('[data-testid="count-result"]').should('be.visible');
  });

  it('should work increase', () => {
    cy.get('[data-testid="increase"]').click();
    cy.get('[data-testid="count-result"]').contains('2');
  });

  it('should work decrease', () => {
    cy.get('[data-testid="decrease"]').click();
    cy.get('[data-testid="count-result"]').contains('1');
  });
});
