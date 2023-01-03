describe('Login spec', () => {
  beforeEach(() => {
    cy.login()
  })

  it('Actions of articles exist', () => {
    cy.get('h1').contains('Liste des articles')
    cy.get('#headlessui-menu-button-1').click()

    cy.dataCy('update-article-link-5').contains('Modifier')
    cy.dataCy('update-status-article-button-5').contains('Actif (Désactiver)')
    cy.dataCy('delete-article-button-5').contains('Supprimer')
  })

  // it('Update status of article', () => {
  //   cy.get('h1').contains('Liste des articles')
  //   // cy.get('button').contains('BROUILLON')
  //   cy.get('#headlessui-menu-button-1').click()

  //   // cy.get('#update-status-article-button').contains('Actif (Désactiver)')
  //   cy.get('#update-status-article-button-4').click()
  //   // cy.get('#update-status-article-button').contains('Inactif (Activer)')
  //   cy.get('#update-status-article-button-4').click()
  // })
})
