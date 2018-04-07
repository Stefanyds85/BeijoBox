const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Product = new Schema({
    name: String,
    description: String,
    price: Number,
    id: Number
	
});

module.exports = mongoose.model('Product', Product);