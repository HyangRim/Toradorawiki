var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res) {
  res.send({greeting: 'Hello React x Node.js'});
});

module.exports = router;
