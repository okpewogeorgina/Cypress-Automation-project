const { Given, When, Then } = require("@badeball/cypress-cucumber-preprocessor");
import signup from "../../../Pages/signup";

//import signup from ~"
//Navigating to the signup page
Given('I open the signup page', () => {
      signup.Visit()
})

//Enter account details to create new user
When('I enter new user account details', () => {
     cy.sign_up(Cypress.env('USERNAME'), Cypress.env('EMAIL'), Cypress.env('PASSWORD'), 'John', 'Smith', '6 Rock Street', 'Manitoba', 'Whinnipeg', 'm3t 7hg', '25467889900')
            
})
//The user click the create account button
Then('I should see a success message', ()=> {
    signup.Visit()
})

//This is to test the scenerio of creating an account with an existing email

When('I enter an existing email',() => {
    signup.Username().type(Cypress.env('USERNAME')).should('have.value', Cypress.env('USERNAME'))
    signup.Email().type(Cypress.env('EMAIL')).should('have.value', Cypress.env('EMAIL'))
    signup.signupBtn()
    
}) 
Then('I should see the error message', () => {
     cy.contains('p', 'Email Address already exist!').should('be.visible')
})



