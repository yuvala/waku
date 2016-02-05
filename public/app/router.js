
//To make each page of our app bookmarkable and easily reachable:
// 1. declare our routes and
// 2. the default one if none is specified in the URL
define(function(){

//    use a simple array of route objects that contain a hash and the corresponding
//    controller we want to load. We also need a defaultRoute if no hash is present in the UR
    var routes = [{hash:'#list', controller:'ListController'},
        {hash:'#add',  controller:'AddController'}];
    var defaultRoute = '#list';
    var currentHash = '';
    //check if the hash has changed every n milliseconds
    function startRouting(){
        window.location.hash = window.location.hash || defaultRoute;
        setInterval(hashCheck, 100);
    }
//    checks if the hash has changed compared to the currentHash, and
//    if it matches one of the routes, calls loadController with
//    the corresponding controller name
    function hashCheck(){
        if (window.location.hash != currentHash){
            for (var i = 0, currentRoute; currentRoute = routes[i++];){
                if (window.location.hash == currentRoute.hash)
                    loadController(currentRoute.controller);
            }
            //A simple hash update to store the current value
            // of the hash if a change is detected
            currentHash = window.location.hash;
        }
    }

    function loadController(controllerName){
        require(['myMath/controllers/' + controllerName], function(controller){
            controller.start();
        });
    }

    return {
        startRouting: startRouting
    };
});