Feature: The module can be used by npm

Scenario: Finds the api at "../."
  Given I use the bdd-template module
  When I access the module via the index
  Then I should get a "object"
  And the version equals to the package version
