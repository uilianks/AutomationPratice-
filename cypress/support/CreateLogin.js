import faker from 'faker'

Cypress.Commands.add('CreateLogin', () => {


const email = cy.faker.internet.email();

    cy.get('input#email_create').type(email)
    cy.get('form#create-account_form').submit()
    cy.get('div#noSlide').within(() => {
      cy.get('form#account-creation_form').within(() => {
          cy.get('.account_creation').eq(0).within(() => {
              cy.get('input#id_gender1').check()
              cy.get('input#customer_firstname').type('uilian')
              cy.get('input#customer_lastname').type('kidricki')
              cy.get('input#passwd').type('0okdsadas')
              cy.get('select#days').select('2')
              cy.get('select#months').select('October')
              cy.get('select#years').select('1998')
              cy.get('input#newsletter').check()
              cy.get('input#optin').check()
          })
          cy.get('.account_creation').eq(1).within(() => {
              cy.get('input#company').type('dbserver')
              cy.get('input#address1').type('Rua aquino 28')
              cy.get('input#city').type('Gravatai')
              cy.get('select#id_state').select('Alabama')
              cy.get('input#postcode').type('00000')
              cy.get('textarea#other').type('Automation testing')
              cy.get('input#phone_mobile').type('995045341')
          })
          cy.get('.submit.clearfix').within(() => {
              cy.contains('Register').click()
          })
      })
    })
  })