// dependencies

var express = require("express");

var app = express();
var port = process.env.PORT || 3000;

var path = require("path");
var bodyParser = require('body-parser')
 
var app = express()
 
// parse various different custom JSON types as JSON 
app.use(bodyParser.json({ type: 'application/*+json' }))
 
// parse some custom thing into a Buffer 
app.use(bodyParser.raw({ type: 'application/vnd.custom-type' }))
 
// parse an HTML body into a string 
app.use(bodyParser.text({ type: 'text/html' }))


// ROUTER
// The below points our server to a series of "route" files.
// These routes give our server a "map" of how to respond when users visit or request data from various URLs.

require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);


// LISTENER
// The below code effectively "starts" our server


app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});