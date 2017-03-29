var mongoose = require('mongoose');
var Schema = mongoose.Schema;

console.log("Friend.js schema file has loaded.");

// Create schema from the var 'Schema' (i.e. mongoose.Schema)
var FriendSchema = new mongoose.Schema({
    first_name: {type:String},  // note - String class comes from our object constructor
    last_name: {type:String}
});

// Create the model "Friend"
var Friendo = mongoose.model('Friendo', FriendSchema);
