const boxController = require("../controllers/boxController.js");
const mongoose = require("mongoose");

mongoose.Promise = global.Promise;
// Connect to the Mongo DB
//add mongo heroku uri
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/beijoboxapp-development"
);



boxController.findAll();