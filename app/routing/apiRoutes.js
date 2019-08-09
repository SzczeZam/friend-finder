var list = require('./../data/friends.js')


module.exports = function(app){

                app.post("/api/friends", function(req, res){
                    var newFriend = req.body
                    
                    console.log(newFriend)
                })

                app.get("/api/friends", function(req, res){
                return res.JSON(list)
                })
            }
    

