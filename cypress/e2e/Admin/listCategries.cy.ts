describe('Login spec', () => {
  beforeEach(() => {
    cy.login()
    cy.wait(1000)
    cy.dataCy('Admin-categories').should('exist')
    cy.dataCy('Admin-categories').click()
  })

  it('Correct links on menu', () => {
    cy.dataCy('logout-button').should('exist')
    cy.dataCy('Admin-articles-create').should('exist')
    cy.dataCy('Admin-categories').should('exist')
    cy.dataCy('Admin-categories-create').should('exist')
  })

  it('Actions of categories exist', () => {
    cy.get('h1').contains('Liste des catégories')

    cy.dataCy('link-update-category').should('be.visible')
    cy.dataCy('link-delete-category').should('be.visible')
  })

  it('open delete conform modal on click delete action button', () => {
    cy.dataCy('link-delete-category').should('be.visible')
    cy.dataCy('link-delete-category').first().click()

    cy.dataCy('confirm-delete-modal').should('be.visible')
    cy.dataCy('confirm-delete-button').should('be.visible')
    cy.dataCy('cancel-delete-button').should('be.visible')
    cy.dataCy('cancel-delete-button').click()
  })

  it('click on update button should redirect', () => {
    cy.dataCy('link-update-category').should('be.visible')
    cy.dataCy('link-update-category').first().click()
    cy.get('h1').contains('Modifier la catégorie')
  })
})
