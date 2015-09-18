Feature: Perform a Google Search
  As a user of the Internet
  I want to perform a Google search
  So that I can improve my understanding of the world

  Scenario: Find københavns erhversakademi's website
    Given I am on the homepage
    When I enter "KEA" in the main search field
    Then I should be displayed a link to KEA's official website.

  Scenario: See what a capybara looks like
    Given I am on the homepage
    When I enter "capybara" in the main search field
    Then I should be prompted some images of a Capybara
