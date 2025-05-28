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
// Cypress.Commands.add('login', (email, password) => { ... })
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
import '@testing-library/cypress/add-commands'
import 'cypress-fill-command'

///Cypress.Commands.add('signup',(username, /*email, password, firstname, Lastname, Address, State, city, pstcode, phone*/ ) =>{
  // cy.findByPlaceholderText('Name').type(username).should('have.value', username)
   /*cy.get('[data-qa="signup-email"]').type(Cypress.env('EMAIL'))

   cy.get('[data-qa="password"]').type(username).should('have.value', username)
   cy.get('[data-qa="first_name"]').type('Tester').should('have.value', 'Tester') 
   cy.get('[data-qa="last_name"]').type('Tester4').should('have.value', 'Tester4')
   cy.get('[data-qa="address"]').type('56 friends street').should('have.value', '56 friends street') 
   cy.get('[data-qa="state"]').type('Ontario').should('have.value', 'Ontario')
   cy.get('[data-qa="city"]').type('Ajax').should('have.value', 'Ajax')
   cy.get('[data-qa="zipcode"]').type('O3N 7g5').should('have.value', 'O3N 7g5')
   cy.get('[data-qa="mobile_number"]').type('2345678456').should('have.value', '2345678456')
*/

    
//})