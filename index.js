// This is the entry point for the web server

var express = require('express');
var app = express();
var port = 8080;

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', function(req, res) {
	res.render('index.ejs');
});

app.get('/projects', function(req, res) {
	res.render('projects.ejs');
});

app.get('/case-studies', function(req, res) {
	res.render('case-studies.ejs');
});

app.get('/research', function(req, res) {
	res.render('research.ejs');
});

app.get('/case-studies-detail', function(req, res) {
	res.render('case-studies-detail.ejs');
});
app.get('/contact-us', function(req, res) {
	res.render('contactus.ejs');
});

app.listen(port);
console.log(`Server now running on port ${port}`);
