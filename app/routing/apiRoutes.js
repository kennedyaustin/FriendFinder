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

    // For ease of access to info (friendName, friendphoto, scores)
    let newFriend= req.body 

    // Converts the numbers that are in the json friends list from 
    // string to number values so they can be added/ subtracted
    for (let i = 0; i < newFriend.scores.length; i++) {

      newFriend.scores[i]= parseInt(newFriend.scores[i])

    }

    // This sets up the for loops below to distinguish which friend matches
    // the best with the user from the answers that they give
    let bestMatchingFriend
    let minDiff= 10

    // This for loop will start the user out with 0 difference from the friends listed
    // It will then add the difference of each number to the totalDif so that the total 
    // will added up for comparison to the list
    for (let i = 0; i < friendData.length; i++) {

      let totalDiff= 0
      for (let j = 0; j < friendData[i].scores.length; j++) {

        // The difference of the user input from the list of friends already in the 
        // friends.js file
        let diff= Math.abs(newFriend.scores[j] - friendData[i].scores[j])
        totalDiff += diff

      }
      // If there's a new minDiff change the bestMatchingFriend to the next highest diff
      // for comparison
      if (totalDiff < minDiff) {

        bestMatchingFriend= i
        minDiff= totalDiff

      }

    }

    // res.json will send the info of the best matching friend to the survey page
    // in the form of a modal
    // req.body is available since we're using the body parsing middleware
    friendData.push(newFriend)
    res.json(friendData[bestMatchingFriend])

  });

};
