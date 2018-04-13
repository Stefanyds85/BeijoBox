const Product = require("../models").Product;

module.exports = {
    findAll: function(req,res){
        //this function will find all of the boxes from my database.
        db.Product
        .find(req.query)
        .sort({ id: -1 })
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },

    findById: function(req, res) {
        db.Product
        .findById(req.params.id)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    

    findOne: function(req,res){
        //this function will find one product by ID(id is created by mongo automatically).
        db.Product
        .findOne(req.params.name)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },

    findByCat: function(req,res){
        //this function will find all of the boxes by category from my database.
        db.Product
        .findByCat(req.params.category)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },

    findBySize: function(req,res){
        //this function will find all of the boxes by size from my database.
        db.Product
        .findbySize(req.params.size)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));

    },

    create: function(req, res) {
        const product = {
        id: req.body.id,
        name: req.body.name,
        };
        db.Product
        .create(product)
        .then(dbProduct => res.json(dbProduct))
        .catch(err => res.status(422).json(err));
    },
    update: function(req, res) {
        db.Product
        .findOneAndUpdate({ id: req.params.id }, req.body)
        .the(dbProduct => res.json(dbProduct))
        .catch(err => res.status(422).json(err));
    },
    remove: function(req, res) {
        db.Product
        .findById({ id: req.params.id })
        .the(dbProduct =Product.remove())
        .the(dbProduct => res.json(dbProduct))
        .catch(err => res.status(422).json(err));
    }
    };
    
