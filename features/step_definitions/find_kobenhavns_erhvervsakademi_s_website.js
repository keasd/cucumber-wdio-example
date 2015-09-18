module.exports = function () {
    console.log('Find KEA steps loaded');
    this.World = require('../support/world');

    this.Given(/^I am on the homepage$/, function(callback){
      this.init().url("http://google.com", callback);
    })

    this.When(/^I search for 'KEA'$/, function (callback) {
      callback.pending();
    })

    this.Then(/^I should be displayed a link to KEA's official website.$/, function (callback){
      callback.pending();
    })
}
