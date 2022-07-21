import { HardCoddedData } from '../../src/data/data';
import { fetchCategories } from '../../src/requests/reguests';

describe('Sidebar', () => {
  const categories = fetchCategories();

  before(() => {
    cy.visit('http://localhost:3000/category/smartphone');
  });

  it('should render sidebar', () => {
    cy.get('[data-testid="sidebar-block"]').should('be.visible');
    cy.get('[data-testid="sidebar-category"]').should('be.visible');
  });

  it('should render all categories', () => {
    cy.get('[data-testid="sidebar-category"]').should('have.length', categories);
    HardCoddedData.categories.forEach(value => {
      cy.get('[data-testid="sidebar-category"]').contains(value.name);
    });
  });
});
