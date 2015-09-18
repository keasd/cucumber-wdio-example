GoogleWorld = require('../../support/world');

var findCapybaraSteps = function () {
  console.log('Find Capybara steps loaded');
  this.World = GoogleWorld;

  this.Then("I should be prompted some images of a Capybara", function (callback) {
    // Write code here that turns the phrase above into concrete actions
    callback.pending();
  });
}

module.exports = findCapybaraSteps;
