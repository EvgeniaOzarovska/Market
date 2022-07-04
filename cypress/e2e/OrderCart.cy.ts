import { ErrorMessages } from '../../src/constants/messages';

export {};
describe('OrderCart', () => {
  before(() => {
    cy.visit('http://localhost:3000/category/smartphone');
    cy.get('[data-testid="buy-btn"]').contains('Buy').click();
    cy.get('[data-testid="redirect-btn"]').contains('Go to Cart').click();
  });

  it('should render order cart', () => {
    cy.get('[data-testid="block"]').should('be.visible');
    cy.get('[data-testid="block-pic"]').should('be.visible').should('have.attr', 'src');
    cy.get('[data-testid="block-name"]').should('be.visible');
    cy.get('[data-testid="add-product"]').should('be.visible');
    cy.get('[data-testid="block-price"]').should('be.visible');
    cy.get('[data-testid="block-delete"]').should('be.visible');
  });

  it('should delete item', () => {
    cy.get('[data-testid="block-delete"]').click();
    cy.get('[data-testid="block"]').should('have.length', 0);
    cy.get('[data-testid="page-container"]').contains(ErrorMessages.emptyShoppingCart);
  });
});
