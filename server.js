var express = require('express')
var path = require('path')
var app = express();
require('./app/routing/apiRoutes.js')(app)
require('./app/routing/htmlRoutes.js')(app)


var PORT = process.env.PORT || 3000;




// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());









app.listen(PORT, function(){
    console.log('Server Listening on PORT: ',+PORT,'...')
})