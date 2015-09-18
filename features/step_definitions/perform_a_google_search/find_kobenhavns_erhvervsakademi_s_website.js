GoogleWorld = require('../../support/world');

var keaSearchSteps = function () {
  console.log('Find KEA steps loaded');
  this.World = GoogleWorld;

  this.Then("I should be displayed a link to KEA's official website.", function (callback){
    callback.pending();
  });
}

module.exports = keaSearchSteps;
