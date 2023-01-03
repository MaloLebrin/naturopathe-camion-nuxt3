describe('Login spec', () => {
  beforeEach(() => {
    const url = Cypress.env('FRONT_URL')
    cy.visit(`${url}admin/articles`)
  })

  it('button to submit form login is disabled by default', () => {
    cy.get('button[type=submit]').should('exist')
    cy.get('button[type=submit]').should('be.disabled')
  })

  it('form login render correct data', () => {
    cy.get('button[type=submit]').should('exist')
    cy.get('button[type=submit]').should('be.disabled')

    cy.get('#email').should('exist')
    cy.get('#email').type('elisaneaud08@gmail.com')
    cy.get('#email').should('have.value', 'elisaneaud08@gmail.com')

    cy.get('#password').should('exist')
    cy.get('#password').type('c2BhhMk?48+BDt9q')
    cy.get('#password').should('have.value', 'c2BhhMk?48+BDt9q')

    cy.get('button[type=submit]').should('be.enabled')
    cy.get('button[type=submit]').click()

    cy.get('h1').contains('Liste des articles')
  })
})
