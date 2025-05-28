import {Given, When, Then, And } from '@badeball/cypress-cucumber-preprocessor';
//<reference types="Cypress"/>
import signup from '../../../Pages/signup';
import account from '../../../Pages/Account'

 Given('I am logged in', () => {
       signup.Visit()
       cy.signin(Cypress.env('EMAIL'), Cypress.env('PASSWORD'))
 })
 When('I click delete account button', () => {
      account.deleteBtn()
      
 })

Then('I should see account deletion confirmation', () =>{
    account.deletetConfirmationMg().should('be.visible')
    .and('contain', 'Account Deleted!');

})
Then('I should not be able to login with deleted credentials', () => {
     signup.Visit()
     cy.signin(Cypress.env('EMAIL'), Cypress.env('PASSWORD'))
     signup.errorMsg()

})

Given('I am not logged in', () => {
     cy.clearCookies()

})
When('I try to access account deletion directly', () => {
     signup.Visit()
     cy.signin(Cypress.env('EMAIL'), Cypress.env('PASSWORD'))

})
Then('I should see error message', () => {
     signup.errorMsg()
})
    
