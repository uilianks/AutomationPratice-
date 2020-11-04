Cypress.Commands.add('SelectProductAndAttributes', () => {
    cy.contains('Best Sellers').click()
    cy.get('a.product-name').eq(0).click({force: true})
    cy.get('form#buy_block').within(() => {
        cy.get('.product_attributes.clearfix').within(() => {
            cy.get('p#quantity_wanted_p').within(() => {
                cy.get('i.icon-plus').click({force:true})
            })
            cy.get('div#attributes').within(() => {
                cy.get('select#group_1').select('M',{force:true})
                cy.get('a#color_14').click({force:true})
            })
        })
      })
  })