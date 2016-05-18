'use strict';

/*
  Ensure we're in the project directory, so relative paths work as expected
  no matter where we actually fire the app from.
*/
process.chdir(__dirname);
process.env.NODE_ENV = 'development';

var app = require ('./config/express') (),
  listener = null;

listener = app.listen (process.env.PORT || 8080, function () {
  console.log ('Server listening on port: ', listener.address ().port);
});