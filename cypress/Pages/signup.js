class signup{
    //This is the signup class. 
    Visit(){
        cy.visit(Cypress.env('LOGIN_URL'))
    }
    Username(){
        return  cy.findByPlaceholderText('Name')//.type(Cypress.env('USERNAME'))
    }
    Email(){
        return cy.get('[data-qa="signup-email"]')//.type(Cypress.env('EMAIL'))
    }
    //Signup button element
    signupBtn(){
        return cy.findByRole('button', {name: /Signup/i}).click({force: true})
    }
    //signup page message
    signupPgMessage(){
        return cy.get(':nth-child(1) > b').should('be.visible')
    }
    //title radio button
    titleRadioBtn(){
       return cy.get('#id_gender1') 
        
    }
    // Selector for the password field
    password(){
        return cy.get('[data-qa="password"]')//.type(Cypress.env('PASSWORD'))
    }
    //Select day of birth
    dayOfBirth(){
        return cy.get('[data-qa="days"]').select(3).invoke('val').should('eq', '3')

    }
    //select of month of birth
    monthOfBirth(){
        return cy.get('[data-qa="months"]').select('March').invoke('val').should('eq', '3')
    }
    //Select year of birth
    yearOfBirth(){
        return cy.get('[data-qa="years"]').select('1985').invoke('val').should('eq', '1985')
    }
    //Select first name
    first_name(){
        return cy.get('[data-qa="first_name"]')//.type('Tester').should('have.value', 'Tester')

    }
    //Select last name selector
    last_name(){
        return cy.get('[data-qa="last_name"]')//.type('Tester4').should('have.value', 'Tester4')
    }
    //select address selector and enter address
    Address(){
        return cy.get('[data-qa="address"]')//.type('56 friends street').should('have.value', '56 friends street')
    }
    //Select country
    Country(){
        return cy.get('[data-qa="country"]').select('Canada').invoke('val').should('eq', 'Canada')
    
    }
    //Enter the province/state
    state(){
        return cy.get('[data-qa="state"]')//.type('Ontario').should('have.value', 'Ontario')
    }
    //Enter city
    city(){
        return cy.get('[data-qa="city"]')//.type('Ajax').should('have.value', 'Ajax')
    }
    //Enter the postcode
    pstcode(){
        return cy.get('[data-qa="zipcode"]')//.type('O3N 7g5').should('have.value', 'O3N 7g5')
    }
    //Enter your phone number
    phone(){
        return cy.get('[data-qa="mobile_number"]')//.type('2345678456').should('have.value', '2345678456')
    }
   
    //Created account button selector
    createAccountBtn(){
        return  cy.get('[data-qa="create-account"]').click()

    }
    // Error message for inaccurate login details
    errorMsg(){
        return
        cy.contains('p', 'Your email or password is incorrect!').should('be.visible')

    }
    // Account creation message
    accountCreatedConfirm(){
        return 
        cy.contains("Account Created!").should("be.visible")
    }
 


}


module.exports = new signup();