// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of 'data' sources.
// These data sources hold arrays of information on table-data, waitinglist, etc.
// ===============================================================================

var friendData= require('../data/friends');

// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
  // API GET Requests
  // Below code handles when users 'visit' a page.
  // In each of the below cases when a user visits a link
  // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
  // ---------------------------------------------------------------------------

  app.get('/api/friends', function(req, res) {
    res.json(friendData);
  });

  // API POST Requests
  // Below code handles when a user submits a form and thus submits data to the server.
  // In each of the below cases, when a user submits form data (a JSON object)
  // ...the JSON is pushed to the appropriate JavaScript array
  // (ex. User fills out a reservation request... this data is then sent to the server...
  // Then the server saves the data to the tableData array)
  // ---------------------------------------------------------------------------

  app.post('/api/friends', function(req, res) {

    let newFriend= req.body

    // This for loop will turn the responses that are taken from the survey
    // into actual numbers instead of strings for us to use to calculate the 
    // difference in choices to match the friends up
    for (let i = 0; i < newFriend.scores.length; i++) {

      if (newFriend.scores[i] == '1 (Strongly Disagree') {

        newFriend.scores[i]= 1

      } else if (newFriend.scores[i] == '5 (Strongly Agree') {

        newFriend.scores[i]= 5

      } else {

        newFriend.scores[i]= parseInt(newFriend.scores[i])

      }

    }

    // This for loop is going to loop over the friends that are in the friend.js file
    // as well as do the math to choose the best friend that will match witht the users
    // input
    for (let i = 0; i < friendData.length; i++) {

      let friendCompared= friendData[i]
      let totalDifference

      for (let j = 0; j < friendCompared.scores.length; k++) {


        
      }

    }

    
    // Note the code here. Our 'server' will respond to requests and let users know if they have a table or not.
    // It will do this by sending out the value 'true' have a table
    // req.body is available since we're using the body parsing middleware
    friendData.push(req.body)
    res.json(true)

  });

};
