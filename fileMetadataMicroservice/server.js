var express = require ('express'),
	multer = require ('multer'),
	upload = multer ({dest: 'uploads/'}),
	serveStatic = require ('serve-static'),
	app = express ();

app.use (serveStatic (__dirname + '/public/'));

app.post ('/api/fileanalyse', upload.single ('ufile'), function (req, res) {
	console.log (req.file);
	return res.status (200).json ({fileSize: req.file.size}).send ();
});

listener = app.listen (8080, function () {
	console.log ('Ready');
});