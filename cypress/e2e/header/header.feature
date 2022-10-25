Feature: Header Fragment

  I want to see the header fragment

  @focus
  Scenario: Requesting the header fragment from lambda function
    Given I make a request to the lambda
    Then I should see the header component

