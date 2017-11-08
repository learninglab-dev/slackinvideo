var express = require('express');
var router = express.Router();
const slack = require('slack');
var MessageModel = require('../models/message');

router.post('/events', function(req, res, next) {
  console.log("got a post");
  console.log(req.body);
});

module.exports = router;
