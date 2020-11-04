Cypress.Commands.add('Purchase', () => {
    cy.get('button.button.btn.btn-default.button-medium').click()
    cy.get('input#cgv').check()
    cy.get('button.button.btn.btn-default.standard-checkout.button-medium').click()
    cy.contains('$19.25')
    cy.get('p.payment_module').eq(0).click()
    cy.get('button.button.btn.btn-default.button-medium').click()
    cy.get('p.cheque-indent').contains('Your order on My Store is complete.')
  })