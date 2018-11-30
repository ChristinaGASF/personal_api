const mongoose = require('mongoose');
mongoose.connect(processprocess.env.MONGODB_URI || "mongod://localhost/personal_api", {userNewUrlParser: true} );


var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/personal_api");

module.exports.States = require("./states.js");
module.exports.Countries = require("./contries.js");

