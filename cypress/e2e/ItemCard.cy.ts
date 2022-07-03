export {};
describe('Item Card', () => {
  before(() => {
    cy.visit('http://localhost:3000/category/smartphone');
  });

  it('should render Item card', () => {
    cy.get('[data-testid="card-block"]').should('not.be.empty');
    cy.get('[data-testid="card-block-name"]').should('not.be.empty');
    cy.get('[data-testid="card-block-price"]').should('not.be.empty');
    cy.get('[data-testid="card-block-description"]').should('not.be.empty');
    cy.get('[data-testid="card-block-img"]').should('have.attr', 'src');
  });

  it('should open/close modal', () => {
    cy.get('[data-testid="buy-btn"]').contains('Buy').click();
    cy.get('[data-testid="card-block-modal"]').should('be.visible');
    cy.get('[data-testid="card-block-modal"]').should('not.be.empty');
    cy.get('[data-testid="close-btn"]').contains('Сontinue shopping').click();
    cy.get('[data-testid="card-block-modal"]').should('not.be.visible');
    cy.get('[data-testid="redirect-btn"]').contains('Go to Cart').click();
    cy.location('pathname').should('eq', '/shopping_cart');
  });
});
