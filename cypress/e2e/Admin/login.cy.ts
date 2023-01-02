describe('Login spec', () => {
  beforeEach(() => {
    const url = Cypress.env('FRONT_URL')
    console.log(Cypress.env(), '<==== Cypress.env()')

    cy.visit(`${url}admin`)
  })

  it('button to submit form login is disabled by default', () => {
    cy.get('button[type=submit]').should('exist')
    cy.get('button[type=submit]').should('be.disabled')
  })

  it('form login render correct data', () => {
    cy.get('button[type=submit]').should('exist')
    cy.get('button[type=submit]').should('be.disabled')

    cy.get('#email').should('exist')
    cy.get('#email').type(Cypress.env('TEST_USER'))
    cy.get('#email').should('have.value', Cypress.env('TEST_USER'))

    cy.get('#password').should('exist')
    cy.get('#password').type(Cypress.env('TEST_PASSWORD'))
    cy.get('#password').should('have.value', Cypress.env('TEST_PASSWORD'))

    cy.get('button[type=submit]').should('be.enabled')
  })
})
