export {};
describe('Footer', () => {
  const footInfo = 'OUR ADRESS: Kharkiv, Sumska Street, 45';
  const footText = 'We and our partners may store and access data on a device, such as cookies, and process personal data, such as unique identifiers, sent by a device to personalise content, tailor and report on advertising and analyse our traffic.';

  it('should visible', () => {
    cy.visit('http://localhost:3000');
    cy.get('footer').should('be.visible').contains(footInfo);
    cy.get('footer').should('be.visible').contains(footText);
  });
});
