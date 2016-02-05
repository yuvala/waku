 
requirejs.config( {
    "baseUrl": "public",
    "paths": {
   /*   "app": "app",*/
      "jquery": "/lib/jquery.min",
      "lodash": "/lib/lodash/lodash.min",
  /*    "socketio": "lib/socket.io-1.2.0",
      "firebase": "//cdn.firebase.com/js/client/2.2.1/firebase",
      "testAjax": "app/testAjax",*/
      "myMath": "/app/myMath/myMath"
    }
});

// // Load the main app module to start the app
requirejs(["myMath"]);