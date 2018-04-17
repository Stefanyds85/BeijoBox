const Product = require("../models").Product;

module.exports = {
    findAll: function(req,res){
        //this function will find all of the boxes from my database.
        Product
        .find(req.query)
        .sort({ id: -1 })
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },

    findById: function(req, res) {
        Product
        .findById(req.params.id)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    

    findOne: function(req,res){
        //this function will find one product by ID(id is created by mongo automatically).
        Product
        .findOne(req.params.name)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },

    findByCat: function(req,res){
        //this function will find all of the boxes by category from my database.
        Product
        .findByCat(req.params.category)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },

    findBySize: function(req,res){
        //this function will find all of the boxes by size from my database.
        Product
        .findbySize(req.params.size)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));

    },

    create: function(req, res) {
        const product = {
        id: req.body.id,
        name: req.body.name,
        };
        Product
        .create(product)
        .then(dbProduct => res.json(dbProduct))
        .catch(err => res.status(422).json(err));
    },
    update: function(req, res) {
        Product
        .findOneAndUpdate({ id: req.params.id }, req.body)
        .the(dbProduct => res.json(dbProduct))
        .catch(err => res.status(422).json(err));
    },
    remove: function(req, res) {
        Product
        .findById({ id: req.params.id })
        .the(dbProduct =Product.remove())
        .the(dbProduct => res.json(dbProduct))
        .catch(err => res.status(422).json(err));
    }
    };
    
