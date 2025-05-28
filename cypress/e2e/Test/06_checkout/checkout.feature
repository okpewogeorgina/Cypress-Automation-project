
Feature: Checkout Process
  As a user
  I want to complete the checkout process
  So that I can purchase my selected items
   

  Scenario: Complete checkout as a signin user
    Given I have products in my cart
    When I proceed to checkout
    And I enter my payment details
    Then I should see order confirmation

  Scenario: checkout with an empty basket
    Given I have an empty cart
    When I attempt to checkout
    Then I should not see the checkout message

 