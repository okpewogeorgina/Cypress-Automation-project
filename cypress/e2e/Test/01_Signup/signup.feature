Feature: User Signup successfully and unsuccesssfully
  As a new user, I want to signup on AutomationExercise.com

 Scenario: Successfully signup
    Given I open the signup page
    When I enter new user account details
    Then I should see a success message

  Scenario: unsuccessfully signup
    Given I open the signup page
    When I enter an existing email 
    Then I should see the error message