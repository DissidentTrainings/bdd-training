Feature: Descibes some cucumberjs use cases
  Scenario Outline:
    Given I use the bdd-template module
    When I access the Readme as markdown
    Then I want the see a "<feature>" in the list of examples
  Examples:
    | feature  |
    | example outlines |
    | hooks |
    | tags |
    | asserts |
