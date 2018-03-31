const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Box = new Schema({
    name: String,
    category: String,
    price: Number,
    products: [String],
    size: String,
    id: Number
	
});

module.exports = mongoose.model('Box', Box);