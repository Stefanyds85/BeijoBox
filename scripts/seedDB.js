const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/reactproductlist",
  {
    useMongoClient: true
  }
);

const productSeed = [
  {
    name: "Beats headphones",
    price: "$59.99",
    description: "wireless headphones that can be used during activiteds like working out.",
  },
  {
    name: "Fashion Clutch",
    price: "$39.99",
    description: "Ladies fashion black leather clutch.  ",
  },
  {
    name: "Beats headphones",
    price: "$59.99",
    description: "wireless headphones that can be used during activiteds like working out.",
  },
  {
    name: "Champagne Flutes",
    price: "$65.00",
    description: "2 Crystal champagne flutes.",
  },
  {
    name: "Beats headphones",
    price: "$59.99",
    description: "wireless headphones that can be used during activiteds like working out.",
  },
  {
    name: "Beats headphones",
    price: "$59.99",
    description: "wireless headphones that can be used during activiteds like working out.",
  },

];

db.Product
  .remove({})
  .then(() => db.product.collection.insertMany(productSeed))
  .then(data => {
    console.log(data.insertedIds.length + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
