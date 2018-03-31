const Box = require("../models").Product;

module.exports = {
    findAll: function(){
        //this function will find all of the products from my database.
        Product.find().exec(function(data){
            console.log("show all products info")
        })
    },

    findOne: function(){
        //this function will find one product by ID(id is created by mongo automatically).
        
        product.findOne().exec(function(data){
            console.log("show one product info")
        })

    },

    findByCat: function(){
        //this function will find all of the products by category from my database.
        
        Product.findByCat().exec(function(data){
            console.log("show products by category")
        })
    },

};

// To Do
// I will still need to add Custom box functions for users creating custom boxes. 
// 1. Add Custom box.
// 2. Update Custom box.
// 3. Delete Custom box.