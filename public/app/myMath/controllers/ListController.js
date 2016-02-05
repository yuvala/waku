// Run main behaviour of list controller
define(['myMath/views/ListView'], function(ListView){
console.log(ListView?true:false);
    function start(){
        var users = JSON.parse(localStorage.users);
        ListView.render({users:users});
    }
    return {
       // console.log("ListController: call ListView render with users...");
        start:start
    };
});