var express = require('express')
var app = express()
var port = 8080

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', function(req, res) {
	res.render('home.ejs');
});

app.get('/projects', function(req, res) {
	res.render('projects.ejs');
})

app.get('/contact-us', function(req, res) {
	res.render('contactus.ejs');
})

app.listen(port)
console.log(`Server now running on port ${port}`)