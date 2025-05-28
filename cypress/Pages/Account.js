
class account {
  openAccount() {
    cy.signin(Cypress.env('EMAIL'), Cypress.env('PASSWORD'))
    
    
  }

  deleteBtn() {
    return cy.get('.shop-menu > .nav > :nth-child(5) > a').click()
  }

  deletetConfirmationMg() {
    return cy.contains('Account Deleted!');
  }

  delete_Account() {
    this.deleteBtn().click()
    this.delete_Account().should('be.visible')
  }
}
module.exports = new account();