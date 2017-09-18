'use strict';

var constants = require('../helpers/constants.js');

// Private fields
var __private = {};



// Constructor
function frozen () {

  //To do
}

frozen.prototype.getPercentage = function (cb) {
  var percentage=10;
  console.log("*************** percentage***" + percentage);

	return percentage;
};


// Export
module.exports = frozen;
