var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var port = process.env.PORT || 5000;
var rentalRoute = require('./rentalRoute.js');
var listingRoute = require('./listingRoute.js')
//var add = require('./public/scripts/addController.js');
//var view = require('./public/scripts/viewController.js');
/** ---------- MIDDLEWARE ---------- **/
app.use(bodyParser.json()); // needed for angular requests
app.use(express.static('server/public'));

/** ---------- EXPRESS ROUTES ---------- **/
app.use('/rentals', rentalRoute);
app.use('/listings', listingRoute);


/** ---------- MONGOOSE ------------ **/
var mongoose = require('mongoose');

// 27017 is the default mongo port number
var mongoURI = 'mongodb://jaffa:mountainlion$$@ds249565.mlab.com:49565/jaffa';
// process.env.MONGODB_URI will only be defined if you
    // are running on Heroku
    if(process.env.MONGODB_URI != undefined) {
            // use the string value of the environment variable
                mongoURI = process.env.MONGODB_URI;
        } else {
        // use the local database server
           mongoURI = 'mongodb://localhost:27017/realestate';
    }

    mongoose.connect(databaseUrl, {
   useMongoClient: true
        });

mongoose.connection.on('connected', function () {
    console.log('mongoose is connected!');
});

mongoose.connection.on('error', function () {
    console.log('mongoose connection failed');
});
mongoose.connect(databaseUrl);
// Eventually, the mongoose code should be in a module

/** ---------- START SERVER ---------- **/
app.listen(port, function () {
    console.log('Listening on port: ', port);
});