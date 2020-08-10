// This is the entry point for the web server

var express = require('express');
var app = express();
var port = 8080;

app.set('view engine', 'ejs');

app.get('/', function(req, res) {
	res.send("Hello World!");
});

app.listen(port);
console.log(`Server now running on port ${port}`);
