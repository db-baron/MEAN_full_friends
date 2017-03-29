// ngRoute module is injected into your app as the second parameter
// in the function angular.module(). Any additional libraries, like angular cookies,
// are injected in the same way but separated by commas ['ngRoute', 'ngCookies']
var app = angular.module('app', ['ngRoute']);

app.config(function ($routeProvider){
    // Routes to load your new and edit pages with new and edit controllers attached to them!
    $routeProvider
    // Load the main.html partial when a user enters the url 'localhost:8010/',
    .when('/', {templateUrl: '../partials/main.html'})
    .otherwise({redirectTo: '/'})
});


app.factory('friendsFactory', function($http){
    var factory = {};

    factory.showFriends = function(callback){
        // all_friends is thes server response to the GET request from the factory
        $http.get('/friends').then(function(all_friends){
            // run the callback the controller will pass us
            callback(all_friends.data);
        })
    }
    factory.createFriend = function(newFriend, callback){
        // This will print in the browser's console
        console.log(newFriend);
        // CREATE Step 2: A request was made to your server to POST /friends/new
        // from your factory with the data stored in newFriend

        // Going to post /friend/new and passing it the newFriend data
        // .then is a Promise that waits on the http response before running it's function
        $http.post('/friend/new', newFriend).then(function(created_friend){
            console.log(created_friend);
            console.log("Got back from the server")
            callback(created_friend);
        })
    }
    return factory;
});

// pass friendsController an array that includes a callback function with the variables available to us.
app.controller('friendsController', ['friendsFactory', '$scope', function(friendsFactory, $scope){

    $scope.friends = [];
    // Directly call the friendsFactory.
    friendsFactory.showFriends(function(data){
        console.log(data);
        $scope.friends = data;
    })

    // Careful, both factory and controller have a method named 'createFriend'
    $scope.createFriend = function(){
        var friend = $scope.newFriend;  // Using friend in createFriend is the very FIRST thing that happens
        friendsFactory.createFriend(friend, function(data){  // function(data) is the very LASR thing that happens
            // This is the RESTful way of doing it because the create route returns
            // only the object we just created, NOT all the objects of that particular collection.
            friendsFactory.showFriends(function(data){
                $scope.friends = data;
            })
        });
    }
}]);
