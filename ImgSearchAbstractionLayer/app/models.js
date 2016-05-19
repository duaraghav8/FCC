var mongoose = require ('mongoose'),
	searchTermSchema = new mongoose.Schema ({
		term: {
			type: String,
			required: true
		},
		when: {
			type: Date,
			required: true
		}
	}),
	searchTermModel = mongoose.model ('ImgAbstractionLayer_SearchTerms', searchTermSchema, 'ImgAbstractionLayer_SearchTerms');