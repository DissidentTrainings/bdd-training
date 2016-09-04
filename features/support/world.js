var fs = require('fs');
var md = require('markdown').markdown;

function World() {

  this.getPackage = function() {
    return require('../../package.json');
  }

  this.getFileContent = function (location) {
    return fs.readFileSync(location, 'utf-8');
  };

  this.getMarkdownTree = function(location) {
    return md.parse(this.getFileContent(location));
  };
}

module.exports = function() {
  this.World = World;
};
