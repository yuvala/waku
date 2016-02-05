
 /*  Add an event listener for clicks on the #add button
    When the button is clicked, we get the users string from the local storage,
    deserialize it to get the array, push a new user with the name contained in
    the #user-name input field, and put the updated users array back to the local
    storage.
     */
define(['myMath/views/AddView', 'myMath/models/User'], function(AddView, User){

    function start(){
        AddView.render();
        bindEvents();
    }
    //create an event handler when the button is clicked to add the user to the local storage.
    function bindEvents(){
        document.getElementById('add').addEventListener('click', function(){
            var users = JSON.parse(localStorage.users);
            var userName = document.getElementById('user-name').value;
            users.push(new User(userName));
            localStorage.users = JSON.stringify(users);
            window.location.hash = '#list';
            //to see result, require the ListController to execute its start

            //require(['Controllers/ListController'], function(ListController){
            //    ListController.start();
            // });
        }, false);
    }

    return {
       // console.log("ListController: call AddView render and save new user...");
    start:start
    };
});