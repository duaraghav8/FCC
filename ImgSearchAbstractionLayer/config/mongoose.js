'use strict';

var mongoose = require ('mongoose'),
    config = require ('./config');

module.exports = function () {
  mongoose.connect (config.dbURL);
  mongoose.connection.once ('open', function () {
  	//first check if we're in dev environment. If yes, print verbose information
    process.env.NODE_ENV === 'development' && console.log ('Connection with MongoDB established');
  });

  require ('../app/models');
};