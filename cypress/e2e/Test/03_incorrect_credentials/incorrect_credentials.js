import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'
import signup from '../../../Pages/signup'
import login from '../../../Pages/login'

//The user is login with incorrect email
Given('I am on the login page', () => {
    cy.reload()
    signup.Visit()
  
});

When('I enter incorrect email {string} and correct password {string}', (email, password) => {
    cy.signin('email@gmail.com', Cypress.env('PASSWORD'))
  
});
Then('I should see error message: {string}', () => {
    login.errorMsg()
})
//The user login with incorrect password

When('I enter correct email {string} and incorrect password {string}', () => {
    cy.signin(Cypress.env('EMAIL'), 'rtdnmmb')
})
    
Then('error message appears: {string}', () => {
    signup.errorMsg()
})
// Login in with no password and email
When('I attempt to login with empty credentials', ()=> {
    login.loginEmptyCredential()
   
})
//
Then('I should see validation errors for both fields', () => {
    login.emptyFieldMsg()
   
})
