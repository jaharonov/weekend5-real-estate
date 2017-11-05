var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var rentalSchema = new Schema({cost: Number, sqft: Number, city: String });
var Rental = mongoose.model('Rental', rentalSchema, 'rentals');

router.post('/', function (req, res) {
    console.log(req.body);

    var rentalToAdd = new Rental(req.body);

    rentalToAdd.save(function (err, data) {
        if (err) {
            console.log(err);
            res.sendStatus(500);
        } else {
            res.sendStatus(201);
        }
    });
});

router.get('/', function (req, res) {
    Rental.find({}, function (err, foundRentals) {
        if (err) {
            console.log('error:', err);
            res.sendStatus(500);
        } else {
            res.send(foundRentals);
        }
    });
});

module.exports = router;