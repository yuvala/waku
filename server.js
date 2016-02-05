'use strict';
var express = require('express');
var path = require('path'); 

var morgan = require('morgan'); 		// log requests to the console (express4)
var bodyParser = require('body-parser'); 	// pull information from HTML POST (express4)
var methodOverride = require('method-override'); // simulate DELETE and PUT (express4)

var app = express();

var http = require('http').Server(app);
// load socket server module
var io = require('socket.io')(http);
// set default server port
var port = process.env.PORT || 9090;

//var Firebase = require("firebase");
app.use(express.static(path.join(__dirname, 'public')));				// set static path
app.use(morgan('dev')); 										// log every request to the console
app.use(bodyParser.urlencoded({'extended':'true'})); 			// parse application/x-www-form-urlencoded
app.use(bodyParser.json()); 									// parse application/json
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json
app.use(methodOverride());

//app.use(express.static(path.join(__dirname, 'public'))); //  "public" off of current is root

require('./routes.js')(app);

// handle chat messages
io.on('connection', function(socket){
    socket.on('chat message', function(msg){
        console.log('message: ' + msg);
        io.emit('chat message', msg);
    });
});
console.log("Hello, World waku!2");

// start the server
http.listen(port, function(){
    console.log('Express server listening on %d', port);
});