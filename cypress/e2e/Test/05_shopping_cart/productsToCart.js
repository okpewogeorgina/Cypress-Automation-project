import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import signup from '../../../Pages/signup'
import product from '../../../Pages/productPage';

Given('I am on the products page', () => {
  signup.Visit()
  product.productPage_visit()
      
})

When('I add a product to cart', () => {
 cy.addtoCart('Men Tshirt')
  
})

When('I view my cart', () => {
  product.viewCartBtn()
  
})
Then('I should see the product in my cart', () => {
  product.cartUpdate()
  

})

When('I remove the product from cart', () => {
  product.removeProduct('Men Tshirt')
 
  cy.wait(10000)
})
Then('I should see {string} message', () => {
   product.emptycartMsg()
  
})



When('I add the {int} products', ( ) => {
   
   product.searchProduct('Blue Top')
   cy.addtoCart('Blue Top')
   product.continueShopping()
   cy.wait(1000)
    
   cy.visit(Cypress.env('PRODUCTS_URL'))
    product.searchProduct('Men Tshirt')
   cy.addtoCart('Men Tshirt')
   product.continueShopping()
   cy.wait(1000)
     cy.visit(Cypress.env('PRODUCTS_URL'))
    product.searchProduct('Sleeveless Dress')
   cy.addtoCart('Sleeveless Dress')
   product.continueShopping()
   cy.wait(1000)

     cy.visit(Cypress.env('PRODUCTS_URL')) 
    product.searchProduct('Winter Top')
   cy.addtoCart('Winter Top')
    product.viewCartBtn()
   cy.wait(10000)
   
  
  })
 
  
Then('I should see {int} products', () => {
  cy.get('u').should('be.visible').click({force:true})
 
  
  // Wait for cart to load
  cy.get('#cart_info_table', { timeout: 10000 }).should('be.visible')

  product.countProductInCart(3)
  
})

When('I remove 1 from cart', (productName) => {
   cy.contains('.cart_description h4 a', 'Men Tshirt')
            .scrollIntoView()
            .should('be.visible');
          cy.contains('.cart_description h4 a', 'Men Tshirt')
            .parents('tr')
            .within(() => {
              cy.get('.cart_delete a')
                .should('be.visible')
                .click({ force: true })
            })
            
          // Verify removal
          cy.contains('.cart_description h4 a', 'Men Tshirt')
            .should('not.exist')
        
})

Then('I should see 3 remains in cart', () => {
  
  product.countProductInCart(2)

}) 
  


