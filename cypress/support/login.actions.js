import login from "../Pages/login"
//This is a custom command for signin into an existing account

Cypress.Commands.add('signin', (email, password) => {
    login.emailField().type(email).should('have.value', email)
    login.passwordField().type(password).should('have.value', password)
    login.loginBtn().should('have.text', 'Login').click()
})
//This is a custom commands to add new product to cart
Cypress.Commands.add('addtoCart', (product) => {
    cy.contains('.productinfo', product)
          .trigger('mouseover')
          .within(() => {
            cy.contains('Add to cart').click({force: true});
          })
})