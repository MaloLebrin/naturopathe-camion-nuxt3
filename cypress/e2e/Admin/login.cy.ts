describe('Login spec', () => {
  beforeEach(() => {
    const url = Cypress.env('FRONT_URL')
    console.log(Cypress.env(), '<==== Cypress.env()')

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
    cy.get('#email').type('malolebrin@icloud.com')
    cy.get('#email').should('have.value', 'malolebrin@icloud.com')

    cy.get('#password').should('exist')
    cy.get('#password').type('22Fv&4er*8EzTNuX!bP')
    cy.get('#password').should('have.value', '22Fv&4er*8EzTNuX!bP')

    cy.get('button[type=submit]').should('be.enabled')
    cy.get('button[type=submit]').click()

    cy.get('h1').contains('Liste des articles')
  })
})
