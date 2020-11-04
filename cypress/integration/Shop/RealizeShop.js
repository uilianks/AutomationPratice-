/// <reference types="cypress" />
context('Actions', () => {
    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
      })
    before(() => {
      cy.visit('/')
    })
    it('Select the clothes', () => {
        //Select product and attributes
        cy.SelectProductAndAttributes()
        //add the product to cart and go to checkout
        cy.GoToProductCheckout()
        //create login
        cy.CreateLogin()
        //validate address
        cy.ValidateAdress()
        //go to final steps of the purchase
        cy.Purchase()
      })
  })