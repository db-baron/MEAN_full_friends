// Bring friends controller into routes
var friends = require('../controllers/friends.js');

console.log("routes.js file has loaded.");


// Add route listeners to friends.js for 5 of the 7 RESTful routes (excluding new and edit)
module.exports = function(app){
    app.get('/friends', function(req,res){
        friends.index(req,res);  // call the index method we loaded from friends.js
    })

    app.post('/friend/new', function(req, res) {   // Show
        friends.create(req, res);
    });



}
