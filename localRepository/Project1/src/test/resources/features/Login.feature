#Sample Feature Definition Template
@tag
Feature: Login
  I want to use this template for my feature file

  @tag1
  Scenario: Successful Login
    Given User is on Home Page
    When User navigates to Login Page
    And Enters Valid credentials
    Then User navigates to landing page
    And welcome message displayed

 # @tag1
  #Scenario: Successful Logout
  #  Given User is on Landing Page
    #When User logs out
  #  Then Logout message displayed.
   # Examples: 
    #  | name  | value | status  |
    #  | name1 |     5 | success |
    #  | name2 |     7 | Fail    |
