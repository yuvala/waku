//Created Git repo in ...

// In RequireJS, all code is wrapped in require() or define() functions.
/**
 * REQUIRE Function example
 *
 * The first parameter of these functions specifies dependencies. In the
 * following example, main requires alerter. Note that the file extension has been omitted.
 * This is because RequireJS only considers .js files.
 *
 * The second parameter to require() is an anonymous function which takes an object
 * that is used to call the functions inside the dependent file. In this scenario,
 * we have just one dependency 'alerter'. Multiple dependencies can be loaded.
 */
require(['alerter'], function(alerter){
    alerter("You are alerted");
    console.log("alerter: alerted with no message");
});
/**
 * DEFINE Function example --no dependencies
 *
 * This function is simply a wrapper for the js alert function
 * It defines a function that is going to return a function.
 * When you pass in a message,
 * it will alert with that message
 */


define(function(){
    return function (message){
        alert(message);
        console.log("alerter: alerted with message");
    }
});


/**
 *
 *      loads in order:  require.js, main.js and alerter.js
 *      alerts when loaded first time or when user refreshes page
 *
 *      loads in order:  require.js, main.js, app.js and alerter.js
 */