'use strict';

var express = require ('express'),
	bodyParser = require ('body-parser'),
	config = require ('./config'),
	dbObject = require ('./mongoose') (),
	app = express ();

module.exports = function () {
	app
		.use (bodyParser.urlencoded ({extended: true}))
		.use (bodyParser.json ())

	if (process.env.NODE_ENV === 'development') {
		console.log ('We\'re in Development Environment');
	}
	else if (process.env.NODE_ENV === 'production') {
		console.log ('We\'re in Production Environment');
	}

	return (app);
};