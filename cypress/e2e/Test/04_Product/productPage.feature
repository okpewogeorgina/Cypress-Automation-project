
Feature: Product Page 
  As a user
  I want to interact with the products page
  So that I can find and manage products 
Background:
    Given I am on the products page
    
  Scenario: Search for products
    When I search for a product
    Then I should see products containing product name

  Scenario: Add product to cart
    When I add a product to cart
    And I continue shopping
    Then the cart should update

  Scenario: View product details
    When I view details for a product
    Then I should see product details

  Scenario: Add and remove product
    When I add a product to cart
    And I view my cart
    And I remove product from cart
    Then I should see empty cart message