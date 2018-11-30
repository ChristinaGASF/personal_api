var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CountriesSchema = new mongoose.Schema({
    name: String,
    capital: String,
    imageMap: String,
    imageFlag: String,
  });

 var Countries = mongoose.model('Countries', CountriesSchema);

module.exports = Countries;