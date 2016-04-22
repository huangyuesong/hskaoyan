var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/index.html', function(req, res, next) {
  res.render('index');
});

router.get('/app.html', function(req, res, next) {
  res.render('app');
});

router.get('/forum.html', function(req, res, next) {
  res.render('forum');
});

module.exports = router;
