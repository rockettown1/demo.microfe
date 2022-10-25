Feature: Footer Fragment

  I want to see the Footer fragment

  @focus
  Scenario: Requesting the Footer fragment from lambda function
    Given I make a request to the lambda
    Then I should see the Footer component

