@UserLogin
Feature: Login Functionality

 @Positive
 Scenario: Successfull login
    Given I am on the site url
    When I enter the username "standard_user"
    And I enter the password "secret_sauce"
    And I click on login button
    Then I should be redirected to "Main Inventory" page

  @Negative
  Scenario: Failed login
  Given I am on the site url 
  When I enter the username "standard_user"
  And I enter the password "123"
  And I click on login button
  Then I should see an error message




