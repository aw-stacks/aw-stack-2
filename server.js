/***
 * Build-in | Third party module dependencies.
 */
var express = require('express');
var	http = require('http');
var path = require('path');
var bodyParser = require('body-parser');

var app = express();

var env = process.env.NODE_ENV || 'development';
var	staticEnvString = 'development';

/**
 * Application configurations for development environment.
 * NODE_ENV=development node server.js
 ***/
if (staticEnvString.toLowerCase() === env.toLowerCase()) {
	app.set('port', process.env.PORT || 8000);
	app.use(bodyParser.json());
	app.use(bodyParser.urlencoded({
		extended: true
	}));
	app.use(express.static(path.join(__dirname, 'dist')));
}

/**
 * Application configurations for production environment.
 * NODE_ENV=production node server.js
 ***/
staticEnvString = "production";
if (staticEnvString.toLowerCase() === env.toLowerCase()) {
	app.set('port', process.env.PORT || 8000);
	app.use(bodyParser.json());
	app.use(bodyParser.urlencoded({
		extended: true
	}));
	app.use(express.static(path.join(__dirname, 'dist')));
}

http.createServer(app).listen(app.get('port'), function() {
	console.log("\n\n\tNode (Express) server listening on port " + app.get('port'));
});
