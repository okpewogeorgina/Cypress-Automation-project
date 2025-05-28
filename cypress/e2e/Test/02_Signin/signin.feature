Feature: Login Functionality
  As a user, I want to log in to AutomationExercise.com

  Scenario: Successful Login
    Given I open the login page
    When I enter valid credentials
    Then I should be logged in


   