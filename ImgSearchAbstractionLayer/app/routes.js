'use strict';

var express = require ('express'),
	controllers = require ('./controllers'),
	apiRouter = express.Router ();

module.exports = function (app) {
	apiRouter
		.use (controllers.apiRouterCtrl)
		.get ('/imagesearch/:searchTerms', controllers.imageSearch)
		.get ('/latest/imagesearch', controllers.recentSearches);

	app
		.use ('/api', apiRouter)
		.all ('*', controllers.notFound);
};