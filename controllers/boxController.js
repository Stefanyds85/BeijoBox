const Box = require("../models").Box;

module.exports = {
    findAll: function(req,res){
        //this function will find all of the boxes from my database.
        db.Box
        .find(req.query)
        .sort({ id: -1 })
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },

    findById: function(req, res) {
        db.Box
        .findById(req.params.id)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    

    findOne: function(req,res){
        //this function will find one box by ID(id is created by mongo automatically).
        db.Box
        .findOne(req.params.name)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },

    findByCat: function(req,res){
        //this function will find all of the boxes by category from my database.
        db.Box
        .findByCat(req.params.category)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },

    findBySize: function(req,res){
        //this function will find all of the boxes by size from my database.
        db.Box
        .findbySize(req.params.size)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));

    },

    create: function(req, res) {
        const box = {
        id: req.body.id,
        name: req.body.name,
        };
        db.Box
        .create(box)
        .then(dbBox => res.json(dbBox))
        .catch(err => res.status(422).json(err));
    },
    update: function(req, res) {
        db.Box
        .findOneAndUpdate({ id: req.params.id }, req.body)
        .then(dbBox => res.json(dbBox))
        .catch(err => res.status(422).json(err));
    },
    remove: function(req, res) {
        db.Box
        .findById({ id: req.params.id })
        .then(dbBox => dbBox.remove())
        .then(dbBox => res.json(dbBox))
        .catch(err => res.status(422).json(err));
    }
    };
    

