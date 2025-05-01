Feature: User Registration

  Scenario: New user registers
    Given I am a new user
    When I enter valid email and password and click on 'Register'
    Then my account should be created
    And I should receive a welcome email
