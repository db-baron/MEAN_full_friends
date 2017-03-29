var express = require('express');
var path = require('path');
var bp = require('body-parser');

// server.js doesn't diretly use the mongoose package so we don't need to require it
var app = express();


// Add a dir for static files you wrote to serve html and js files to the browser
app.use(express.static('client'));
// Add a dir for static files from the bower library
app.use(express.static('bower_components'));


// Add ability to parse JSON sent from angular AJAX,
// and add it as .body property on the request object (req)
app.use(bp.json());

require('./server/config/mongoose.js');  // require a mongoose.js file from “./server/config”

// Since routes.js exports a function, require("./server/config/routes.js") IS A FUNCTION!
// Below, we require and invoke the function in the same line and passing it app as a a param.
require('./server/config/routes.js')(app);

app.listen(8050, function(){
    console.log("server.js listening to Full Friends on port 8050");
});
