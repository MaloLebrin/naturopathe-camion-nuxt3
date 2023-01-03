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
