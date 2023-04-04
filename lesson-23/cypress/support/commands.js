// ***********************************************
// This example commands.js shows you how to
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
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (url) => {
//     cy.visit(url)
// })

Cypress.Commands.add('inputTextAndCheck', (text, remainLetter) => {
    cy.get('#first-name-input')
        .type(text);
    cy.get('[data-cy="first-name-chars-left-count"]')
        .invoke('text')
        .should('equal', remainLetter);
})
