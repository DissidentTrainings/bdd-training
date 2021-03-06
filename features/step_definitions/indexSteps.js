var assert = require('chai').assert;
var myIndexStepDefinitionWrapper = function () {
  var myPackage = null;
  var myModule = null;

  this.Given(/^I use the bdd\-template module$/, function (callback) {
    // Write code here that turns the phrase above into concrete actions
    myPackage = require('../../package.json');
    assert.isObject(myPackage);
    callback(null);
  });

  this.When(/^I access the module via the index$/, function (callback) {
    // Write code here that turns the phrase above into concrete actions
    myModule = require('../../.');
    assert.ok(myModule);
    callback(null);
  });

  this.Then(/^I should get a "([^"]*)"$/, function (arg1, callback) {
    // Write code here that turns the phrase above into concrete actions
    assert.equal(typeof myModule, arg1);
    callback(null);
  });

  this.Then(/^the version equals to the package version$/, function (callback) {
    assert.equal(myModule.version, myPackage.version);
    callback(null);
  });

  this.Then(/^it should contain a reference to the MIT License$/, function (callback) {
    // Write code here that turns the phrase above into concrete actions
    var fileContent = this.getFileContent('./'+ myPackage.readme);
    assert.match(fileContent, /MIT/);
    callback(null);
  });

  this.When(/^I access the Readme$/, function (callback) {
    // Write code here that turns the phrase above into concrete actions
    var readMeFile = myPackage.readme;
    assert.ok(myPackage.readme);
    callback(null);
  });


}
module.exports = myIndexStepDefinitionWrapper;
