export {};
describe('Header with redirect', () => {
  const logoText = 'Market';

  before(() => {
    cy.visit('http://localhost:3000/category/smartphone');
  });

  it('should be visible', () => {
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
  it('should change theme on dark', () => {
    window.localStorage.setItem('theme', 'light');
    cy.get('[data-testid="theme-button"]').should('be.visible').contains('Change theme').click();

    it('should change theme on light', () => {
      window.localStorage.setItem('theme', 'dark');
      cy.get('[data-testid="theme-button"]').should('be.visible').contains('Change theme').click();
    });
  });
});
