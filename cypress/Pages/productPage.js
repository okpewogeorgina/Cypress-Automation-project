
class product{

    //Create an object for signing  into the product page
    productPage_visit(){
        cy.signin(Cypress.env('EMAIL'), Cypress.env('PASSWORD')) 
        cy.get('.shop-menu > .nav > :nth-child(2) > a').click() 

    }
    //This is to search for product
    searchProduct(product){
        return   
        cy.get('#search_product')
        .should('be.visible')
              .clear()
              .type(product);
         cy.get('#submit_search').click()
  
    }
    //This is to verify that product search exist in the product gallery
    verifyProductExist(product){
        return
        cy.get('.features_items .productinfo')
           .each(($product) => {
        cy.wrap($product)
            .find('p')
          .should('contain', product)
        })

    }
    // This is used to click the continue  button
    continueShopping(){
        return 
         cy.contains('button', 'Continue Shopping').click()  

    }
    //This is used to verify producted selected is in the cart
    
    cartUpdate(){
        return
        cy.contains('u', 'View Cart')
        .find('span')
        .should('not.be.empty')

    }
    //Check for product existence in the product gallery
    viewProduct(product){
      return
        cy.contains('.product-image-wrapper p', new RegExp(`^${product}$`, 'i'))
            .parents('.product-image-wrapper')
          .find('a')
          .contains(/view product/i)
          .click()

    }
    //Verify the product is the correct product
    productDetail(product) {
        return
         cy.get('.product-information').should('be.visible')
         cy.get('.product-information h2').should('contain', product)

    }
    //Click the view cart button
    viewCartBtn(){
        return
        cy.contains('u', 'View Cart').should('be.visible').click({force:true})


    }
    // This is to remove product from cart
    removeProduct(product){
        return
        cy.contains('.cart_description h4 a', product)
            .scrollIntoView()
            .should('be.visible')
          cy.contains('.cart_description h4 a', product)
            .parents('tr')
            .within(() => {
              cy.get('.cart_delete a')
                .should('be.visible')
                .click({ force: true })
            })
            
          // Verify product removal
          cy.contains('.cart_description h4 a', product)
            .should('not.exist')
        
    }
    //Verification message that the cart is empty
    emptycartMsg(){
        return
         cy.contains('p', 'Cart is empty!').should('be.visible')

    }
    countProductInCart(count){
    return
      cy.get('body').then(($body) => {
    if ($body.find('#cart_info_table tr').length > 0) {
      cy.get('#cart_info_table tbody tr').then(($rows) => {
        // Subtract header row
        const actualCount = $rows.length - 1    
        expect(actualCount).to.eq(count)
      });
    } else if ($body.find('.cart_info tr').length > 0) {
      cy.get('.cart_info tr.cart_product').should('have.length', count)
    } else {
      throw new Error('Could not find cart items table')
    }
  }) 
   
//This is to count the number of product in the cart
   
}
}
module.exports = new product();