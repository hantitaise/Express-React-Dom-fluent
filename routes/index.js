var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

  console.log("Index routing");
  res.render('index', { title: 'Express' });
});

module.exports = router;
