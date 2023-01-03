describe('Login spec', () => {
  beforeEach(() => {
    cy.login()
  })

  it('Actions of articles exist', () => {
    cy.get('h1').contains('Liste des articles')

    cy.dataCy('actions-button-article-5').click()

    cy.dataCy('update-article-link-5').contains('Modifier')
    cy.dataCy('update-status-article-button-5').contains('Actif (Désactiver)')
    cy.dataCy('delete-article-button-5').contains('Supprimer')
  })

  it('Update status of article', () => {
    cy.get('h1').contains('Liste des articles')

    cy.dataCy('actions-button-article-5').click()

    cy.dataCy('update-status-article-button-5').contains('Actif (Désactiver)')
    cy.dataCy('update-status-article-button-5').click()

    cy.dataCy('actions-button-article-5').click()

    cy.dataCy('update-status-article-button-5').contains('Inactif (Activer)')
    cy.dataCy('update-status-article-button-5').click()
  })
})
