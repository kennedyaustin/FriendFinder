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

      // The if/ else if statements take in the string from the choices 1 and 5 and convert
      // them into numbers
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
    let comparingFriends= []
    for (let i = 0; i < friendData.length; i++) {

      // Easier access to data from friend.js
      let friendCompared= friendData[i]
      // Used to calculate scores between friends on the json page
      let totalDifference

      // This loop will take the scores values from each friend in the array and compute the total difference
      // for each for finding the best friend
      for (let j = 0; j < friendCompared.scores.length; j++) {

        let differenceOfOneFriend= Math.abs(friendCompared.scores[j] - newFriend.scores[j])
        totalDifference += differenceOfOneFriend

      }
      
      // Each friend will have their total difference put into an array
      comparingFriends[i]= totalDifference
    }

    // This for loop determines the best matching friend
    let bestFriend= comparingFriends[0]
    let friendIndex= 0    
    for (i = 1; i < comparingFriends.length; i++) {

      bestFriend= comparingFriends[i]
      friendIndex= i

    }

    // res.json will send the info of the best matching friend to the survey page
    // in the form of a modal
    // req.body is available since we're using the body parsing middleware
    friendData.push(newFriend)
    res.json(friendData[friendIndex])

  });

};
