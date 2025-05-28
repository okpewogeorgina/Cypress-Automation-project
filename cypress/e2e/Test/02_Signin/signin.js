import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import signup from "../../../Pages/signup";



Given("I open the login page", () => {
    signup.Visit()
  
})

When("I enter valid credentials", () => {
    cy.signin(Cypress.env('EMAIL'), Cypress.env('PASSWORD'))
  
})

Then("I should be logged in", () => {
 cy.contains('h2', 'Features Items').should('be.visible')
  
})