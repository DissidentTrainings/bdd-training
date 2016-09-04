Feature: Documentation

Scenario: There is a README
  Given I use the bdd-template module
  When I access the Readme
  Then it should contain a reference to the MIT License
