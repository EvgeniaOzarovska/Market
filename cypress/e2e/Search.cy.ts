import { ErrorMessages } from '../../src/constants/messages';

export {};
describe('Search', () => {
  before(() => {
    cy.visit('http://localhost:3000/category/smartphone');
  });

  it('should render search block', () => {
    cy.get('[data-testid="search-block"]').should('be.visible');
    cy.get('[data-testid="search-btn"]').should('be.visible').contains('Search').click();
  });

  it('should render error block', () => {
    cy.get('[data-testid="search-block"]').type(
      '1234555959595959595959595959595959959595959595959595',
    );
    cy.get('[data-testid="search-block"]').should('be.visible').contains(ErrorMessages.errorSearch);
    cy.get('[data-testid="search-btn"]').should('be.disabled');
  });
});
