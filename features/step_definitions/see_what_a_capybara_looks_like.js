module.exports = function () {
  console.log('Find KEA steps loaded');
  this.World = require('../support/world');
  this.When(/^I enter 'capybara' in the main search field$/, function (callback) {
    // Write code here that turns the phrase above into concrete actions
    callback.pending();
  });

  this.Then(/^I should be prompted some images of a Capybara$/, function (callback) {
    // Write code here that turns the phrase above into concrete actions
    callback.pending();
  });
}
