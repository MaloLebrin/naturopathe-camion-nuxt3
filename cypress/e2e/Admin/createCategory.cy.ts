import category from '../../fixtures/category.json'

describe('Login spec', () => {
  beforeEach(() => {
    cy.login()
    cy.wait(1000)
    cy.dataCy('Admin-categories-create').should('exist')
    cy.dataCy('Admin-categories-create').click()
  })

  it('Correct links on menu', () => {
    cy.dataCy('logout-button').should('exist')
    cy.dataCy('Admin-articles-create').should('exist')
    cy.dataCy('Admin-categories').should('exist')
    cy.dataCy('Admin-categories-create').should('exist')
  })

  it('render form creation category', () => {
    cy.get('h1').contains('Créer une nouvelle catégorie')

    cy.get('button[type=submit]').should('exist')
    cy.get('button[type=submit]').should('be.disabled')

    cy.get('#name').should('exist')
    cy.get('#name').type(category.name)
    cy.get('#name').should('have.value', category.name)

    cy.get('#color').should('exist')
    cy.get('#color').within(() => {
      cy.dataCy('select-button-color').should('exist')
      cy.dataCy('select-button-color').click()
      cy.dataCy('option-amber').should('exist')
      cy.dataCy('option-amber').click()
    })

    cy.get('button[type=submit]').should('exist')
    cy.get('button[type=submit]').should('be.enabled')
  })
})
