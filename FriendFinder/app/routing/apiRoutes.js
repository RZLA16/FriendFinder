
// LOAD DATA
// We are linking our routes to a series of "data" sources.


var friendsData = require("../data/friendsData");

// ROUTING


module.exports = function(app) {
  
  // API GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases when a user visits a link
  // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
 

  app.get("/api/friends", function(req, res) {
    res.json(friendsData);
  });

  // API POST Requests
  // Below code handles when a user submits a form and thus submits data to the server.
  

  app.post("/api/friends", function(req, res) {
    
   // insert code that compares the survey results and the data from friends.js

    }

  });

};