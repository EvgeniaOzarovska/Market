import { HardCoddedData } from '../../src/data/data';
import { ErrorMessages } from '../../src/constants/messages';

describe('Home', () => {
  before(() => {
    cy.visit('http://localhost:3000/category/smartphone');
  });

  it('should render Home page', () => {
    cy.get('[data-testid="home-page"]').should('be.visible');
    cy.get('[data-testid="sidebar-category"]').should('be.visible');
    cy.get('[data-testid="product-block"]').should('be.visible');
  });

  it('should change category', () => {
    cy.get('[data-testid="sidebar-category"]').click({ multiple: true });
    cy.get('[data-testid="card-block"]').should('have.length', HardCoddedData.watch.length);
  });

  it('should render error message', () => {
    cy.get('[data-testid="search-block"]').type('kjkjkjkjkjk');
    cy.get('[data-testid="search-btn"]').click();
    cy.get('[data-testid="error-msg"]')
      .should('be.visible')
      .contains(ErrorMessages.recordsNotFound);
  });
});
