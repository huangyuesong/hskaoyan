var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/app', function(req, res, next) {
  res.render('AppDownload');
});

module.exports = router;
