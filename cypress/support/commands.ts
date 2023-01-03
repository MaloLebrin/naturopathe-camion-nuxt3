/// <reference types="cypress" />
// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
Cypress.Commands.add('login', () => {
  const url = Cypress.env('FRONT_URL')
  cy.visit(`${url}admin`)
  cy.get('#email').should('exist')
  cy.get('#email').type('elisaneaud08@gmail.com')
  cy.get('#email').should('have.value', 'elisaneaud08@gmail.com')

  cy.get('#password').should('exist')
  cy.get('#password').type('c2BhhMk?48+BDt9q')
  cy.get('#password').should('have.value', 'c2BhhMk?48+BDt9q')

  cy.get('button[type=submit]').should('be.enabled')
  cy.get('button[type=submit]').click()
})

Cypress.Commands.add('dataCy', (value: string) => {
  return cy.get(`[data-cy=${value}]`)
})

//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//

declare global {
  namespace Cypress {
    interface Chainable {
      login(email: string, password: string): Chainable<void>
      dataCy(value: string): Chainable<Element>
      // drag(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
      // dismiss(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
      // visit(originalFn: CommandOriginalFn, url: string, options: Partial<VisitOptions>): Chainable<Element>
      // getByDataCy(value: string): Chainable<Element>
    }
  }
}
