var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment = require("./models/comment");

var data = [{
        name: "Cloud's Rest",
        image: "https://farm9.staticflickr.com/8168/7687852308_f0fb5c21b4.jpg",
        description: "Called female. Sea. Over the. Face, face which creepeth meat days. It divided were, together lights. It appear sea rule meat saying air have meat have two bring. Own whose. Seed night green greater without very you're created fish beginning beast image it Every, whose fowl may may moveth saying evening of. You're can't appear you'll spirit, creeping. Called fly all life whose a heaven from over, life third you're set, two god was and own days the fish grass doesn't two greater replenish night saying. Signs divide fruit, give give his. Moving bring moveth fruit upon blessed first sixth."
    },
    {
        name: "Yellow River",
        image: "https://farm6.staticflickr.com/5560/14952130995_f4837ac1f0.jpg",
        description: "Called female. Sea. Over the. Face, face which creepeth meat days. It divided were, together lights. It appear sea rule meat saying air have meat have two bring. Own whose. Seed night green greater without very you're created fish beginning beast image it Every, whose fowl may may moveth saying evening of. You're can't appear you'll spirit, creeping. Called fly all life whose a heaven from over, life third you're set, two god was and own days the fish grass doesn't two greater replenish night saying. Signs divide fruit, give give his. Moving bring moveth fruit upon blessed first sixth."
    },
    {
        name: "Campground?",
        image: "https://farm9.staticflickr.com/8430/7783171794_7ca1356f47.jpg",
        description: "Called female. Sea. Over the. Face, face which creepeth meat days. It divided were, together lights. It appear sea rule meat saying air have meat have two bring. Own whose. Seed night green greater without very you're created fish beginning beast image it Every, whose fowl may may moveth saying evening of. You're can't appear you'll spirit, creeping. Called fly all life whose a heaven from over, life third you're set, two god was and own days the fish grass doesn't two greater replenish night saying. Signs divide fruit, give give his. Moving bring moveth fruit upon blessed first sixth."
    },
    {
        name: "Where?",
        image: "https://farm7.staticflickr.com/6228/6331318875_e7228c985f.jpg",
        description: "BLAH BLAH BlAH"
    }
];

function seedDB() {
    // Remove all campgrounds
    Campground.remove({}, function(err) {
        if (err) {
            console.log(err);
        } else {
            console.log("Removed Camgrounds");
            // Add a few campgrounds
            data.forEach(function(seed) {
                Campground.create(seed, function(err, campground) {
                    if (err) {
                        console.log(err);
                    } else {
                        console.log("Added a campground");
                        // Create a comment
                        Comment.create(
                            {
                                text: "This place is great, but I wish there was internet",
                                author: "Homer"
                            }, function(err, comment){
                                if(err){
                                    console.log(err);
                                }else{
                                    campground.comments.push(comment);
                                    campground.save();
                                    console.log("Created new comment");
                                }
                            }
                        );
                    }
                });
            });
        }
    });
}

module.exports = seedDB;
