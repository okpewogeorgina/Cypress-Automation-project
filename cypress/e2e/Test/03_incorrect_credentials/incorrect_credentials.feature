Feature: Login with Invalid Credentials
  As a user
  I should see the correct error messages when I enter invalid credentials

  Scenario: Login with incorrect email
    Given I am on the login page
    When I enter incorrect email "testbaby@example.com" and correct password "678976"
    Then I should see error message: "Your email or password is incorrect!"

  Scenario: Login with incorrect password
    Given I am on the login page
    When I enter correct email "testbaby@example.com" and incorrect password "wrong123"
    Then error message appears: "Your email or password is incorrect!"

  Scenario: Login with empty credentials
    Given I am on the login page
    When I attempt to login with empty credentials
    Then I should see validation errors for both fields