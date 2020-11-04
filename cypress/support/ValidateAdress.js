Cypress.Commands.add('ValidateAdress', () => {
    cy.get('ul#address_delivery').within(() => {
        cy.get('li.address_address1.address_address2').within(() => {
            cy.contains('Rua aquino 28')
        })
        cy.get('li.address_city.address_state_name.address_postcode').within(() => {
            cy.contains('Gravatai')
            cy.contains('Alabama')
            cy.contains('00000')
        })
        cy.get('li.address_country_name').within(() => {
            cy.contains('United States')
        })
    })
  })