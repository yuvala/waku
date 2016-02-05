/**
 * Main application routes
 */

'use strict';
module.exports = function (app) {
    
    
 
    
    
    /* APPLICATION */
    app.get('/test1', function(req, res) {
    	// load index.html otherwise
    	console.log(__dirname);
    	res.sendFile(__dirname + '/public/app/myMath/myMath.html');
    }); 
    
    /* APPLICATION */
    app.get('*', function(req, res) {
    	// load index.html otherwise
    	console.log(__dirname);
    	res.sendFile(__dirname + '/public/index.html');
    }); 
    
    
    
    
};