//create User using a name or default
define(function(){

    function User(name){
        this.name = name || 'Default name';
        console.log("User: init name...");
    }

    return User;
});