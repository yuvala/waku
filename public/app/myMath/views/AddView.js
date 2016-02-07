// Display a simple text input and a button
// 1.inject in the #app element
// 2. display
define(function(){
    function render(parameters){
        var appDiv = document.getElementById('app');
        appDiv.innerHTML = '<input id="user-name"/><button id="add">Add this user</button>';
    }
    return {
        render: render
    };
});