var GoogleWorld = require('../../support/world.js');

var genericSteps = function () {
    console.log('Generic Steps Loaded');
    this.World = GoogleWorld;

    this.Given('I am on the homepage', function (callback) {
      this.init().url("http://google.com", callback);
    });

    this.When('I enter "$string" in the main search field', function(string, callback){
      var inputID = "#lst-ib";
      this.waitFor(inputID, 3000, function (err) {
        if (!err) {
          this.setValue(inputID, string);
          return;
        }

        callback.fail(new Error('Element ' + inputID + ' was not found after 3s'));
      });
    });
};

module.exports = genericSteps;
