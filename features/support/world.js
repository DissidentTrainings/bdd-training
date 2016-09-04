function World() {
  this.visit = function (url, callback) {
    console.log('url');
  };
}

module.exports = function() {
  this.World = World;
};
