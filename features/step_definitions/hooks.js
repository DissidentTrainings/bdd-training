var myHooks = function () {
  this.Before({tags: ["@legal"]}, function (scenario) {
    console.log('maybe call lawyer');
  });

  this.After({tags: ["@legal"]}, function (scenario) {
    if (scenario.isFailed()) {
      console.log('call a lawyer');
    }
  });

};
module.exports = myHooks;
