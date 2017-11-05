var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var listingSchema = new Schema({cost: Number, sqft: Number, city: String});
var Listing = mongoose.model('Listing', listingSchema, 'listings');

router.post('/', function (req, res) {
    console.log(req.body);

    var listingToAdd = new Listing(req.body);

    listingToAdd.save(function (err, data) {
        if (err) {
            console.log(err);
            res.sendStatus(500);
        } else {
            res.sendStatus(201);
        }
    });
});

router.get('/', function (req, res) {
    Listing.find({}, function (err, foundListings) {
        if (err) {
            console.log('error:', err);
            res.sendStatus(500);
        } else {
            res.send(foundListings);
        }
    });
});

module.exports = router;