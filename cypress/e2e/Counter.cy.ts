import { shoppingCartMock } from '../support/mocks.cy';

describe('Counter', () => {
  beforeEach(() => {
    window.localStorage.setItem('cart', JSON.stringify(shoppingCartMock));
    cy.visit('http://localhost:3000/category/smartphone');
    cy.get('[data-testid="shop-icon"]').click();
  });
  afterEach(() => {
    window.localStorage.clear();
  });

  it('should render counter', () => {
    cy.get('[data-testid="add-product"]').should('be.visible');
    cy.get('[data-testid="decrease"]').should('be.visible');
    cy.get('[data-testid="increase"]').should('be.visible');
    cy.get('[data-testid="count-result"]').should('be.visible');
  });

  it('should work increase', () => {
    cy.get('[data-testid="increase"]').click({ multiple: true });
    cy.get('[data-testid="count-result"]').contains((shoppingCartMock[0].count + 1).toString());
  });

  it('should work decrease', () => {
    cy.get('[data-testid="decrease"]').click({ multiple: true });
    cy.get('[data-testid="count-result"]').contains((shoppingCartMock[0].count - 1).toString());
  });
});
