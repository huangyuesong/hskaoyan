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

router.get('/forum_college.html', function(req, res, next) {
  res.render('forum_college');
});

module.exports = router;
