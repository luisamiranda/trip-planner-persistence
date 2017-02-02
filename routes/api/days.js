const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');

var Sequelize = require('sequelize');
var db = require('../../models/_db');

var Hotel = require('../../models/hotel');
var Restaurant = require('../../models/restaurant');
var Activity = require('../../models/activity');
var Day = require('../../models/day');

module.exports = router;

router.get('/', function(req, res, next){
  Day.findAll()
  .then(function(days){
    //include all the stuff
    res.send(days);
  })
  .catch(next);
});

router.post('/', function(req, res, next){
  Day.create({
    number: num
  })
  .then(function(day){
    res.send(day);
  })
  .catch(next);
});


router.get('/:id', function(req, res, next){
  Day.findAll({
      where: {id: req.params.id},
      include: [{
        model: Restaurant,
        model: Activity,
        model: Hotel
      }]
    })
  .then(function(day){
    res.send(day);
  })
  .catch(next);
});

router.delete('/:id', function(req, res, next){
  Day.destroy({
    where: {
      id: req.params.id
    }
  })
  .catch(next);
});



router.get('/:id/hotels', function(req, res, next){
    Day.findById(req.params.id);
});

router.post('/:id/hotels', function(req, res, next){
    Day.findById(req.params.id);
});

router.delete('/:id/hotels', function(req, res, next){
    Day.findById(req.params.id)
});

router.get('/:id/restaurants', function(req, res, next){
    Day.findById(req.params.id)
    .then(function(day){
      Day.addRestaurants();
    })
    .catch(next);
});
router.post('/:id/restaurants', function(req, res, next){
    Day.findById(req.params.id)
});

router.delete('/:id/restaurants', function(req, res, next){
    Day.findById(req.params.id)
});


router.get('/:id/activities', function(req, res, next){
    Day.findById(req.params.id)
});
router.post('/:id/activities', function(req, res, next){
    Day.findById(req.params.id)
});
router.delete('/:id/activities', function(req, res, next){
    Day.findById(req.params.id)
});
