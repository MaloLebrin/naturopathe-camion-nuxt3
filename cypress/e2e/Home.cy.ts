describe('Home spec', () => {
  beforeEach(() => {
    const url = Cypress.env('FRONT_URL')

    cy.visit(url)
  })

  it('passes', () => {
    cy.get('h1').contains('Faire de sa santé un mode de vie')
    cy.get('header').should('exist')

    cy.get('#menu-bottom').should('exist')

    cy.get('#menu-bottom').within(() => {
      cy.get('#Accueil').should('exist')
      cy.get('#Présentation').should('exist')
      cy.get('#Tarifs').should('exist')
      cy.get('#Blog').should('exist')
      cy.get('#Contact').should('exist')
    })
  })

  it('redirect on presentation page', () => {
    cy.get('#menu-bottom').should('exist')

    cy.get('#menu-bottom').within(() => {
      cy.get('#Présentation').click()
    })

    cy.get('h1').contains('La Naturopathie')
    cy.get('h1').contains('Le Concept')
  })

  // it('redirect on about page', () => {
  //   cy.get('#menu-bottom').should('exist')

  //   cy.get('#menu-bottom').within(() => {
  //     cy.get('a').click()
  //   })

  //   cy.get('h2').contains('Je me présente')
  // })

  it('redirect on tarifs page', () => {
    cy.get('#menu-bottom').should('exist')

    cy.get('#menu-bottom').within(() => {
      cy.get('#Tarifs').click()
    })

    cy.get('h1').contains('Consultation Naturopathie')
    cy.get('h1').contains('Massages')
  })

  it('redirect on Blog page', () => {
    cy.get('#menu-bottom').should('exist')

    cy.get('#menu-bottom').within(() => {
      cy.get('#Blog').click()
    })

    cy.get('h1').contains('Le Blog')
  })

  it('redirect on contact page', () => {
    cy.get('#menu-bottom').should('exist')

    cy.get('#menu-bottom').within(() => {
      cy.get('#Contact').click()
    })

    cy.get('h1').contains('Prendre rendez-vous')
  })
})
