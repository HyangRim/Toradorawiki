var express = require('express');
var router = express.Router();
var showdown = require('showdown');


var converter = new showdown.Converter();
var text = '#Hello markdown!!';

/* GET users listing. */
router.get('/', function(req, res) {
  var html = converter.makeHtml(text);
  res.send({title: `${text}`});
});

module.exports = router;
