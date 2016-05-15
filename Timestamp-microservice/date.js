/*
	https://www.freecodecamp.com/challenges/timestamp-microservice
*/

'use strict';

process.chdir (__dirname);

var express = require ('express'),
	app = express ();

app
	.set ('view engine', 'ejs')
	.set ('views', __dirname);

app
	.get ('/', function (req, res) {
		//respond with a rendered HTML / JSON, whatever...

		if (req.accepts ('html')) {
			return res.render ('index', {
				title: 'Free Code Camp Backend API Challenge #1'
			});
		}
		
		return res.send ('Welcome');
	})
	.get ('/:clientString', function (req, res) {
		var conversion = new Date ( isNaN (req.params.clientString) ? req.params.clientString : Number (req.params.clientString) ),
			responseObject = {
				unix: null,
				natural: null
			};

		if (!isNaN (conversion)) {
			responseObject.unix = conversion.valueOf ();
			responseObject.natural = conversion;
		}

		return res.json (responseObject);
	});

app.listen (8000, function () {
	console.log ('listening');
});