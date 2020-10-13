var express = require('express');
var session = require('express-session')
var bodyParser = require('body-parser')
const { Mongoose } = require('mongoose');
var app = express()
var port = 8080

const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://osherrah:augmentedconnection@cluster0.q9zpi.mongodb.net/staff?retryWrites=true&w=majority')
const userSchema = new mongoose.Schema({
	firstName: String,
	lastName: String,
	email: String,
	password: String
});
const User = mongoose.model('User', userSchema);

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(session({
	secret: 'secret',
	resave: true,
	saveUninitialized: true
}));
app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());
app.use(express.static('public'));

app.get('/', function(req, res) {
	res.render('home.ejs', { session: req.session})
});

app.get('/popular-projects', function(req, res) {
	res.render('popular-projects.ejs', { session: req.session});
})

app.get('/projects', function(req, res) {
	res.render('projects.ejs', { session: req.session});
})

app.get('/about-us', function(req, res) {
	res.render('about-us.ejs', { session: req.session});
})

app.get('/contact-us', function(req, res) {
	res.render('contactus.ejs', { session: req.session});
})

app.get('/news', function(req, res) {
	res.render('news.ejs', { session: req.session});
})

app.get('/login', function(req, res) {
	res.render('login.ejs', { session: req.session, incorrect: false})
})

app.post('/login', function(req, res) {
	var postEmail = req.body.email;
	var postPassword = req.body.password;
	if (postEmail && postPassword) {
		User.findOne({ email: postEmail}, function (err, staff) {
			if (err) {
				return console.log(err)
			}
			if (staff) {
				if (staff.password == postPassword) {
					req.session.loggedin = true;
					req.session.username = staff.firstName;
					res.redirect('/')
				} else {
					res.render('login.ejs', {session: req.session, incorrect: true})
				}
			} else {
				res.send('Query returned Null')
				res.end()
			}
		})
	} else {
		res.render('login.ejs', {session: req.session, incorrect: true})
	}
})

app.listen(port)
console.log(`Server now running on port ${port}`)