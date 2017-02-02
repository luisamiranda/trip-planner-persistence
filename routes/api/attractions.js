const express = require('express');
const router = express.Router();
var Hotel = require('../../models/hotel');
var Restaurant = require('../../models/restaurant');
var Activity = require('../../models/activity');

module.exports = router;

router.get('/hotels', function(req, res, next){
  Hotel.findAll()
  .then(function(hotels){
    res.send(hotels);
  })
  .catch(next);
});


router.get('/restaurants', function(req, res, next){
  Restaurant.findAll()
  .then(function(rests){
    res.send(rests);
  })
  .catch(next);
});

router.get('/activities', function(req, res, next){
  Activity.findAll()
  .then(function(acts){
    res.send(acts);
  })
  .catch(next);
});
