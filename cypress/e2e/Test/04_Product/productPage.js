import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'
import signup from '../../../Pages/signup'
import product from '../../../Pages/productPage'

Given('I am on the products page', () => {
  signup.Visit()
  product.productPage_visit()
})

When('I search for a product', () => {
  product.searchProduct('Men Tshirt')
})

Then('I should see products containing product name', () => {
  product.verifyProductExist('Men Tshirt')
})


When('I add a product to cart', () => {
  cy.addtoCart('Men Tshirt')
})

When('I continue shopping', () => {
  product.continueShopping()
    
})

Then('the cart should update', () => {
  product.cartUpdate()
})

When('I view details for a product', () => {
   product.viewProduct('Men Tshirt')
})

Then('I should see product details', () => {
  product.productDetail('Men Tshirt')
})

When('I view my cart', () => {
  product.viewCartBtn()
   
})

When('I remove product from cart', () => {
  product.removeProduct('Men Tshirt')
})
 
Then('I should see empty cart message', () => {
  product.continueShopping()
   
})
