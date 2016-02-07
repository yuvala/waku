/*
 * Warning: Just for demo purpose
 * Using plain HTML in a JavaScript file like this
 * is not an ideal solution, because it’s very hard to maintain.
 * You should instead consider templating.
 * */

// Display the users from the local storage by passing it to render function.
// 1.inject in the #app element a list
// 2. display
define(function(){
    function render(parameters){
        var appDiv = document.getElementById('app');
        var users = parameters.users;
        var html = '<ul>';
        for (var i = 0, len = users.length; i < len; i++){
            //concatenate each user in an HTML string
            html += '<li>' + users[i].name + '</li>';
        }
        html += '</ul>';
        //inject in the #app element.
        appDiv.innerHTML = html;
        console.log("ListView: show the users...");
    }
    return {
        render: render
    };
});