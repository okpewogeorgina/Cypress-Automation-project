
import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import checkout from '../../../Pages/checkout'
import product from '../../../Pages/productPage'
import signup from '../../../Pages/signup' 


Given('I have products in my cart', () => {
  signup.Visit()
  cy.signin(Cypress.env('EMAIL'), Cypress.env('PASSWORD'))
  product.searchProduct('Blue Top')
  cy.addtoCart('Blue Top')
  cy.wait(10000)
   cy.contains('u', 'View Cart').should('be.visible').click({force:true}) 
   
    
  
  
})
When('I proceed to checkout', () => {
 
  //click the proceed to checkout button
 cy.get('.col-sm-6 > .btn') .click({force: true})
})

//complete the card detail field
When('I enter my payment details', () => {
  cy.get(':nth-child(7) > .btn').click({force:true})
  cy.wait(5000)
  checkout.placeOrdBtn()
  const testAddress = {
    name: 'Test User',
    cardNumber: '4111111111111111',
    cvc: '123',
    month: '05',
    year: '26'

  }
  // cy.get('#address_delivery').should('be.visible')
    cy.get('input[name="name_on_card"]').type(testAddress.name).should('have.value', testAddress.name)
    cy.get('input[name="card_number"]').type(testAddress.cardNumber).should('have.value', testAddress.cardNumber)
    cy.get('input[data-qa="cvc"]').type(testAddress.cvc).should('have.value', testAddress.cvc) 
    cy.get('input[data-qa="expiry-month"]').type(testAddress.month).should('have.value', testAddress.month)
   cy.get('input[data-qa="expiry-year"]').type(testAddress.year).should('have.value', testAddress.year)
  
  // Click the pay button
  cy.get('button[data-qa="pay-button"]').click({force:true})

})
Then('I should see order confirmation', () => {
  checkout.verifyOrder()
})

Given('I have an empty cart', () => {

  signup.Visit()
  cy.signin(Cypress.env('EMAIL'), Cypress.env('PASSWORD'))
  checkout.visit()
})


When('I attempt to checkout', () => {
  cy.get('.shop-menu > .nav > :nth-child(3) > a').click()
  cy.get('.col-sm-6 > .btn').should('not.exist')
  
})
Then('I should not see the checkout message', () => {
  checkout.verifyEmptyCart()

 
})

