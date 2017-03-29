// Our Controller. Spits out a full list of friends
var mongoose = require('mongoose');
var Friend = mongoose.model('Friendo');

console.log("friends.js Controller file has loaded.");

// Export an immediately invoked controller function that returns as soon as it's invoked
module.exports = (function(){
    return {
        // Make a call to the database
        index: function(req, res){
            // Find everything then run callback function of either err or results
            Friend.find({}, function(err, results){
                if(err){
                    res.json(err);  // respond with error or...
                } else {
                    res.json(results); // ...respond with results
                }
            })
        },
        create: function(req, res){
            var new_friend = new Friend(req.body);
            new_friend.save(function(err, results){
                if(err){
                    res.json(err);
                } else{
                    res.json(results);
                }
            })
        }
    }
})();

// function FriendsController(){
//   this.index = function(req,res){
//     //your code here
//     Friend.find({}, function(err, results){
//
//       res.json(results);
//     })
//   };
//   this.show = function(req,res){
//     //your code here
//     Friend.findOne({_id: req.params.id}, function(err, result){
//
//       res.json(result);
//     })
//   };
// }
//   this.create = function(req,res){
//     //your code here
//     Friend.create(req.body, function(err, result){
//       if(err){
//         console.log(err)
//       }else{
//         res.json(result)
//       }
//     })
//   };
//   this.update = function(req,res){
//     //your code here
//     Friend.findOne({_id: req.params.id}, function(err, friend){
//       if(err){
//         console.log(err);
//       }else{
//         friend.name = req.body.name;
//         friend.favoriteLanguage = req.body.favoriteLanguage;
//         friend.save(function(err, updatedFriend){
//           if (err){
//             console.log(err);
//           }else{
//             res.json(updatedFriend);
//           }
//         })
//       }
//     })
//   };
//   this.delete = function(req,res){
//     //your code here
//     Friend.remove({_id: req.params.id}, function(err){
//       if(err){
//         console.log(err);
//       }else{
//         res.json({message: "Friend deleted!"});
//       }
//     })
//   };
// }


// module.exports = new FriendsController(); // what does this export?
