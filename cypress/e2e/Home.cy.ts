describe('Home spec', () => {
  it('passes', () => {
    const url = Cypress.env('FRONT_URL')

    cy.visit(url)

    cy.get('h1').contains('Faire de sa santé un mode de vie')
    cy.get('header').should('exist')
  })
})
