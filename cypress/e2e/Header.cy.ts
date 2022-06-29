
export {};
describe('Header with redirect', () => {
  const logoText = 'Market';

  it('should be visible', () => {
    cy.visit('http://localhost:3000/category/smartphone');
    cy.get('[data-testid="header"]').should('be.visible').contains(logoText);
  });

  it('should redirect to sign in', () => {
    cy.get('[data-testid="sign-in"]').click();
    cy.location('pathname').should('eq', '/login');
  });

  it('should redirect to sign up', () => {
    cy.get('[data-testid="sign-up"]').click();
    cy.location('pathname').should('eq', '/register');
  });

  it('should redirect to shopping cart', () => {
    cy.get('[data-testid="shop-icon"]').click();
    cy.location('pathname').should('eq', '/shopping_cart');
  });
});

describe('Header with theme', () => {
  it('should change theme', () => {
    cy.visit('http://localhost:3000/category/smartphone');
    cy.get('[data-testid="theme-button"]').should('be.visible').contains('Change theme').click();
    cy.wrap(localStorage).invoke('getItem', 'theme').should('eq', 'dark');
  });

  it('should change theme on light', () => {
    cy.get('[data-testid="theme-button"]').should('be.visible').contains('Change theme').click();
    cy.wrap(localStorage).invoke('getItem', 'theme').should('eq', 'light');
  });
});
