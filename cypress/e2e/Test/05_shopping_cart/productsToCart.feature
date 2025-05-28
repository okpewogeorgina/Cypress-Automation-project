Feature: update cart
  As a user
  I want to update products in my cart
  So that I can manage my purchases
   
  Scenario: Add and remove single product
    Given I am on the products page 
    When I add a product to cart
    And I view my cart
    Then I should see the product in my cart
    When I remove the product from cart
    Then I should see "Cart is empty!" message

  Scenario: Add multiple products and remove one
    Given I am on the products page  
    When I add the 4 products
    Then I should see 4 products
    When I remove 1 from cart
    Then I should see 3 remains in cart