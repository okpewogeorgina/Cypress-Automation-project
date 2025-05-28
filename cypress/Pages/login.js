class login {

    emailField(){
        return cy.get('[data-qa="login-email"]')
    }
    passwordField(){
        return cy.get('[data-qa="login-password"]')
    }
    loginBtn (){
        return cy.get('[data-qa="login-button"]')
    }
    loginEmptyCredential(){
        return
        cy.get('[data-qa="login-email"]').click()
        cy.get('[data-qa="login-password"]').click()
        cy.get('[data-qa="login-button"]').should('have.text', 'Login').click()
    }
    errorMsg(){
        return
         cy.contains('p', 'Your email or password is incorrect!').should('be.visible')
    }
    emptyFieldMsg(){
        return
         cy.get('[data-qa="login-email"]').should('be.empty')
         cy.get('[data-qa="login-password"]').should('be.empty')
    }
    

}
module.exports = new login();