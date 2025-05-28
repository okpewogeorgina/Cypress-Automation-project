class checkout{
    // Navigate to the checkout page
  visit() {
    return
    cy.visit('/checkout')
  }
  
 //Place order
  placeOrdBtn() {
    return
    cy.contains('Place Order').should('be.visible')
.click()
  }

  //Verify that order have been place
  verifyOrder() {
    return
    cy.contains('h2', 'Order Placed!').should('be.visible')
    cy.get('#ordermessage').should('be.visible')
  }
  
  //Verify that the cart is empty
  verifyEmptyCart() {
    return
    cy.contains('p', 'Cart is empty!').should('be.visible')
  }
}

module.exports = new checkout() 
    
