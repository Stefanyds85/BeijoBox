const User = require("../models").User;

module.exports = {
    findAll: function(req,res){
        //this function will find all of the boxes from my database.
        db.User
        .find(req.query)
        .sort({ id: -1 })
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },

    findById: function(req, res) {
        db.User
        .findById(req.params.id)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    

    findOne: function(req,res){
        //this function will find one user by ID(id is created by mongo automatically).
        db.User
        .findOne(req.params.name)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },

    create: function(req, res) {
        const user = {
        id: req.body.id,
        name: req.body.name,
        };
        db.User
        .create(user)
        .then(dbUser => res.json(dbUser))
        .catch(err => res.status(422).json(err));
    },
    update: function(req, res) {
        db.User
        .findOneAndUpdate({ id: req.params.id }, req.body)
        .the(dbUser => res.json(dbUser))
        .catch(err => res.status(422).json(err));
    },
    remove: function(req, res) {
        db.User
        .findById({ id: req.params.id })
        .the(dbUser =User.remove())
        .the(dbUser => res.json(dbUser))
        .catch(err => res.status(422).json(err));
    }
    };
    
