// require express and other modules
const express = require('express');
const app = express();

// parse incoming urlencoded form data
// and populate the req.body object
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

// allow cross origin requests (optional)
// https://developer.mozilla.org/en-US/docs/Web/HTTP/Access_control_CORS
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

/************
 * DATABASE *
 ************/

const db = require('./models');

/**********
 * ROUTES *
 **********/

// Serve static files from the `/public` directory:
// i.e. `/images`, `/scripts`, `/styles`
app.use(express.static('public'));

/* HTML Endpoints */

app.get('/', function homepage(req, res) {
    res.sendFile(__dirname + '/views/index.html');
});

/* JSON API Endpoints */

app.get('/api/profile', (req, res) => {
    res.json({
      name: "Christina Hughes",
      message: "Welcome to my Personal API! Built for WDI at GA in SF.",
      githubUsername: "ChristinaGASF", 
      githubLink: "https://github.com/ChristinaGASF/",
      personalSiteLink: "https://github.com/ChristinaGASF/personal_api",
      githubProfileImage:"https://avatars0.githubusercontent.com/u/44411722?s=400&v=4",
      
      currentCity: "San Francisco, California",
      homeTown: "Austin, TX",
      frontendLanguages: [
        {name: "Hypertext Markup Language" , abbreviation: "html", typeOfFormat:"document file, markup lnguage"},
        {name: "Cascading Style Sheets" , abbreviation: "css", typeOfFormat:"style sheet language"},
        {name: "JavaScript," , abbreviation: "js", typeOfFormat:"scripting language"}
      ]
    })
  });

//{method: "GET", path: "/api", description: "Describes all available endpoints"},
//{method: "GET", path: "/api/profile", description: "Data about me"}
//{method: "GET", path: "/api/states", description: "View states"}

app.get('/api', (req, res) => {
    res.json({
      endpoints: [
        {method: "GET", path: "/api", description: "All available Endpoints"},
        {method: "GET", path: "/api/profile", description: "About in me in the context of this assignment."},
        {method: "GET", path: "/api/states", description: "View all states I've visted so far."}, 
      ]
    })
  });

// get all statess request
app.get('/api/states', (req, res) => {
    // find all statess in db
    db.states.find( {}, (err, allstates) => {
      // if err, send err
      if(err){console.log(err)};
      // else, respond with a json object of all the states
      // console.log(allstates);
      res.json({data: allstates});
      });
    });

// create a new states
    app.post('/api/states' , (req,res) => {
      console.log(req.body);
      let newstates = req.body;
        db.states.create( newstates, (err,savedstates) => {
        if(err) {return console.log(err)};
        res.json(savedstates);
      });
    });

// delete a states (won't delte state bc once I've visted I won't unvist it)
//    app.delete('/api/states', (req,res) => {
//      //get the states id from the url params
//      let states = req.params."";
//  
// fin the state and delete it
//      db.states.deleteOne(
//        {states},
//        (err, deleted) => {
//          if(err) {return console.log(err)};
//          res.json(deleted);
//        });
//    });

/**********
 * SERVER *
 **********/

// listen on the port that Heroku prescribes (process.env.PORT) OR port 3000
app.listen(process.env.PORT || 3000, () => {
  console.log('Express server is up and running on http://localhost:3000/');
});
