var mongoose = require('mongoose');
var fs = require('fs'); // require the fs module for loading model files
var path = require('path');

mongoose.connect('mongodb://localhost/my_full_friends'); // // connect to mongoose!
console.log("mongoose.js databse file has loaded.");

// Create a variable that points to the path where all of the models live
var models_path = path.join(__dirname + './../models');

// Get all model js files located in the models dir.
// fs.readdirSync(models_path).forEach says: Go to the models dir and iterate through
// each file there while running a callback function, requiring/running all files ending in .js
fs.readdirSync(models_path).forEach(function(file){
    if(file.indexOf('.js') >= 0){
        require(models_path + '/' + file); // Require also runs the model file, thus registering the schema.
    }
}) // Note - this forEach loop runs only once when the server starts
