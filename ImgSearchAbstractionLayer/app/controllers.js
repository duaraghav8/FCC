var mongoose = require ('mongoose'),
	statusCodes = require ('StatusCodes'),
	searchTermModel = mongoose.model ('ImgAbstractionLayer_SearchTerms');

module.exports = {
	imageSearch: function (req, res) {

	},
	recentSearches: function (req, res) {
		searchTermModel.find ({}).limit (15).exec (function (err, searchTerms) {
			console.log (searchTerms);
			res.json (searchTerms);
		});
	},
	notFound: function (req, res) {
		res.sendStatus (statusCodes.NOT_FOUND);
	}
};