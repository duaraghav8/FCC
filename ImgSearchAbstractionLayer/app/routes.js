var express = require ('express'),
	controllers = require ('./controllers'),
	apiRouter = express.Router ();

module.exports = function (app) {
	apiRouter
		.get ('/imagesearch/:searchTerms', controllers.imageSearch)
		.get ('/latest/imagesearch', controllers.recentSearches);

	app
		.get ('/api', router)
		.all ('*', controllers.notFound);
};