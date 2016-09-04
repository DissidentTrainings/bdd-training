var assert = require('chai').assert;
var myReadmeExamplesStepDefinitionWrapper = function () {


var md;

  this.When(/^I access the Readme as markdown$/, function (callback) {

    var myPackage = this.getPackage();
    md = this.getMarkdownTree('./'+myPackage.readme);
    assert.equal(md[0], 'markdown');
    // Write code here that turns the phrase above into concrete actions
    callback(null);
  });

  this.Then(/^I want the see a "([^"]*)" in the list of examples$/, function (arg1, callback) {

    var bulletlist = md.filter(function(item) {
      return (item[0] == 'bulletlist');
    });

    bulletlist = bulletlist[0];
    var items = {};
    bulletlist.map(function(item) {
      return items[item[1]] = true;
    });
    assert.ok(items[arg1], arg1 + ' was no defined');
    // Write code here that turns the phrase above into concrete actions
    callback(null);
  });

};

module.exports = myReadmeExamplesStepDefinitionWrapper;
