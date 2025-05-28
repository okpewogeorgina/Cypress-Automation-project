import signup from "../Pages/signup"
// This a custom command for creating a new user.
Cypress.Commands.add('sign_up', (username, email, password, first_name, Last_name, address, state, city, pstcode, mobile) => {
            
            signup.Username().type(username).should('have.value', username)
            signup.Email().type(email).should('have.value', email)
            signup.signupBtn()
            signup.signupPgMessage()
            signup.titleRadioBtn().check({force:true}).should('have.value', 'Mr')
            signup.password().type(password).should('have.value', password)
            signup.dayOfBirth()
            signup.monthOfBirth()
            signup.yearOfBirth()
            signup.first_name().type(first_name).should('have.value', first_name)
            signup.last_name().type(Last_name).should('have.value', Last_name)
            signup.Address().type(address).should('have.value', address)
            signup.Country()
            signup.state().type(state).should('have.value', state)
            signup.city().type(city).should('have.value', city)
            signup.pstcode().type(pstcode).should('have.value', pstcode)
            signup.phone().type(mobile).should('have.value', mobile)
            signup.createAccountBtn()

        
})
