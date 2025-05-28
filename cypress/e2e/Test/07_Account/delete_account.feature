Feature: Account Deletion
  As a user with existing account
  I want to delete my account
  So that I can remove my personal information

  Scenario: Successful account deletion
    Given I am logged in
    When I click delete account button
    Then I should see account deletion confirmation
    And I should not be able to login with deleted credentials

  Scenario: Attempt delete without login
    Given I am not logged in
    When I try to access account deletion directly
    Then I should see error message