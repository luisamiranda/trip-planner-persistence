const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
var Hotel = require('../../models/hotel');
var Restaurant = require('../../models/restaurant');
var Activity = require('../../models/activity');
var Day = require('../../models/day');

module.exports = router;

router.get('/', function(req, res, next){
  Day.findAll()
  .then(function(days){
    res.send(days);
  })
  .catch(function(err){
    console.error(err.stack);
  })
});

router.get('/:id', function(req, res, next){
  Day.findById(req.params.id)
  .then(function(day){
    res.send(day);
  })
  .catch(function(err){
    console.error(err.stack);
  });
});

router.delete('/:id', function(req, res, next){
  Day.findById(req.params.id)
  .then(function(day){
    res.send(day);
  })
  .catch(function(err){
    console.error(err.stack);
  });
});

router.post('/', function(req, res, next){
  Day.create()
  .then(function(day){
    res.redirect('/api/days');
  })
  .catch(function(err){
    console.error(err.stack);
  });
});

router.post('/:id/:attraction', function(req, res, next){
  Day.findById(req.params.id)
  .then(function(day){
    var attraction = req.params.attraction;
    if(attraction === "restaurant"){
      day_restaurant.findOrCreate({
        dayNumber: req.params.id,

      })
    }
    else if(attraction === "activity"){}
    else if(attraction === "hotel"){}
  })
});
