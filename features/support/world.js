var fs = require('fs');

function World() {
  this.getFileContent = function (location) {
    return fs.readFileSync(location, 'utf-8');
  };
}

module.exports = function() {
  this.World = World;
};
