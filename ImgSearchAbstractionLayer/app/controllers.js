var mongoose = require ('mongoose'),
	statusCodes = require ('./statusCodes'),
	searchTermModel = mongoose.model ('ImgAbstractionLayer_SearchTerms');

module.exports = {
	apiRouterCtrl: function (req, res, next) {
		process.env.NODE_ENV && console.log ('New API Request on', new Date ());
		return next ();
	},

	imageSearch: function (req, res) {
		var searchTerm = req.params.searchTerms,
			offset = req.query.offset ? req.query.offset : 1;

		//fetch data from Flickr API and Pipe them via response object

		res.send ('ack');	//temporary
	},

	recentSearches: function (req, res) {
		searchTermModel
			.find ({}, {_id: 0})
			.limit (15)
			.exec (function (err, searchTerms) {
				return err ? res.sendStatus (statusCodes.NOT_FOUND) : res.json (searchTerms);
			});
	},

	notFound: function (req, res) {
		return res.sendStatus (statusCodes.NOT_FOUND);
	}
};