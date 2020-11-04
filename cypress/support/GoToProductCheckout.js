Cypress.Commands.add('GoToProductCheckout', () => {
    cy.get('button.exclusive').click()
    cy.get('a.button.btn.btn-default.standard-checkout.button-medium').click()
  })