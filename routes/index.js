var express = require('express');
var mongo = require('mongodb');
var monk = require('monk');
var db = monk('localhost:27017/testdb');
var router = express.Router();

/* GET home page. */
router.get('/partials/:name', function (req, res){
  var name = req.params.name;
  res.render('partials/' + name);
});

router.get('/data/users', function(req, res){
  // res.json([{ "email": "hi@hi.com", "password": "123"}]);
  var db = req.db;
  var collection = db.get('users');
  collection.find({},{},function(e,data){
    res.json(data);
  });
});

router.get('/', function(req, res, next) {
  res.render('index.html');
});

router.get('/*', function (req, res){
  res.render('index.html');
});

module.exports = router;
