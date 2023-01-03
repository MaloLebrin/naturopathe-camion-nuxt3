import article from '../../fixtures/article.json'

describe('Login spec', () => {
  beforeEach(() => {
    cy.login()
    cy.wait(1000)
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

  it('Correct links on menu', () => {
    cy.dataCy('logout-button').should('exist')
    cy.dataCy('Admin-articles-create').should('exist')
    cy.dataCy('Admin-categories').should('exist')
    cy.dataCy('Admin-categories-create').should('exist')
  })

  it.only('Correct liks on menu', () => {
    cy.dataCy('Admin-articles-create').should('exist')
    cy.dataCy('Admin-articles-create').click()

    cy.get('h1').contains('Créer un nouvel article')

    cy.get('button[type=submit]').should('exist')
    cy.get('button[type=submit]').should('be.disabled')

    cy.get('#title').should('exist')
    cy.get('#title').type(article.title)
    cy.get('#title').should('have.value', article.title)

    cy.get('#description').should('exist')
    cy.get('#description').type(article.description)
    cy.get('#description').should('have.value', article.description)

    // cy.get('#categoryId').should('exist')
    // cy.get('#categoryId').type(article.categoryId.toString())
    // cy.get('#categoryId').should('have.value', article.categoryId)

    cy.get('#content').should('exist')
    cy.get('#content').type(article.content)
    cy.get('#content').should('have.value', article.content)

    cy.dataCy('fields-array-input-files').should('exist')
    cy.dataCy('fields-array-input-files').within(() => {
      cy.get('button').should('exist')
      cy.get('button>input[type=file]').should('exist')
      cy.get('button>input[type=file]').selectFile({
        contents: Cypress.Buffer.from('exemple-image.webp'),
        fileName: 'exemple-image.webp',
        lastModified: Date.now(),
      }, { force: true })
    })

    // cy.dataCy('base-picture-files[0]-button').should('exist')

    // cy.dataCy('base-picture-files[0]-button').selectFile({
    //   contents: Cypress.Buffer.from('exemple-image.webp'),
    //   fileName: 'exemple-image.webp',
    //   lastModified: Date.now(),
    // })

    cy.get('button[type=submit]').should('be.enabled')
    // cy.get('button[type=submit]').click()
  })
})
