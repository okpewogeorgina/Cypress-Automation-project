# Cypress Automation project
Overview
This Cypress test automation framework provides testing for AutomationExercise.com, 
covering all e-commerce workflows from user registration to order checkout.

Test Coverage
1. User Authentication
 Successful user registration
 Registration with invalid data
 Login with valid credentials
 Login with invalid credentials (email/password/empty)

2. Product Management
 Product search functionality
 Add/remove single products
 Bulk cart operations (add multiple items)
 Product detail page verification

3. Checkout Process
 Complete checkout as logged-in user
 Empty cart validation
 Order confirmation verification

4. Account Management
   Account deletion
  Unauthorized deletion attempts

Framework Features
 BDD Approach: Tests written in Gherkin syntax
 Page Object Model: Organized UI selectors and actions
 Modular Design: Reusable components and steps
 Cross-Browser Testing: Supports Chrome, Firefox, Edge
 CI/CD Ready: Includes GitHub Actions workflow

Prerequisites
Node.js v22.15.1
npm v8+
Cypress v12+  

 
