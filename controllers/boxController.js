const Box = require("../models").Box;

module.exports = {
    findAll: function(){
        //this function will find all of the boxes from my database.
        Box.find().exec(function(data){
            console.log("show box info")
        })
    },

    findOne: function(){
        //this function will find one box by ID(id is created by mongo automatically).
        
        Box.findOne().exec(function(data){
            console.log("show box info")
        })

    },

    findByCat: function(){
        //this function will find all of the boxes by category from my database.
        
        Box.findByCat().exec(function(data){
            console.log("show box info")
        })
    },

    findBySize: function(){
        //this function will find all of the boxes by size from my database.

        Box.findbySize().exec(function(data){
            console.log("show box info")
        })
    }

};

// To Do
// I will still need to add Custom box functions for users creating custom boxes. 
// 1. Add Custom box.
// 2. Update Custom box.
// 3. Delete Custom box.