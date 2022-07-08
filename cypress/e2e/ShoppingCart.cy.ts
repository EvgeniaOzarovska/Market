import { shoppingCartMock } from '../support/mocks.cy';
import { ErrorMessages } from '../../src/constants/messages';

export {};
describe('ShoppingCart', () => {
  const calculate = () => {
    return (
      shoppingCartMock[0].price * shoppingCartMock[0].count +
      shoppingCartMock[1].price * shoppingCartMock[1].count
    );
  };

  beforeEach(() => {
    window.localStorage.setItem('cart', JSON.stringify(shoppingCartMock));
    cy.visit('http://localhost:3000/category/smartphone');
    cy.get('[data-testid="shop-icon"]').click();
  });

  it('should render Shopping cart', () => {
    cy.get('[data-testid="page-container"]').should('be.visible');
    cy.get('[data-testid="total-amount"]').should('be.visible');
  });

  it('should calculate total amount', () => {
    cy.get('[data-testid="total-amount"]').contains(calculate());
  });
});

describe('redirect', () => {
  it('should redirect', () => {
    cy.visit('http://localhost:3000/shopping_cart');
    cy.get('[data-testid="continue-btn"]').click();
    cy.location('pathname').should('eq', '/category/smartphone');
  });
});

describe('Empty shopping cart', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/shopping_cart');
  });

  it('should render message', () => {
    window.localStorage.setItem('cart', '0');
    cy.get('[data-testid="continue-btn"]').should('be.visible').contains('Сontinue shopping');
    cy.get('[data-testid="empty-cart"]')
      .should('be.visible')
      .contains(ErrorMessages.emptyShoppingCart);
  });
});
