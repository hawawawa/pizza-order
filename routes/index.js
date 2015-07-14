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

router.get('/customize/:name', function (req, res){
  res.render('partials/customize');
});

router.get('/order/confirmation', function (req, res){
  var name = req.params.name;
  res.render('partials/customize');
});

router.get('/', function(req, res, next) {
  res.render('index.html');
});

router.get('/*', function (req, res){
  res.render('index.html');
});

module.exports = router;
