export {};
describe('ShoppingCart', () => {
  const shoppingCartMock = [
    {
      id: 10,
      name: 'test',
      image: 'test',
      description: 'test',
      price: 5,
      count: 1,
    },
    {
      id: 11,
      name: 'test name',
      image: 'test-src',
      description: 'test description',
      price: 10,
      count: 1,
    }
  ];


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
    // eslint-disable-next-line no-console
    console.log(localStorage);
    cy.get('[data-testid="total-amount"]').contains('15');
  });

  it('should redirect', () => {
    cy.get('[data-testid="continue-btn"]').click();
    cy.location('pathname').should('eq', '/category/smartphone');
  });
});
