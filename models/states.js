var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var StatesSchema = new mongoose.Schema({
    name: String,
    nickname: String,
    imageFlag: String,
  });

 var States = mongoose.model('States', StatesSchema);

module.exports = States;
