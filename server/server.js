// import express from node modules
let express = require('express');
// make the application
let app = express();
const PORT = 5000;
//serve the file
app.use(express.static('server/public'));
// run server
app.listen(PORT, function() {
    console.log('app running on port' + PORT);
})