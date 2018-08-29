const express = require("express"),
	app = express(),
	port = 3000,
	fs = require("fs"),
	mysql = require('mysql'),
	bodyParser = require("body-parser");

app.use(express.static(__dirname + "/public"));

app.use(bodyParser.json());

app.use(require('./config/routes'));


var user;
var password;
global.connection;
global.currentTable = 'kliyent';



app.listen(port, () => {
	console.log(`App listening on http://localhost:${port}`);
});