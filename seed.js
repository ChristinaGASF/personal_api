// This file allows us to seed our application with data
// simply run: `node seed.js` from the root of this project folder.

var db = require('./models');

var States_list = [
{
  name: "Washington",
  nickname: "Evergreen State",
  imageFlag: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Flag_of_Washington.svg/250px-Flag_of_Washington.svg.png",
},
{
  name: "California",
  nickname: "Golden State",
  imageFlag: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Flag_of_California.svg/250px-Flag_of_California.svg.png",
},
{
  name: "Nevada",
  nickname: "Silver State",
  imageFlag:"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Flag_of_Nevada.svg/250px-Flag_of_Nevada.svg.png",
},
{
  name: "Idaho",
  nickname: "Gem State",
  imageFlag:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Flag_of_Idaho.svg/250px-Flag_of_Idaho.svg.png",
},
{
  name: "Montana",
  nickname: "Treasure State",
  imageFlag:"https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Flag_of_Montana.svg/250px-Flag_of_Montana.svg.png",
},
{
  name: "Wyoming",
  nickname: "Equality State",
  imageFlag: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Flag_of_Wyoming.svg/250px-Flag_of_Wyoming.svg.png",
},
{
  name: "Utah",
  nickname: "Beehive State",
  imageFlag: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Flag_of_Utah.svg/250px-Flag_of_Utah.svg.png",
},
{
  name: "Colorado",
  nickname: "Centennial State",
  imageFlag:"https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Flag_of_Colorado_designed_by_Andrew_Carlisle_Carson.svg/250px-Flag_of_Colorado_designed_by_Andrew_Carlisle_Carson.svg.png",
},
{
  name: "Arizona",
  nickname: "Grand Canyon State",
  imageFlag: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Flag_of_Arizona.svg/250px-Flag_of_Arizona.svg.png",
},
{
  name: "New Mexico",
  nickname: "Land of Enchantment",
  imageFlag: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Flag_of_New_Mexico.svg/125px-Flag_of_New_Mexico.svg.png",
},
{
  name: "Texas",
  nickname: "Lone Star State",
  imageFlag: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Flag_of_Texas.svg/250px-Flag_of_Texas.svg.png",
},
{
  name: "Louisiana",
  nickname: "Pelican State",
  imageFlag: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Flag_of_Louisiana.svg/250px-Flag_of_Louisiana.svg.png",
},
{
  name: "Mississippi",
  nickname: "Magnolia State",
  imageFlag: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Flag_of_Mississippi.svg/125px-Flag_of_Mississippi.svg.png",
},
{
  name: "Alabama",
  nickname: "Yellowhammer State",
  imageFlag: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Flag_of_Alabama.svg/250px-Flag_of_Alabama.svg.png",
},
{
  name: "Georgia",
  nickname: "Peach State",
  imageFlag: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Flag_of_Georgia_%28U.S._state%29.svg/125px-Flag_of_Georgia_%28U.S._state%29.svg.png",
},
{
  name: "Florida",
  nickname: "Sunshine State",
  imageFlag: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Flag_of_Florida.svg/125px-Flag_of_Florida.svg.png",
},
{
  name: "Arkansas",
  nickname: "Natural State",
  imageFlag: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Flag_of_Arkansas.svg/250px-Flag_of_Arkansas.svg.png",
},
{
  name: "Tennessee",
  nickname: "Volunteer State",
  imageFlag: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Flag_of_Tennessee.svg/125px-Flag_of_Tennessee.svg.png",
},
{
  name: "Missouri",
  nickname: "Show Me State",
  imageFlag: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Flag_of_Missouri.svg/125px-Flag_of_Missouri.svg.png",
},
{
  name: "Illinois",
  nickname: "Land of Lincoln",
  imageFlag: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Flag_of_Illinois.svg/125px-Flag_of_Illinois.svg.png",
},
{
  name: "New Jersey",
  nickname: "Garden State",
  imageFlag: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Flag_of_New_Jersey.svg/125px-Flag_of_New_Jersey.svg.png",
},
{
  name: "New York",
  nickname: "Empire State",
  imageFlag: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Flag_of_New_York.svg/250px-Flag_of_New_York.svg.png",
},
]
//var Countries_list = [
//{ name: String,
//  capital: String,
//
//  imageFlag: String,
//},
//]
