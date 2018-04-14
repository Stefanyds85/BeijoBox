const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Box = new Schema({
    name: String,
    category: String,
    price: Number,
    rating: Number,
    discription: String,
    products: [String]

});

module.exports = mongoose.model('Box', Box);