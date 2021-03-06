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

router.get('/forum_college_more.html', function(req, res, next) {
  res.render('forum_college_more');
});

router.get('/forum_article.html', function(req, res, next) {
  res.render('forum_article');
});

router.get('/news_college.html', function(req, res, next) {
  res.render('news_college');
});

router.get('/news_college_list.html', function(req, res, next) {
  res.render('news_college_list');
});

router.get('/news_detail.html', function(req, res, next) {
  res.render('news_detail');
});

router.get('/material_college.html', function(req, res, next) {
  res.render('material_college');
});

router.get('/material_course.html', function(req, res, next) {
  res.render('material_course');
});

router.get('/material_download.html', function(req, res, next) {
  res.render('material_download');
});

module.exports = router;
