// Dependencies
const express= require('express');
const path= require('path')

// Configure the express server
const port= 8080
// This will create the server for us
const app= express();
// Processes data parsing
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

//  --------------------- Give user the html files when the corresponding link is typed --------------------------------

// This will send the files to the user when they load the page
// with the particular 
app.get('/', function(request, response) {
    response.sendFile(path.join(__dirname, 'index.html'))
})






// --------------------- Shows link in terminal -----------------------------

// Listen to open up the link to your page
app.listen(port, function() {

    console.log(`Server is listening at http://localhost:${port}`)

})